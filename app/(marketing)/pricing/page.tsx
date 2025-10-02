import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Démarrage", // Starter
    price: "$0",
    period: "/mois", // /month
    description: "Parfait pour les projets personnels et l'apprentissage", // Perfect for personal projects and learning
    features: [
      "3 projets",
      "100 Go de bande passante", // 100GB bandwidth
      "Support communautaire", // Community support
      "Analytiques de base", // Basic analytics
      "Certificats SSL", // SSL certificates
      "Intégration GitHub", // GitHub integration
    ],
  },
  {
    name: "Pro", // Pro
    price: "$29",
    period: "/mois", // /month
    description: "Idéal pour les entreprises en croissance et les équipes", // Ideal for growing businesses and teams
    features: [
      "Projets illimités", // Unlimited projects
      "1 To de bande passante", // 1TB bandwidth
      "Support prioritaire", // Priority support
      "Analytiques avancées", // Advanced analytics
      "Noms de domaine personnalisés", // Custom domains
      "Collaboration d'équipe", // Team collaboration
      "Variables d'environnement", // Environment variables
      "Hébergement de base de données", // Database hosting
    ],
    popular: true,
  },
  {
    name: "Entreprise", // Enterprise
    price: "Sur mesure", // Custom
    period: "",
    description: "Pour les applications et organisations à grande échelle", // For large-scale applications and organizations
    features: [
      "Tout ce qui est inclus dans Pro", // Everything in Pro
      "Infrastructure dédiée", // Dedicated infrastructure
      "Support téléphonique 24/7", // 24/7 phone support
      "Garanties de niveau de service (SLA)", // SLA guarantees
      "Intégrations personnalisées", // Custom integrations
      "Certifications de conformité", // Compliance certifications
      "Sécurité avancée", // Advanced security
      "Déploiement prioritaire", // Priority deployment
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Une tarification simple et {" "}
            <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
              transparente
            </span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Choisissez le plan qui correspond à vos besoins. Augmentez ou diminuez votre forfait à tout moment, sans frais cachés.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-secondary shadow-xl scale-105" : "border-border"}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-secondary to-tertiary text-primary px-4 py-1 rounded-full text-sm font-medium">
                    Le plus populaire
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-lg">{plan.period}</span>
                </div>
                <CardDescription className="mt-4 text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/dashboard">
                  <Button
                    className={`w-full ${plan.popular ? "bg-gradient-to-r from-secondary to-tertiary hover:from-secondary hover:to-[#1d4ed8]" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.name === "Entreprise" ? "Contacter les ventes" : "Démarrer"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Tous les plans incluent une garantie de niveau de service (SLA) de 99,9 % de temps de disponibilité et une garantie de remboursement de 30 jours
          </p>
          <Link href="/contact" className="text-secondary hover:text-secondary font-medium">
            Besoin d'un plan sur mesure ? Contactez notre équipe commerciale →
          </Link>
        </div>
      </div>
    </div>
  )
}