import Link from "next/link"
import { PawPrint, Instagram, Facebook, Mail, Heart } from "lucide-react"

const footerLinks = {
  navegacion: [
    { href: "/", label: "Inicio" },
    { href: "/adopciones", label: "Adopciones" },
    { href: "/transito", label: "Tránsito" },
    { href: "/quienes-somos", label: "Quiénes Somos" },
  ],
  ayuda: [
    { href: "/donar", label: "Donar" },
    { href: "/transito", label: "Ser Tránsito" },
    { href: "/adopciones", label: "Adoptar" },
  ],
}

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "mailto:contacto@patitas.org", icon: Mail, label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <PawPrint className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">Patitas</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Somos una organización sin fines de lucro dedicada al rescate, rehabilitación y adopción responsable de animales.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Navegación
            </h3>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Cómo Ayudar
            </h3>
            <ul className="space-y-3">
              {footerLinks.ayuda.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Buenos Aires, Argentina</li>
              <li>
                <a href="mailto:contacto@patitas.org" className="transition-colors hover:text-foreground">
                  contacto@patitas.org
                </a>
              </li>
              <li>
                <a href="tel:+5491112345678" className="transition-colors hover:text-foreground">
                  +54 9 11 1234-5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Patitas. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Desarrollado con <Heart className="h-4 w-4 fill-primary text-primary" /> por Navarrow
          </p>
        </div>
      </div>
    </footer>
  )
}
