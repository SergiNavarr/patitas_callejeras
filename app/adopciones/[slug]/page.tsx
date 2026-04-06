"use client"

import { useState, use } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, Heart, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getAnimalBySlug, animalsData } from "@/lib/animals-data"

const sizeLabels: Record<string, string> = {
  pequeno: "Pequeño",
  mediano: "Mediano",
  grande: "Grande",
}

const ageLabels: Record<string, string> = {
  cachorro: "Cachorro",
  adulto: "Adulto",
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function AnimalProfilePage({ params }: PageProps) {
  const { slug } = use(params)
  const animal = getAnimalBySlug(slug)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!animal) {
    notFound()
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % animal.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + animal.images.length) % animal.images.length)
  }

  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa adoptar a ${animal.name}. Vi su perfil en la página de Patitas y me gustaría recibir más información.`
  )
  const whatsappLink = `https://wa.me/5491112345678?text=${whatsappMessage}`

  return (
    <div className="flex flex-col">
      {/* Back Navigation */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 lg:px-8">
          <Link
            href="/adopciones"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a adopciones
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={animal.images[currentImageIndex]}
                  alt={`Foto ${currentImageIndex + 1} de ${animal.name}`}
                  fill
                  className="object-cover"
                  priority
                />
                {animal.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-lg transition-colors hover:bg-background"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-lg transition-colors hover:bg-background"
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
              </div>
              {/* Thumbnails */}
              {animal.images.length > 1 && (
                <div className="flex gap-3">
                  {animal.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-square w-20 overflow-hidden rounded-lg transition-all ${
                        currentImageIndex === index
                          ? "ring-2 ring-primary ring-offset-2"
                          : "opacity-70 hover:opacity-100"
                      }`}
                      aria-label={`Ver imagen ${index + 1}`}
                    >
                      <Image
                        src={image}
                        alt={`Miniatura ${index + 1} de ${animal.name}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Animal Info */}
            <div className="space-y-8">
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <Badge variant={animal.species === "perro" ? "default" : "secondary"}>
                    {animal.species === "perro" ? "Perro" : "Gato"}
                  </Badge>
                  <Badge variant="outline">{sizeLabels[animal.size]}</Badge>
                  <Badge variant="outline">{ageLabels[animal.age]}</Badge>
                  <Badge variant="outline">
                    {animal.sex === "macho" ? "Macho" : "Hembra"}
                  </Badge>
                </div>
                <h1 className="mb-4 font-serif text-4xl font-normal text-foreground md:text-5xl">
                  {animal.name}
                </h1>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {animal.description}
                </p>
              </div>

              {/* Health Status */}
              <Card className="border-0 bg-secondary">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold text-foreground">Estado de salud</h3>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full ${
                          animal.vaccinated ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        {animal.vaccinated && <Check className="h-4 w-4" />}
                      </div>
                      <span className="text-sm text-muted-foreground">Vacunado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full ${
                          animal.neutered ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        {animal.neutered && <Check className="h-4 w-4" />}
                      </div>
                      <span className="text-sm text-muted-foreground">Castrado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full ${
                          animal.dewormed ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        {animal.dewormed && <Check className="h-4 w-4" />}
                      </div>
                      <span className="text-sm text-muted-foreground">Desparasitado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Characteristics */}
              <div>
                <h3 className="mb-4 font-semibold text-foreground">Características</h3>
                <div className="flex flex-wrap gap-2">
                  {animal.characteristics.map((char) => (
                    <Badge key={char} variant="outline" className="px-3 py-1">
                      {char}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Adoption CTA */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="flex-1 gap-2 text-lg">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Quiero Adoptarlo
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="/donar">
                    <Heart className="h-5 w-5" />
                    Apadrinar
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="mt-16">
            <h2 className="mb-6 font-serif text-3xl font-normal text-foreground">
              La historia de {animal.name}
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed">{animal.story}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Generate static paths for all animals
export async function generateStaticParams() {
  return animalsData.map((animal) => ({
    slug: animal.slug,
  }))
}
