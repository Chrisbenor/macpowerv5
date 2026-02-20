import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EducationHero() {
  return (
    <section className="relative w-full aspect-[5/2] min-h-[420px] overflow-hidden flex items-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Principal-1500x600px%20%281%29-DCOcGoC7c8yrAkiX4n9909lZj1NWZH.png"
          alt="Apple devices for education"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6 w-full pt-20">
        <div className="text-left max-w-2xl">
          <h1 className="mb-4 text-3xl font-bold leading-tight text-white drop-shadow-2xl md:text-4xl lg:text-5xl text-balance text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffe3] to-[#00a6d6]">Apple</span> para Educación
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 text-pretty leading-relaxed">
            Implementamos el ecosistema Apple en instituciones educativas de forma segura, ordenada y escalable, integrando Apple School Manager, MDM y dispositivos listos para el aula desde el primer día.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold border-0 transition-all duration-300">
              <Link href="/contacto-empresas">
                Solicitar información
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link href="/mac">Ver catálogo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
