import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Zap, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
              À propos d&apos;EasyDeploy
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 text-balance">
              Nous simplifions le{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                déploiement
              </span>{" "}
              pour tous
            </h1>
            <p className="text-xl text-gray-600 mb-8 text-pretty">
              EasyDeploy est né de la frustration des développeurs face à la complexité des plateformes d&apos;hébergement.
              Notre mission est de rendre le déploiement accessible à tous, des débutants aux experts.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Notre Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Démocratiser l&apos;hébergement web en offrant une plateforme intuitive qui permet à chacun de déployer ses
                applications frontend et backend en quelques clics, sans compromis sur la performance.
              </p>
              <div className="flex items-center mb-6">
                <Zap className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Notre Vision</h2>
              </div>
              <p className="text-lg text-gray-600">
                Devenir la référence mondiale pour le déploiement d&apos;applications, en combinant simplicité, performance
                et innovation pour accompagner la croissance de millions de projets.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">Notre Équipe</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe passionnée de développeurs et d&apos;experts en infrastructure, unis par la volonté de simplifier le
              déploiement d&apos;applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <img
                  src="/diverse-woman-portrait.png"
                  alt="Sarah Chen"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Chen</h3>
                <p className="text-purple-600 font-medium mb-3">CEO & Co-fondatrice</p>
                <p className="text-gray-600">
                  Ex-ingénieure chez Google, passionnée par l&apos;expérience développeur et l&apos;innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <img
                  src="/thoughtful-man.png"
                  alt="Marc Dubois"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Marc Dubois</h3>
                <p className="text-blue-600 font-medium mb-3">CTO & Co-fondateur</p>
                <p className="text-gray-600">
                  Expert en infrastructure cloud et architectures distribuées, ancien de Microsoft.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <img
                  src="/woman-developer.png"
                  alt="Lisa Rodriguez"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lisa Rodriguez</h3>
                <p className="text-purple-600 font-medium mb-3">Head of Product</p>
                <p className="text-gray-600">Designer UX/UI avec 8 ans d&apos;expérience dans les outils développeur.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">Nos Valeurs</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Simplicité</h3>
              <p className="text-gray-600">Rendre complexe simple, accessible à tous les niveaux d&apos;expertise.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance</h3>
              <p className="text-gray-600">Infrastructure optimisée pour des déploiements ultra-rapides.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Communauté</h3>
              <p className="text-gray-600">Construire ensemble l&apos;avenir du déploiement d&apos;applications.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">Toujours à la pointe des technologies pour vous offrir le meilleur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">Rejoignez l&apos;aventure EasyDeploy</h2>
          <p className="text-xl text-purple-100 mb-8">
            Découvrez pourquoi des milliers de développeurs nous font confiance pour leurs déploiements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/dashboard">Commencer gratuitement</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
