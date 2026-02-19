import Image from "next/image";
import Link from "next/link";

export function MacMiniBanner() {
  return (
    <section className="w-full bg-black overflow-hidden">
      <Link
        href="/mac/mac-mini"
        className="block group"
        aria-label="Mac mini — Diseñado para Apple Intelligence"
      >
        <div className="relative mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between min-h-[220px] md:min-h-[280px]">

          {/* Left — product image */}
          <div className="relative w-full sm:w-1/2 flex items-end justify-center sm:justify-start h-[220px] md:h-[280px] shrink-0">
            <Image
              src="images/mini.png"
              alt="Mac mini sostenido por una mano"
              fill
              className="object-contain object-bottom sm:object-left-bottom"
              sizes="(max-width: 640px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right — copy */}
          <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left px-6 pb-8 sm:pb-0 sm:pr-12 gap-3">
            {/* Apple logo + product name */}
            <div className="flex items-center gap-2">
              {/* Apple SVG logo in white */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 814 1000"
                className="h-5 w-5 fill-white"
                aria-hidden="true"
              >
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.4C46.7 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.6-49.1 190.5-49.1zm-134.3-99.7c32.7-39.5 55.4-94.1 55.4-148.7 0-7.7-.6-15.4-1.9-22.4-52.4 1.9-114.6 34.9-151.4 80.8-28.5 32.7-56.4 87.3-56.4 142.5 0 8.3 1.3 16.6 1.9 19.2 3.2.6 8.4 1.3 13.6 1.3 47.8 0 105.4-32.1 138.8-72.7z" />
              </svg>
              <span className="text-white text-xl md:text-2xl font-semibold tracking-tight">
                Mac mini
              </span>
            </div>

            {/* Gradient tagline */}
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
              style={{
                background:
                  "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Diseñado para Apple Intelligence.
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}
