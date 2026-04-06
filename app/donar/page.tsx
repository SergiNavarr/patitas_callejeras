"use client"

import { useState } from "react"
import { Heart, Copy, Check, CreditCard, Calendar, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const donationOptions = [
  {
    amount: "$3.000",
    description: "Ayuda a alimentar a un animal por una semana",
    popular: false,
  },
  {
    amount: "$5.000",
    description: "Cubre una vacuna o desparasitación",
    popular: true,
  },
  {
    amount: "$10.000",
    description: "Contribuye a una castración",
    popular: false,
  },
  {
    amount: "$20.000",
    description: "Ayuda a cubrir una cirugía de emergencia",
    popular: false,
  },
]

const subscriptionOptions = [
  {
    amount: "$2.000/mes",
    title: "Amigo Patitas",
    description: "Recibí actualizaciones mensuales de los animales que ayudás",
  },
  {
    amount: "$5.000/mes",
    title: "Padrino",
    description: "Apadriná a un animal específico y seguí su historia",
  },
  {
    amount: "$10.000/mes",
    title: "Protector",
    description: "Tu aporte mensual salva vidas. Sos parte del equipo.",
  },
]

const bankDetails = {
  bank: "Banco Galicia",
  accountHolder: "Asociación Patitas",
  cbu: "0070999030004123456789",
  alias: "PATITAS.AMOR.ANIMAL",
  cuit: "30-12345678-9",
}

export default function DonarPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              <Heart className="mr-1 h-3 w-3 fill-current" />
              Tu ayuda salva vidas
            </Badge>
            <h1 className="mb-6 font-serif text-4xl font-normal text-primary-foreground md:text-5xl text-balance">
              Donar es amar
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/90">
              Cada peso que donás se destina directamente al cuidado de nuestros rescatados: 
              alimento, atención veterinaria, medicamentos y todo lo que necesitan para encontrar 
              su familia para siempre.
            </p>
          </div>
        </div>
      </section>

      {/* One-time Donations Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <CreditCard className="h-6 w-6 text-primary" />
              <h2 className="font-serif text-3xl font-normal text-foreground md:text-4xl">
                Donación Única
              </h2>
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Elegí el monto que quieras donar. Cada aporte suma y hace la diferencia.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {donationOptions.map((option) => (
              <Card
                key={option.amount}
                className={`relative transition-all hover:shadow-lg ${
                  option.popular ? "border-primary ring-1 ring-primary" : ""
                }`}
              >
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Más elegido
                  </Badge>
                )}
                <CardHeader className="pb-2 text-center">
                  <CardTitle className="text-3xl font-bold text-primary">{option.amount}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-6 text-sm text-muted-foreground">{option.description}</p>
                  <Button className="w-full" variant={option.popular ? "default" : "outline"}>
                    Donar {option.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Subscriptions Section */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              <h2 className="font-serif text-3xl font-normal text-foreground md:text-4xl">
                Suscripción Mensual
              </h2>
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Un aporte mensual nos permite planificar mejor y ayudar a más animales.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {subscriptionOptions.map((option, index) => (
              <Card
                key={option.title}
                className={`transition-all hover:shadow-lg ${
                  index === 1 ? "md:-mt-4 md:mb-4 border-primary ring-1 ring-primary" : ""
                }`}
              >
                <CardHeader className="text-center">
                  <Gift className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {option.amount}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-6 text-sm text-muted-foreground">{option.description}</p>
                  <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                    Suscribirme
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Transfer Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-normal text-foreground md:text-4xl text-balance">
                Transferencia Bancaria
              </h2>
              <p className="text-muted-foreground">
                Si preferís hacer una transferencia directa, podés usar estos datos.
              </p>
            </div>
            <Card className="border-0 bg-muted">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Banco</p>
                      <p className="font-medium text-foreground">{bankDetails.bank}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Titular</p>
                      <p className="font-medium text-foreground">{bankDetails.accountHolder}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">CUIT</p>
                      <p className="font-medium text-foreground">{bankDetails.cuit}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(bankDetails.cuit, "cuit")}
                      className="gap-2"
                    >
                      {copiedField === "cuit" ? (
                        <>
                          <Check className="h-4 w-4 text-primary" />
                          Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copiar
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">CBU</p>
                      <p className="font-mono font-medium text-foreground">{bankDetails.cbu}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(bankDetails.cbu, "cbu")}
                      className="gap-2"
                    >
                      {copiedField === "cbu" ? (
                        <>
                          <Check className="h-4 w-4 text-primary" />
                          Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copiar
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Alias</p>
                      <p className="font-mono text-lg font-bold text-primary">{bankDetails.alias}</p>
                    </div>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => copyToClipboard(bankDetails.alias, "alias")}
                      className="gap-2"
                    >
                      {copiedField === "alias" ? (
                        <>
                          <Check className="h-4 w-4" />
                          Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copiar al Portapapeles
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Después de realizar tu transferencia, envianos el comprobante a{" "}
              <a href="mailto:donaciones@patitas.org" className="text-primary hover:underline">
                donaciones@patitas.org
              </a>{" "}
              para que podamos agradecerte y mantenerte informado sobre cómo usamos tu aporte.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-3xl font-normal text-foreground md:text-4xl text-balance">
              Transparencia total
            </h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Publicamos mensualmente un reporte detallado de todos los ingresos y gastos en nuestras 
              redes sociales. Cada peso se destina al bienestar de los animales: alimento de calidad, 
              atención veterinaria, medicamentos y elementos necesarios para su cuidado.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Somos una organización 100% voluntaria. Nadie cobra sueldo. Todo lo que recibimos va 
              directamente a quienes más lo necesitan: nuestros peludos rescatados.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
