"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";

const footerLinks = {
  apple: {
    title: "Soluciones Apple",
    links: [
      { name: "Apple para empresas", href: "/mac-para-empresas" },
      { name: "Apple para educaci\u00f3n", href: "/apple-educacion" },
      { name: "Cat\u00e1logo Apple", href: "/mac" },
    ],
  },
  portafolio: {
    title: "Portafolio",
    links: [
      { name: "Soluciones IT", href: "/portafolio/valor-it" },
      { name: "Soluciones DaaS", href: "/portafolio/daas" },
      { name: "LabPower", href: "/labpower" },
    ],
  },
  empresa: {
    title: "Empresa",
    links: [
      { name: "Inicio", href: "/" },
      { name: "Nosotros", href: "/nosotros" },
      { name: "Eventos", href: "/#eventos" },
      {
        name: "Pol\u00edtica de Protecci\u00f3n de Datos",
        href: "/files/politica-proteccion-datos.pdf",
      },
    ],
  },
};

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/macpower_itsolutions",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/company/macpower-it-solutions",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/macpoweritsolutions",
  },
];

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const openMedialabRandomLink = () => {
    const medialabLinks = [
      "https://medialab.design/",
      "https://medialab.design/curso",
    ];
    const href = medialabLinks[Math.floor(Math.random() * medialabLinks.length)];

    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/images/macpower-logo-original.svg"
                alt="MacPower IT Solutions"
                width={200}
                height={40}
                className="h-8 w-auto dark:hidden"
              />
              <Image
                src="/images/macpower-logo-white.svg"
                alt="MacPower IT Solutions"
                width={200}
                height={40}
                className="hidden h-8 w-auto dark:block"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Somos tu aliado para facilitar la inversi&oacute;n de soluciones
              IT que optimicen los procesos de tu empresa.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>
                  Calle 74 # 15-80, Oficina 101
                  <br />
                  Edificio Osaka Center, Bogot&aacute;, Colombia
                  <br />
                  C&oacute;digo Postal:110221
                </span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-secondary p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {year ?? ""} MacPower. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Dise&ntilde;ada por</span>
            <Link
              href="https://medialab.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-colors hover:text-primary"
            >
              Medialab Ingenier&iacute;a
            </Link>
            <button
              type="button"
              onClick={openMedialabRandomLink}
              className="h-px w-px rounded-full bg-muted-foreground/70"
              aria-label="Abrir Medialab"
              title="Abrir Medialab"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
