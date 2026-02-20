"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function LabPowerHero() {
  const scrollToEstimator = () => {
    const estimator = document.getElementById('service-estimator');
    estimator?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pb-24 min-h-[450px] md:min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-principal-1500x600px%20%283%29-6WdePWoKHw2NOkRSrp8Jd8nSKEyWe0.png"
          alt="LabPower Hero Background"
          fill
          className="object-cover sm:object-cover object-right lg:object-[right_center]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 md:via-black/70 to-transparent sm:to-black/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="max-w-2xl">
          <div className="flex flex-col items-start space-y-6 lg:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2 text-balance leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffe3] to-[#00a6d6]">
                LabPower
              </span>
              <br />
              Servicio técnico especializado
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed text-white/90 text-pretty text-left">
              Diagnóstico, reparación y seguimiento de tu equipo con respaldo experto.
            </p>
          
            <div className="pt-2">
              <Button
                onClick={scrollToEstimator}
                size="lg"
                className="bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold border-0 shadow-lg transition-all duration-300 rounded-full px-10 py-6 text-lg hover:shadow-xl hover:shadow-cyan-500/50"
              >
                Cotizar mi servicio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
