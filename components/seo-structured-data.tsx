export function ServiceStructuredData({ 
  name, 
  description, 
  serviceType, 
  providerName = "MacPower IT Solutions" 
}: { 
  name: string; 
  description: string; 
  serviceType: string;
  providerName?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "serviceType": serviceType,
    "provider": {
      "@type": "Organization",
      "name": providerName,
      "url": "https://www.macpower.com.co"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Colombia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${name} Catalog`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoría Empresarial"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Implementación y Soporte"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQStructuredData({ items }: { items: { question: string; answer: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
