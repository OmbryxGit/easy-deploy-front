import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Server,
  Code,
  Zap,
  Shield,
  BarChart3,
  Database,
  GitBranch,
  Globe,
  Users,
  Clock,
  Cpu,
  HardDrive,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Code,
    title: "Déploiement Frontend", // Frontend Deployment
    description:
      "Déployez des sites React, Vue, Angular, Svelte et statiques avec des builds automatiques, des optimisations et une distribution CDN mondiale.", // Deploy React, Vue, Angular, Svelte, and static sites with automatic builds, optimizations, and global CDN distribution.
    details: ["Builds automatiques depuis Git", "Détection de framework", "Optimisation des actifs", "CDN mondial"], // Automatic builds from Git, Framework detection, Asset optimization, Global CDN
  },
  {
    icon: Server,
    title: "Services Backend", // Backend Services
    description:
      "Hébergez des applications Node.js, Python, PHP, Go avec auto-mise à l'échelle, équilibrage de charge et déploiements sans interruption.", // Host Node.js, Python, PHP, Go applications with auto-scaling, load balancing, and zero-downtime deployments.
    details: ["Auto-mise à l'échelle", "Équilibrage de charge", "Déploiements sans interruption", "Multiples runtimes"], // Auto-scaling, Load balancing, Zero-downtime deploys, Multiple runtimes
  },
  {
    icon: Database,
    title: "Intégration de Bases de Données", // Database Integration
    description: "Connectez-vous à PostgreSQL, MongoDB, Redis avec des sauvegardes gérées, une surveillance et une mise à l'échelle automatique.", // Connect to PostgreSQL, MongoDB, Redis with managed backups, monitoring, and automatic scaling.
    details: ["Bases de données gérées", "Sauvegardes automatiques", "Surveillance des performances", "Pool de connexions"], // Managed databases, Automatic backups, Performance monitoring, Connection pooling
  },
  {
    icon: Zap,
    title: "Rapidité Éclair", // Lightning Fast
    description: "CDN mondial et edge computing pour des temps de réponse inférieurs à 100 ms dans le monde entier avec mise en cache intelligente.", // Global CDN and edge computing for sub-100ms response times worldwide with intelligent caching.
    details: ["Réseau mondial en périphérie (edge)", "Mise en cache intelligente", "Optimisation d'images", "Compression"], // Global edge network, Intelligent caching, Image optimization, Compression
  },
  {
    icon: Shield,
    title: "Sécurité d'Entreprise", // Enterprise Security
    description:
      "Certificats SSL, protection DDoS, WAF et infrastructure conforme avec certification SOC 2.", // SSL certificates, DDoS protection, WAF, and compliance-ready infrastructure with SOC 2 certification.
    details: ["Certificats SSL", "Protection DDoS", "Pare-feu d'Application Web (WAF)", "Conformité SOC 2"], // SSL certificates, DDoS protection, Web Application Firewall, SOC 2 compliant
  },
  {
    icon: BarChart3,
    title: "Analytiques en Temps Réel", // Real-time Analytics
    description:
      "Surveillez les performances, suivez l'utilisation, analysez les modèles de trafic et optimisez vos applications avec des informations détaillées.", // Monitor performance, track usage, analyze traffic patterns, and optimize your applications with detailed insights.
    details: ["Surveillance des performances", "Analyse du trafic", "Suivi des erreurs", "Tableaux de bord personnalisés"], // Performance monitoring, Traffic analytics, Error tracking, Custom dashboards
  },
  {
    icon: GitBranch,
    title: "Intégration Git", // Git Integration
    description: "Intégration fluide avec GitHub, GitLab et Bitbucket avec des déploiements automatiques à chaque 'push'.", // Seamless integration with GitHub, GitLab, and Bitbucket with automatic deployments on every push.
    details: ["GitHub/GitLab/Bitbucket", "Déploiements automatiques", "Aperçus de branches", "Support de restauration (Rollback)"], // GitHub/GitLab/Bitbucket, Automatic deployments, Branch previews, Rollback support
  },
  {
    icon: Globe,
    title: "Noms de Domaine Personnalisés", // Custom Domains
    description: "Utilisez votre propre domaine avec des certificats SSL automatiques et une gestion DNS pour un branding professionnel.", // Use your own domain with automatic SSL certificates and DNS management for professional branding.
    details: ["Domaines personnalisés", "SSL automatique", "Gestion DNS", "Support de sous-domaine"], // Custom domains, Automatic SSL, DNS management, Subdomain support
  },
  {
    icon: Users,
    title: "Collaboration d'Équipe", // Team Collaboration
    description: "Invitez des membres d'équipe, gérez les permissions et collaborez sur des projets avec un contrôle d'accès basé sur les rôles.", // Invite team members, manage permissions, and collaborate on projects with role-based access control.
    details: ["Gestion d'équipe", "Accès basé sur les rôles", "Journaux d'activité", "Environnements partagés"], // Team management, Role-based access, Activity logs, Shared environments
  },
  {
    icon: Clock,
    title: "Déploiements Planifiés", // Scheduled Deployments
    description: "Planifiez des déploiements à des heures spécifiques, automatisez les fenêtres de maintenance et coordonnez les mises en production.", // Schedule deployments for specific times, automate maintenance windows, and coordinate releases.
    details: ["Déploiements planifiés", "Fenêtres de maintenance", "Coordination des mises en production", "Workflows automatisés"], // Scheduled deployments, Maintenance windows, Release coordination, Automated workflows
  },
  {
    icon: Cpu,
    title: "Auto-mise à l'Échelle", // Auto-scaling
    description:
      "Mettez automatiquement vos applications à l'échelle en fonction du trafic avec une allocation de ressources intelligente et une optimisation des coûts.", // Automatically scale your applications based on traffic with intelligent resource allocation and cost optimization.
    details: ["Mise à l'échelle basée sur le trafic", "Optimisation des ressources", "Gestion des coûts", "Tuning de performance"], // Traffic-based scaling, Resource optimization, Cost management, Performance tuning
  },
  {
    icon: HardDrive,
    title: "Solutions de Stockage", // Storage Solutions
    description:
      "Stockage de fichiers, stockage d'objets et intégration CDN pour tous vos actifs statiques et contenus générés par les utilisateurs.", // File storage, object storage, and CDN integration for all your static assets and user-generated content.
    details: ["Stockage de fichiers", "Stockage d'objets", "Intégration CDN", "Gestion des actifs"], // File storage, Object storage, CDN integration, Asset management
  },
]

export default function FeaturesPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Des{" "}
            <span className="bg-gradient-to-r from-[#9333EA] to-[#2563EB] bg-clip-text text-transparent">
              Fonctionnalités
            </span>{" "}
            Puissantes
          </h1>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Tout ce dont vous avez besoin pour déployer, mettre à l'échelle et gérer vos applications en toute confiance. Des simples sites statiques aux applications full-stack complexes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:border-[#9333EA]/20"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#9333EA] to-[#2563EB] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">{feature.description}</CardDescription>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#9333EA] rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Prêt à découvrir ces fonctionnalités ?</h2>
          <p className="text-muted-foreground mb-6">Commencez à déployer vos applications dès aujourd'hui avec notre niveau gratuit</p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#9333EA] to-[#2563EB] hover:from-[#7c3aed] hover:to-[#1d4ed8]"
            >
              Commencer maintenant <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}