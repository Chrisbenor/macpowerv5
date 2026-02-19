"use client";

import Image from "next/image";
import Link from "next/link";

const slide = {
  title: "Pensamos diferente",
  description:
    "En MacPower IT Solutions impulsamos la forma en que personas y empresas usan la tecnología para operar, crecer y proteger su negocio. Con más de 27 años de experiencia, somos Apple Business Partner y Centro de Servicio Autorizado Apple, integrando soluciones en venta y renta de equipos, infraestructura y ciberseguridad, con un acompañamiento confiable de inicio a fin.",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banner-principal-1500x600px-B5IEyaIUwUlI4Umh85lWg2sz6P7qBO.png",
};

export function HeroAbout() {
  return (
    /* 
      El banner original es 1500×600px → ratio 5:2.
      Usamos w-full + aspect-[5/2] para que la sección escale
      proporcionalmente al ancho sin recortar la imagen.
      min-h asegura que en móvil haya suficiente espacio para el texto.
    */
    <section className="relative w-full aspect-[5/2] min-h-[420px] overflow-hidden flex items-center">
      {/* Background image — object-cover + object-center mantiene el aspecto */}
      <div className="absolute inset-0 z-0">
        <Image
          src={slide.image}
          alt="MacPower — Pensamos diferente"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay igual al homepage: from-black/80 via-black/50 to-transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* 
        Mismo wrapper que el homepage hero:
        mx-auto max-w-7xl px-4 lg:px-6
        Añadimos pt-20 para compensar el header fijo (h-16 + margen)
      */}
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6 z-10 w-full pt-20">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-3xl font-bold leading-tight text-white drop-shadow-2xl md:text-4xl lg:text-5xl text-balance text-left">
            {slide.title}
          </h1>
          <p className="text-lg text-gray-200 text-pretty leading-relaxed text-left">
            {slide.description}
          </p>
        </div>
      </div>
    </section>
  );
}
