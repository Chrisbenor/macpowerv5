import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServiceEstimator } from "@/components/labpower/service-estimator";
import { ServiceTracking } from "@/components/labpower/service-tracking";
import { StickyCTA } from "@/components/shared/sticky-cta";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, Calculator, Search } from "lucide-react";
import Link from "next/link";
import { ContactFormSection } from "@/components/nosotros/contact-form-section";

export const metadata = {
  title: "Herramientas de Servicio | LabPower - MacPower",
  description:
    "Estima el costo de reparación de tu dispositivo Apple y consulta el estado de tu orden de servicio en LabPower, Centro de Servicio Autorizado Apple.",
};

export default function HerramientasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Hero */}
        <section className="py-14 lg:py-20 border-b border-border/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">Inicio</Link>
              <span>/</span>
              <Link href="/labpower" className="hover:text-foreground transition-colors">LabPower</Link>
              <span>/</span>
              <span className="text-foreground">Herramientas</span>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <Badge className="px-3 py-1 text-xs font-semibold bg-[#00ffe3]/10 text-[#00ffe3] border border-[#00ffe3]/30 rounded-full">
                LabPower — Centro Autorizado Apple
              </Badge>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00ffe3]/20 to-[#00a6d6]/10 flex items-center justify-center">
                  <FlaskConical className="h-6 w-6 text-[#00ffe3]" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                  Herramientas de Servicio
                </h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Obtén una estimación de costos de reparación o consulta en tiempo real el estado de tu dispositivo Apple en nuestro centro de servicio.
              </p>

              {/* Quick nav cards */}
              <div className="grid sm:grid-cols-2 gap-4 mt-6 w-full max-w-xl">
                <a
                  href="#service-estimator"
                  className="group flex items-center gap-3 rounded-xl border border-border/40 bg-card/60 px-5 py-4 transition-all duration-300 hover:border-[#00ffe3]/40 hover:shadow-[0_4px_24px_rgba(0,255,227,0.1)]"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#00ffe3]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#00ffe3]/20">
                    <Calculator className="h-4 w-4 text-[#00ffe3]" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground text-sm">Estimador</p>
                    <p className="text-xs text-muted-foreground">Calcula el costo de tu reparación</p>
                  </div>
                </a>
                <a
                  href="#service-tracking"
                  className="group flex items-center gap-3 rounded-xl border border-border/40 bg-card/60 px-5 py-4 transition-all duration-300 hover:border-[#00ffe3]/40 hover:shadow-[0_4px_24px_rgba(0,255,227,0.1)]"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#00ffe3]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#00ffe3]/20">
                    <Search className="h-4 w-4 text-[#00ffe3]" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground text-sm">Seguimiento</p>
                    <p className="text-xs text-muted-foreground">Consulta el estado de tu orden</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tools */}
        <div id="service-estimator">
          <ServiceEstimator />
        </div>
        <div id="service-tracking">
          <ServiceTracking />
        </div>
        <ContactFormSection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
