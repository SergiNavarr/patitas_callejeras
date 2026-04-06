"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Home, Stethoscope, Package, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

const benefits = [
  {
    icon: Stethoscope,
    title: "Atención Veterinaria",
    description: "Cubrimos vacunas, castraciones, desparasitaciones y cualquier emergencia médica.",
  },
  {
    icon: Package,
    title: "Alimento Incluido",
    description: "Proporcionamos el alimento balanceado para el animal durante todo el tránsito.",
  },
  {
    icon: Heart,
    title: "Acompañamiento",
    description: "Te asesoramos y acompañamos durante todo el proceso de adaptación.",
  },
  {
    icon: Home,
    title: "Elementos Básicos",
    description: "Proveemos cama, platos, collar y correa si los necesitás.",
  },
]

const responsibilities = [
  "Brindar un espacio seguro y limpio",
  "Alimentar y dar agua fresca diariamente",
  "Dar amor, atención y socialización",
  "Llevar a controles veterinarios programados",
  "Enviar actualizaciones periódicas con fotos",
  "Facilitar las visitas de posibles adoptantes",
]

export default function TransitoPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    housing: "",
    hasYard: false,
    hasPets: false,
    petsDescription: "",
    experience: "",
    availability: "",
    motivation: "",
    acceptTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-serif text-4xl font-normal text-foreground md:text-5xl text-balance">
              Sé un Hogar de Tránsito
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Los hogares de tránsito son el corazón de nuestra organización. Al abrir las puertas 
              de tu hogar temporalmente, le das a un animal rescatado la oportunidad de recuperarse 
              y encontrar su familia para siempre.
            </p>
          </div>
        </div>
      </section>

      {/* What is Foster Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop"
                alt="Familia con perro de tránsito"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6 font-serif text-3xl font-normal text-foreground md:text-4xl text-balance">
                ¿Qué es ser tránsito?
              </h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Un hogar de tránsito es una familia que hospeda temporalmente a un animal rescatado 
                mientras buscamos su familia adoptiva definitiva. Es una forma increíble de ayudar 
                sin el compromiso de por vida que implica una adopción.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                El tiempo de tránsito varía según cada animal, pero generalmente es de 1 a 3 meses. 
                Durante este período, el animal aprende a vivir en un hogar, se socializa y se 
                prepara para su nueva vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-normal text-foreground md:text-4xl text-balance">
              ¿Qué brindamos nosotros?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              No te preocupes por los gastos. Nosotros cubrimos todo lo necesario para el bienestar del animal.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-0 bg-card text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-3xl font-normal text-foreground md:text-4xl text-balance">
                Tus responsabilidades
              </h2>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                Ser tránsito es una responsabilidad hermosa. Esto es lo que esperamos de vos:
              </p>
              <ul className="space-y-4">
                {responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-muted-foreground">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop"
                alt="Perro feliz en casa"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-normal text-foreground md:text-4xl text-balance">
                Formulario de Postulación
              </h2>
              <p className="text-muted-foreground">
                Completá este formulario y nos pondremos en contacto con vos para continuar el proceso.
              </p>
            </div>

            {formSubmitted ? (
              <Card className="border-0">
                <CardContent className="flex flex-col items-center p-12 text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-foreground">
                    ¡Gracias por tu postulación!
                  </h3>
                  <p className="text-muted-foreground">
                    Recibimos tu formulario y nos pondremos en contacto con vos en las próximas 48 horas 
                    para coordinar una entrevista y conocerte mejor.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0">
                <CardContent className="p-6 sm:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Info */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Información Personal</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre completo *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Tu nombre"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Teléfono *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="+54 9 11 1234-5678"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Barrio/Localidad *</Label>
                          <Input
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            placeholder="Palermo, CABA"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Housing Info */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Sobre tu hogar</h3>
                      <div className="space-y-2">
                        <Label>Tipo de vivienda *</Label>
                        <RadioGroup
                          value={formData.housing}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, housing: value }))}
                          className="flex flex-wrap gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="departamento" id="departamento" />
                            <Label htmlFor="departamento" className="cursor-pointer">Departamento</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="casa" id="casa" />
                            <Label htmlFor="casa" className="cursor-pointer">Casa</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ph" id="ph" />
                            <Label htmlFor="ph" className="cursor-pointer">PH</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="hasYard"
                          checked={formData.hasYard}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({ ...prev, hasYard: checked === true }))
                          }
                        />
                        <Label htmlFor="hasYard" className="cursor-pointer">
                          Tengo patio o balcón grande
                        </Label>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="hasPets"
                            checked={formData.hasPets}
                            onCheckedChange={(checked) =>
                              setFormData((prev) => ({ ...prev, hasPets: checked === true }))
                            }
                          />
                          <Label htmlFor="hasPets" className="cursor-pointer">
                            Tengo otras mascotas
                          </Label>
                        </div>
                        {formData.hasPets && (
                          <Textarea
                            name="petsDescription"
                            value={formData.petsDescription}
                            onChange={handleInputChange}
                            placeholder="Contanos sobre tus mascotas (especie, edad, temperamento)"
                            className="mt-2"
                          />
                        )}
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Experiencia y Disponibilidad</h3>
                      <div className="space-y-2">
                        <Label htmlFor="experience">¿Tenés experiencia con mascotas? *</Label>
                        <Textarea
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          required
                          placeholder="Contanos sobre tu experiencia previa con animales"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="availability">¿Cuántas horas al día estarías en casa? *</Label>
                        <Input
                          id="availability"
                          name="availability"
                          value={formData.availability}
                          onChange={handleInputChange}
                          required
                          placeholder="Ej: Trabajo desde casa, estoy 8 horas"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="motivation">¿Por qué querés ser tránsito? *</Label>
                        <Textarea
                          id="motivation"
                          name="motivation"
                          value={formData.motivation}
                          onChange={handleInputChange}
                          required
                          placeholder="Contanos qué te motiva a ayudar"
                        />
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="acceptTerms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({ ...prev, acceptTerms: checked === true }))
                        }
                        required
                      />
                      <Label htmlFor="acceptTerms" className="cursor-pointer text-sm leading-relaxed">
                        Acepto las responsabilidades del tránsito y entiendo que el animal sigue siendo 
                        propiedad de Patitas hasta su adopción definitiva. *
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={!formData.acceptTerms}
                    >
                      Enviar Postulación
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
