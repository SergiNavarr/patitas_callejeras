export interface Animal {
  id: string
  slug: string
  name: string
  species: "perro" | "gato"
  size: "pequeno" | "mediano" | "grande"
  age: "cachorro" | "adulto"
  sex: "macho" | "hembra"
  image: string
  images: string[]
  description: string
  story: string
  characteristics: string[]
  vaccinated: boolean
  neutered: boolean
  dewormed: boolean
  status: "disponible" | "en_proceso" | "adoptado"
}

export const animalsData: Animal[] = [
  {
    id: "1",
    slug: "max",
    name: "Max",
    species: "perro",
    size: "grande",
    age: "adulto",
    sex: "macho",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop",
    ],
    description: "Max es un Golden Retriever de 3 años, cariñoso y juguetón. Ideal para familias con niños.",
    story: "Max fue rescatado de las calles del barrio de Palermo. Lo encontramos desnutrido y asustado, pero con mucho amor y paciencia, se convirtió en el perro más dulce del mundo. Ama jugar a la pelota y es increíblemente gentil con los niños. Su familia temporal dice que es el compañero perfecto para paseos largos y tardes de mimos en el sofá.",
    characteristics: ["Sociable", "Juguetón", "Bueno con niños", "Entrenado"],
    vaccinated: true,
    neutered: true,
    dewormed: true,
    status: "disponible",
  },
  {
    id: "2",
    slug: "luna",
    name: "Luna",
    species: "gato",
    size: "pequeno",
    age: "cachorro",
    sex: "hembra",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&h=600&fit=crop",
    ],
    description: "Luna es una gatita de 6 meses, muy curiosa y cariñosa. Le encanta explorar y jugar.",
    story: "Luna fue encontrada junto a sus hermanos en una caja abandonada. Era la más pequeña y tímida de la camada, pero con el tiempo floreció en una gatita llena de vida. Le encanta perseguir pelotas de papel y dormir acurrucada en el regazo de su familia temporal.",
    characteristics: ["Curiosa", "Cariñosa", "Activa", "Buena con otros gatos"],
    vaccinated: true,
    neutered: false,
    dewormed: true,
    status: "disponible",
  },
  {
    id: "3",
    slug: "rocky",
    name: "Rocky",
    species: "perro",
    size: "mediano",
    age: "adulto",
    sex: "macho",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop",
    ],
    description: "Rocky es un mestizo de 4 años, muy leal y protector. Perfecto como compañero único.",
    story: "Rocky vivió sus primeros años en la calle, lo que lo hizo un poco desconfiado al principio. Sin embargo, una vez que te ganas su confianza, es el perro más leal que existe. Le encanta estar cerca de su persona favorita y es excelente guardián.",
    characteristics: ["Leal", "Protector", "Tranquilo", "Prefiere ser único"],
    vaccinated: true,
    neutered: true,
    dewormed: true,
    status: "disponible",
  },
  {
    id: "4",
    slug: "mia",
    name: "Mía",
    species: "gato",
    size: "pequeno",
    age: "adulto",
    sex: "hembra",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=800&h=600&fit=crop",
    ],
    description: "Mía es una gata de 2 años, independiente pero muy dulce cuando quiere mimos.",
    story: "Mía fue entregada por su familia anterior que ya no podía cuidarla. Al principio estaba triste, pero ahora está lista para encontrar un nuevo hogar donde pueda recibir todo el amor que merece. Es muy educada y le gusta observar el mundo desde la ventana.",
    characteristics: ["Independiente", "Tranquila", "Limpia", "Buena en departamentos"],
    vaccinated: true,
    neutered: true,
    dewormed: true,
    status: "disponible",
  },
  {
    id: "5",
    slug: "coco",
    name: "Coco",
    species: "perro",
    size: "pequeno",
    age: "cachorro",
    sex: "macho",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop",
    ],
    description: "Coco es un cachorrito de 4 meses, lleno de energía y amor. Ideal para familia activa.",
    story: "Coco nació en un hogar de tránsito después de que rescatamos a su mamá embarazada. Creció rodeado de amor y está listo para encontrar su familia para siempre. Es muy sociable con otros perros y le encanta jugar sin parar.",
    characteristics: ["Energético", "Sociable", "Aprende rápido", "Bueno con otros perros"],
    vaccinated: true,
    neutered: false,
    dewormed: true,
    status: "disponible",
  },
]

export function getAnimalBySlug(slug: string): Animal | undefined {
  return animalsData.find((animal) => animal.slug === slug)
}

export function filterAnimals(
  animals: Animal[],
  filters: {
    search?: string
    species?: string
    size?: string
    age?: string
  }
): Animal[] {
  return animals.filter((animal) => {
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      if (
        !animal.name.toLowerCase().includes(searchLower) &&
        !animal.description.toLowerCase().includes(searchLower)
      ) {
        return false
      }
    }
    if (filters.species && filters.species !== "todos" && animal.species !== filters.species) {
      return false
    }
    if (filters.size && filters.size !== "todos" && animal.size !== filters.size) {
      return false
    }
    if (filters.age && filters.age !== "todos" && animal.age !== filters.age) {
      return false
    }
    return true
  })
}
