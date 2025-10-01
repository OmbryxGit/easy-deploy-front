import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, MessageCircle, Users } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
              Contactez-nous
            </Badge>
            <h1 className="text-5xl font-bold  mb-6 text-balance">
              Une question ?{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Parlons-en
              </span>
            </h1>
            <p className="text-xl text-primary/80 mb-8 text-pretty">
              Notre équipe est là pour vous accompagner. Que ce soit pour une question technique, commerciale ou
              simplement pour échanger, nous sommes à votre écoute.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-1 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold  flex items-center">
                  <MessageCircle className="h-6 w-6 text-purple-600 mr-3" />
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary/90 mb-2">Prénom *</label>
                    <Input placeholder="Votre prénom" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary/90 mb-2">Nom *</label>
                    <Input placeholder="Votre nom" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary/90 mb-2">Email *</label>
                  <Input type="email" placeholder="votre@email.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary/90 mb-2">Entreprise</label>
                  <Input placeholder="Nom de votre entreprise" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary/90 mb-2">Sujet *</label>
                  <Input placeholder="Objet de votre message" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary/90 mb-2">Message *</label>
                  <Textarea placeholder="Décrivez votre demande en détail..." className="min-h-[120px]" />
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Envoyer le message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-1 shadow-lg">
                <CardContent className="">
                  <div className="flex items-center mb-0">
                    <Mail className="h-8 w-8 text-purple-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold ">Email</h3>
                      <p className="text-primary/80">contact@easydeploy.com</p>
                      <p className="text-primary/80">support@easydeploy.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-1 shadow-lg">
                <CardContent className="">
                  <div className="flex items-center">
                    <Phone className="h-8 w-8 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold ">Téléphone</h3>
                      <p className="text-primary/80">(+223) 71 65 25 67</p>
                      <p className="text-sm text-gray-500">Lun-Ven 9h-18h (CET)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-1 shadow-lg">
                <CardContent className="">
                  <div className="flex items-center">
                    <MapPin className="h-8 w-8 text-purple-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold ">Adresse</h3>
                      <p className="text-primary/80">ACI 2000</p>
                      <p className="text-primary/80">Bamako, Mali</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-1 shadow-lg">
                <CardContent className="">
                  <div className="flex items-center">
                    <Clock className="h-8 w-8 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold ">Horaires</h3>
                      <p className="text-primary/80">Lundi - Vendredi: 9h - 18h</p>
                      <p className="text-primary/80">Support 24/7 disponible</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold  mb-4">Questions fréquentes</h2>
            <p className="text-lg text-primary/80">Trouvez rapidement les réponses aux questions les plus courantes.</p>
          </div>

          <div className="space-y-6">
            <Card className="border-1 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold  mb-2">Quel est le délai de réponse moyen ?</h3>
                <p className="text-primary/80">
                  Nous nous engageons à répondre à tous les messages dans les 24h ouvrées. Pour les questions urgentes,
                  notre support prioritaire répond en moins de 2h.
                </p>
              </CardContent>
            </Card>

            <Card className="border-1 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold  mb-2">Proposez-vous un support technique ?</h3>
                <p className="text-primary/80">
                  Oui, notre équipe technique est disponible 24/7 pour vous aider avec vos déploiements et résoudre tout
                  problème technique que vous pourriez rencontrer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-1 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold  mb-2">Comment planifier une démonstration ?</h3>
                <p className="text-primary/80">
                  Contactez-nous via le formulaire ci-dessus en mentionnant "Démonstration" dans le sujet. Nous vous
                  proposerons un créneau dans les 48h.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-white mr-3" />
            <h2 className="text-3xl font-bold text-white">Rejoignez notre communauté</h2>
          </div>
          <p className="text-xl text-purple-100 mb-8">
            Échangez avec d'autres développeurs et restez informé des dernières nouveautés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <a href="https://discord.gg/easydeploy" target="_blank" rel="noopener noreferrer">
                Discord
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <a href="https://twitter.com/easydeploy" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
