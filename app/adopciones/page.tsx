"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { animalsData, filterAnimals } from "@/lib/animals-data"

const speciesOptions = [
  { value: "todos", label: "Todas las especies" },
  { value: "perro", label: "Perros" },
  { value: "gato", label: "Gatos" },
]

const sizeOptions = [
  { value: "todos", label: "Todos los tamaños" },
  { value: "pequeno", label: "Pequeño" },
  { value: "mediano", label: "Mediano" },
  { value: "grande", label: "Grande" },
]

const ageOptions = [
  { value: "todos", label: "Todas las edades" },
  { value: "cachorro", label: "Cachorro" },
  { value: "adulto", label: "Adulto" },
]

const sizeLabels: Record<string, string> = {
  pequeno: "Pequeño",
  mediano: "Mediano",
  grande: "Grande",
}

const ageLabels: Record<string, string> = {
  cachorro: "Cachorro",
  adulto: "Adulto",
}

export default function AdopcionesPage() {
  const [search, setSearch] = useState("")
  const [species, setSpecies] = useState("todos")
  const [size, setSize] = useState("todos")
  const [age, setAge] = useState("todos")

  const filteredAnimals = useMemo(() => {
    return filterAnimals(animalsData, { search, species, size, age })
  }, [search, species, size, age])

  const clearFilters = () => {
    setSearch("")
    setSpecies("todos")
    setSize("todos")
    setAge("todos")
  }

  const hasActiveFilters = search || species !== "todos" || size !== "todos" || age !== "todos"

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-normal text-foreground md:text-5xl text-balance">
              Animales en Adopción
            </h1>
            <p className="text-lg text-muted-foreground">
              Conocé a nuestros rescatados que buscan una familia para siempre. 
              Todos están vacunados, desparasitados y listos para llenar tu hogar de amor.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="border-b border-border bg-card py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 flex-col gap-4 sm:flex-row">
              {/* Search */}
              <div className="relative flex-1 sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar por nombre..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                  aria-label="Buscar animales por nombre"
                />
              </div>

              {/* Species Filter */}
              <Select value={species} onValueChange={setSpecies}>
                <SelectTrigger className="w-full sm:w-[180px]" aria-label="Filtrar por especie">
                  <SelectValue placeholder="Especie" />
                </SelectTrigger>
                <SelectContent>
                  {speciesOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Size Filter */}
              <Select value={size} onValueChange={setSize}>
                <SelectTrigger className="w-full sm:w-[180px]" aria-label="Filtrar por tamaño">
                  <SelectValue placeholder="Tamaño" />
                </SelectTrigger>
                <SelectContent>
                  {sizeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Age Filter */}
              <Select value={age} onValueChange={setAge}>
                <SelectTrigger className="w-full sm:w-[180px]" aria-label="Filtrar por edad">
                  <SelectValue placeholder="Edad" />
                </SelectTrigger>
                <SelectContent>
                  {ageOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {hasActiveFilters && (
              <Button variant="ghost" onClick={clearFilters} className="gap-2">
                <Filter className="h-4 w-4" />
                Limpiar filtros
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              {filteredAnimals.length === 0
                ? "No se encontraron animales con esos filtros"
                : `Mostrando ${filteredAnimals.length} ${filteredAnimals.length === 1 ? "animal" : "animales"}`}
            </p>
          </div>

          {/* Animals Grid */}
          {filteredAnimals.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredAnimals.map((animal) => (
                <Link key={animal.id} href={`/adopciones/${animal.slug}`}>
                  <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                    <CardHeader className="p-0">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={animal.image}
                          alt={`Foto de ${animal.name}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <Badge
                          variant={animal.species === "perro" ? "default" : "secondary"}
                          className="absolute left-3 top-3"
                        >
                          {animal.species === "perro" ? "Perro" : "Gato"}
                        </Badge>
                        {animal.status === "disponible" && (
                          <Badge variant="outline" className="absolute right-3 top-3 bg-card/80">
                            Disponible
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {animal.name}
                      </h3>
                      <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                        {animal.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">
                          {sizeLabels[animal.size]}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {ageLabels[animal.age]}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {animal.sex === "macho" ? "Macho" : "Hembra"}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 rounded-full bg-muted p-6">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                No encontramos animales
              </h3>
              <p className="mb-6 text-muted-foreground">
                Intentá modificar los filtros o realizar una nueva búsqueda.
              </p>
              <Button onClick={clearFilters}>Ver todos los animales</Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
