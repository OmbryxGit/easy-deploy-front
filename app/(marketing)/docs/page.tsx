import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Book, Search, Rocket, Code, Database, Settings, Zap, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
              Documentation
            </Badge>
            <h1 className="text-5xl font-bold text-primary mb-6 text-balance">
              Tout ce que vous devez{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">savoir</span>
            </h1>
            <p className="text-xl text-primary/70 mb-8 text-pretty">
              Guides complets, tutoriels et références API pour maîtriser EasyDeploy et déployer vos applications comme
              un pro.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Rechercher dans la documentation..."
                className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-purple-500 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Rocket className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-primary">Démarrage rapide</h2>
            </div>
            <p className="text-lg text-primary/70">Déployez votre première application en moins de 5 minutes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <CardTitle className="text-xl">Créez votre compte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary/70 mb-4">
                  Inscrivez-vous gratuitement et accédez immédiatement à votre dashboard.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white bg-transparent"
                >
                  <Link href="/dashboard">
                    Commencer <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <CardTitle className="text-xl">Connectez votre repo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary/70 mb-4">Liez votre repository GitHub, GitLab ou Bitbucket en un clic.</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white bg-transparent"
                >
                  <Link href="#git-integration">
                    Voir le guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <CardTitle className="text-xl">Déployez !</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary/70 mb-4">
                  Votre application est automatiquement déployée et accessible en ligne.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white bg-transparent"
                >
                  <Link href="#deployment">
                    Guide déploiement <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Book className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-primary">Guides & Références</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Deployment */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                  Déploiement Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary/70 mb-4">
                  React, Vue, Angular, Next.js... Déployez tous vos projets frontend.
                </p>
                <ul className="space-y-2 text-sm text-primary/70 mb-6">
                  <li>• Configuration automatique</li>
                  <li>• Build optimisé</li>
                  <li>• CDN global</li>
                  <li>• Domaines personnalisés</li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white bg-transparent"
                >
                  <Link href="#frontend">
                    Lire le guide <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Backend Deployment */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  Déploiement Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary/70 mb-4">Node.js, Python, PHP... Hébergez vos APIs et services backend.</p>
                <ul className="space-y-2 text-sm text-primary/70 mb-6">
                  <li>• Auto-scaling</li>
                  <li>• Base de données intégrée</li>
                  <li>• Variables d&apos;environnement</li>
                  <li>• Monitoring avancé</li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white bg-transparent"
                >
                  <Link href="#backend">
                    Lire le guide <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Configuration */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary/70 mb-4">Personnalisez vos déploiements avec nos options avancées.</p>
                <ul className="space-y-2 text-sm text-primary/70 mb-6">
                  <li>• Fichiers de config</li>
                  <li>• Scripts de build</li>
                  <li>• Redirections</li>
                  <li>• Headers personnalisés</li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white bg-transparent"
                >
                  <Link href="#config">
                    Lire le guide <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* API Reference */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">API Reference</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary/70 mb-4">Intégrez EasyDeploy dans vos workflows avec notre API REST.</p>
                <ul className="space-y-2 text-sm text-primary/70 mb-6">
                  <li>• Authentification</li>
                  <li>• Endpoints complets</li>
                  <li>• Exemples de code</li>
                  <li>• SDKs officiels</li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white bg-transparent"
                >
                  <Link href="#api">
                    Voir l&apos;API <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* CLI Tools */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">CLI & Outils</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary/70 mb-4">Déployez depuis votre terminal avec notre CLI puissant.</p>
                <ul className="space-y-2 text-sm text-primary/70 mb-6">
                  <li>• Installation simple</li>
                  <li>• Commandes intuitives</li>
                  <li>• Intégration CI/CD</li>
                  <li>• Logs en temps réel</li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white bg-transparent"
                >
                  <Link href="#cli">
                    Guide CLI <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Troubleshooting */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">Dépannage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary/70 mb-4">Solutions aux problèmes les plus courants et FAQ détaillée.</p>
                <ul className="space-y-2 text-sm text-primary/70 mb-6">
                  <li>• Erreurs de build</li>
                  <li>• Problèmes de domaine</li>
                  <li>• Performance</li>
                  <li>• Support technique</li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white bg-transparent"
                >
                  <Link href="#troubleshooting">
                    Aide & FAQ <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary/50 to-tertiary/50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à déployer ?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Mettez en pratique ce que vous avez appris et déployez votre première application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/dashboard">Commencer maintenant</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <Link href="/contact">Besoin d&apos;aide ?</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
