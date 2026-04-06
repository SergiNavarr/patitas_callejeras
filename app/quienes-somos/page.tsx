import Image from "next/image"
import { Heart, Home, Shield, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Heart,
    title: "Amor Incondicional",
    description: "Cada animal merece amor y respeto. Trabajamos con compasión y dedicación.",
  },
  {
    icon: Home,
    title: "Hogares Temporales",
    description: "Nuestro modelo de tránsito garantiza atención personalizada para cada rescatado.",
  },
  {
    icon: Shield,
    title: "Adopción Responsable",
    description: "Evaluamos cuidadosamente cada adopción para asegurar el bienestar a largo plazo.",
  },
  {
    icon: Users,
    title: "Comunidad Unida",
    description: "Voluntarios, padrinos y adoptantes forman nuestra red de amor animal.",
  },
]

const teamMembers = [
  {
    name: "María García",
    role: "Fundadora y Coordinadora",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
  },
  {
    name: "Carlos Rodríguez",
    role: "Coordinador de Rescates",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
  },
  {
    name: "Ana Martínez",
    role: "Responsable de Tránsitos",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
  },
  {
    name: "Lucas Fernández",
    role: "Veterinario Colaborador",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
  },
]

export default function QuienesSomosPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-serif text-4xl font-normal text-foreground md:text-5xl text-balance">
              Quiénes Somos
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Somos una organización sin fines de lucro dedicada a rescatar, rehabilitar y 
              encontrar hogares amorosos para animales abandonados y maltratados.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-3xl font-normal text-foreground md:text-4xl text-balance">
                Nuestra Misión
              </h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Trabajamos incansablemente para rescatar animales en situación de abandono, 
                maltrato o peligro, brindándoles atención médica, amor y la oportunidad de 
                encontrar una familia que los ame para siempre.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                A diferencia de los refugios tradicionales, operamos a través de una red de 
                hogares de tránsito. Esto significa que cada animal recibe atención 
                individualizada en un ambiente hogareño, lo que facilita su rehabilitación 
                y adaptación a la vida en familia.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop"
                alt="Voluntarios cuidando animales"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop"
                alt="Perros felices jugando"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="mb-6 font-serif text-3xl font-normal text-foreground md:text-4xl text-balance">
                Nuestra Historia
              </h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Patitas nació en 2018, cuando un grupo de amigos decidió unir fuerzas para 
                ayudar a los animales callejeros de su barrio. Lo que comenzó como pequeñas 
                acciones individuales se convirtió en una organización estructurada.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Hoy, seis años después, hemos rescatado más de 500 animales y formado más de 
                300 familias. Nuestra red de tránsitos cuenta con más de 150 hogares comprometidos 
                que abren sus puertas para dar amor temporal mientras encontramos la familia 
                perfecta para cada rescatado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-normal text-foreground md:text-4xl text-balance">
              Nuestros Valores
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Estos principios guían cada una de nuestras acciones y decisiones.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="border-0 bg-secondary text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-normal text-foreground md:text-4xl text-balance">
              Nuestro Equipo
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Un grupo de personas apasionadas que dedican su tiempo y energía a esta causa.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-3xl font-normal text-foreground md:text-4xl text-balance">
              Nuestro Modelo: Sin Refugio, Puro Amor
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              No tenemos un refugio físico, y eso es intencional. Creemos que cada animal 
              merece la calidez de un hogar, no las frías paredes de una jaula. Por eso, 
              trabajamos exclusivamente con hogares de tránsito.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Cuando rescatamos un animal, lo evaluamos médica y conductualmente. Luego, 
              lo ubicamos en un hogar de tránsito donde recibe amor, socialización y 
              preparación para su futura familia. Este modelo nos permite conocer profundamente 
              a cada animal y hacer matches perfectos con sus adoptantes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
