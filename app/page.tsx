import Link from "next/link"
import Image from "next/image"
import { Heart, Home, PawPrint, Users, AlertTriangle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const urgentCases = [
  {
    id: 1,
    name: "Luna",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
    condition: "Necesita cirugía de cadera",
    needed: "$45.000",
    species: "Perro",
  },
  {
    id: 2,
    name: "Michi",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
    condition: "Tratamiento de leucemia felina",
    needed: "$38.000",
    species: "Gato",
  },
  {
    id: 3,
    name: "Rocky",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&h=400&fit=crop",
    condition: "Operación ocular urgente",
    needed: "$52.000",
    species: "Perro",
  },
]

const impactStats = [
  { value: "500+", label: "Rescatados", icon: PawPrint },
  { value: "300+", label: "Familias Formadas", icon: Home },
  { value: "150+", label: "Hogares de Tránsito", icon: Users },
  { value: "100%", label: "Amor Entregado", icon: Heart },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary" />
          <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-accent" />
        </div>
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 border-primary/20 bg-primary/10 text-primary">
              Rescate y Adopción Responsable
            </Badge>
            <h1 className="mb-6 font-serif text-4xl font-normal leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Cambia una vida, adopta un amigo
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Somos una organización sin refugio físico. Trabajamos con amor a través de hogares de tránsito, 
              brindando una segunda oportunidad a quienes más lo necesitan.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2 px-8">
                <Link href="/adopciones">
                  <PawPrint className="h-5 w-5" />
                  Adoptar
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 px-8">
                <Link href="/donar">
                  <Heart className="h-5 w-5" />
                  Donar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Cases Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 flex flex-col items-center text-center">
            <Badge variant="destructive" className="mb-4 gap-1">
              <AlertTriangle className="h-3 w-3" />
              Casos Urgentes
            </Badge>
            <h2 className="mb-4 font-serif text-3xl font-normal text-foreground md:text-4xl text-balance">
              Ellos necesitan tu ayuda ahora
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Estos animales requieren atención médica urgente. Tu donación puede salvar sus vidas.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {urgentCases.map((animal) => (
              <Card key={animal.id} className="group overflow-hidden border-2 border-destructive/20 transition-all hover:border-destructive/40 hover:shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={animal.image}
                      alt={`Foto de ${animal.name}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge 
                      variant="destructive" 
                      className="absolute left-3 top-3"
                    >
                      Urgente
                    </Badge>
                    <Badge 
                      variant="secondary" 
                      className="absolute right-3 top-3"
                    >
                      {animal.species}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-5">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{animal.name}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{animal.condition}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Necesita:</span>
                    <span className="text-lg font-bold text-destructive">{animal.needed}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-5 pt-0">
                  <Button asChild className="w-full gap-2" variant="destructive">
                    <Link href="/donar">
                      <Heart className="h-4 w-4" />
                      Ayudar a {animal.name}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-normal text-primary-foreground md:text-4xl text-balance">
              Nuestro Impacto
            </h2>
            <p className="mx-auto max-w-2xl text-primary-foreground/80">
              Cada número representa una historia de amor, rescate y esperanza.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <span className="mb-2 text-4xl font-bold text-primary-foreground md:text-5xl">
                  {stat.value}
                </span>
                <span className="text-sm font-medium uppercase tracking-wider text-primary-foreground/80">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-3xl font-normal text-foreground md:text-4xl text-balance">
              Sé parte del cambio
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Hay muchas formas de ayudar: adopta, dona, o conviértete en hogar de tránsito. 
              Juntos podemos darles una segunda oportunidad.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/adopciones">
                  Ver animales en adopción
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="/transito">
                  Ser hogar de tránsito
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
