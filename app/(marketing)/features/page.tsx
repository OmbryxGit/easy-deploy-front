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
    title: "Frontend Deployment",
    description:
      "Deploy React, Vue, Angular, Svelte, and static sites with automatic builds, optimizations, and global CDN distribution.",
    details: ["Automatic builds from Git", "Framework detection", "Asset optimization", "Global CDN"],
  },
  {
    icon: Server,
    title: "Backend Services",
    description:
      "Host Node.js, Python, PHP, Go applications with auto-scaling, load balancing, and zero-downtime deployments.",
    details: ["Auto-scaling", "Load balancing", "Zero-downtime deploys", "Multiple runtimes"],
  },
  {
    icon: Database,
    title: "Database Integration",
    description: "Connect to PostgreSQL, MongoDB, Redis with managed backups, monitoring, and automatic scaling.",
    details: ["Managed databases", "Automatic backups", "Performance monitoring", "Connection pooling"],
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Global CDN and edge computing for sub-100ms response times worldwide with intelligent caching.",
    details: ["Global edge network", "Intelligent caching", "Image optimization", "Compression"],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SSL certificates, DDoS protection, WAF, and compliance-ready infrastructure with SOC 2 certification.",
    details: ["SSL certificates", "DDoS protection", "Web Application Firewall", "SOC 2 compliant"],
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Monitor performance, track usage, analyze traffic patterns, and optimize your applications with detailed insights.",
    details: ["Performance monitoring", "Traffic analytics", "Error tracking", "Custom dashboards"],
  },
  {
    icon: GitBranch,
    title: "Git Integration",
    description: "Seamless integration with GitHub, GitLab, and Bitbucket with automatic deployments on every push.",
    details: ["GitHub/GitLab/Bitbucket", "Automatic deployments", "Branch previews", "Rollback support"],
  },
  {
    icon: Globe,
    title: "Custom Domains",
    description: "Use your own domain with automatic SSL certificates and DNS management for professional branding.",
    details: ["Custom domains", "Automatic SSL", "DNS management", "Subdomain support"],
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Invite team members, manage permissions, and collaborate on projects with role-based access control.",
    details: ["Team management", "Role-based access", "Activity logs", "Shared environments"],
  },
  {
    icon: Clock,
    title: "Scheduled Deployments",
    description: "Schedule deployments for specific times, automate maintenance windows, and coordinate releases.",
    details: ["Scheduled deployments", "Maintenance windows", "Release coordination", "Automated workflows"],
  },
  {
    icon: Cpu,
    title: "Auto-scaling",
    description:
      "Automatically scale your applications based on traffic with intelligent resource allocation and cost optimization.",
    details: ["Traffic-based scaling", "Resource optimization", "Cost management", "Performance tuning"],
  },
  {
    icon: HardDrive,
    title: "Storage Solutions",
    description:
      "File storage, object storage, and CDN integration for all your static assets and user-generated content.",
    details: ["File storage", "Object storage", "CDN integration", "Asset management"],
  },
]

export default function FeaturesPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful{" "}
            <span className="bg-gradient-to-r from-[#9333EA] to-[#2563EB] bg-clip-text text-transparent">Features</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Everything you need to deploy, scale, and manage your applications with confidence. From simple static sites
            to complex full-stack applications.
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
          <h2 className="text-2xl font-bold mb-4">Ready to experience these features?</h2>
          <p className="text-muted-foreground mb-6">Start deploying your applications today with our free tier</p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#9333EA] to-[#2563EB] hover:from-[#7c3aed] hover:to-[#1d4ed8]"
            >
              Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
