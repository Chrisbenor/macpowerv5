import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export function EducationHowWeDoIt() {
  const steps = [
    {
      number: "01",
      title: "Estrategia y diagnóstico",
      description: "Analizamos infraestructura, modelo pedagógico y objetivos institucionales para diseñar una arquitectura Apple alineada a la visión académica.",
    },
    {
      number: "02",
      title: "Despliegue Inteligente",
      description: "Implementamos dispositivos, Apple School Manager y MDM con configuración automatizada (zero-touch), integrando usuarios, contenidos y políticas desde el primer día.",
    },
    {
      number: "03",
      title: "Adopción y capacitación",
      description: "Capacitamos docentes, administrativos y equipos TI para garantizar uso pedagógico real, no solo implementación técnica.",
    },
    {
      number: "04",
      title: "Evolución y soporte continuo",
      description: "Mesa de ayuda especializada, actualizaciones y acompañamiento estratégico para asegurar continuidad, escalabilidad y mejora constante.",
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-6 bg-secondary/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Cómo lo hacemos?
          </h2>
          <p className="text-muted-foreground text-lg">
            Proceso integral de implementación de tecnología Apple en tu institución
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <Card key={i} className="p-6 bg-card border-border">
              <div className="text-3xl font-bold text-primary mb-3">{step.number}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
