"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Heart } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/adopciones", label: "Adopciones" },
  { href: "/transito", label: "Tránsito" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 md:h-24 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <Image
            src="/logo.png"
            alt="Logo Patitas Callejeras"
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
          <span className="text-xl md:text-2xl font-bold text-primary">Patitas Callejeras</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button asChild className="gap-2">
            <Link href="/donar">
              <Heart className="h-4 w-4" />
              Donar
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menú">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
            <SheetDescription className="sr-only">
              Enlaces de navegación del sitio web de Patitas
            </SheetDescription>
            <div className="flex flex-col gap-6 pt-8">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <Button asChild className="mt-4 gap-2">
                  <Link href="/donar">
                    <Heart className="h-4 w-4" />
                    Donar
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
