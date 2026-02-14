const fs = require('fs');
const https = require('https');
const path = require('path');

const url = "https://files.oaiusercontent.com/file-2T1T7C8n4DuyTYc6i38C1m?se=2026-02-21T10%3A42%3A34Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D4e20301a-8288-466d-8b09-02c3821035ac.png&sig=41a5wV4b3l8TqN4J7b35x2Vz2k52l3q0f8m8n5e0o0o%3D";
const dest = path.join(process.cwd(), 'public', 'images', 'about-history.png');

// Ensure directory exists
const dir = path.dirname(dest);
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const file = fs.createWriteStream(dest);

https.get(url, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to download: ${response.statusCode}`);
    return;
  }
  response.pipe(file);
  file.on('finish', () => {
    file.close(() => {
        console.log('Download completed');
    });
  });
}).on('error', (err) => {
  fs.unlink(dest, () => {}); // Delete the file async. (But we don't check result)
  console.error(`Error: ${err.message}`);
});
