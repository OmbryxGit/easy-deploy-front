import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Server, Code, Zap, Shield, BarChart3, ArrowRight, CheckCircle, Rocket, Database } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Frontend Deployment",
    description: "Deploy React, Vue, Angular, and static sites with automatic builds and CDN distribution.",
  },
  {
    icon: Server,
    title: "Backend Services",
    description: "Host Node.js, Python, PHP applications with auto-scaling and load balancing.",
  },
  {
    icon: Database,
    title: "Database Integration",
    description: "Connect to PostgreSQL, MongoDB, Redis with managed backups and monitoring.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Global CDN and edge computing for sub-100ms response times worldwide.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SSL certificates, DDoS protection, and compliance-ready infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor performance, track usage, and optimize your applications.",
  },
]

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for personal projects and learning",
    features: ["3 projects", "100GB bandwidth", "Community support", "Basic analytics"],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Ideal for growing businesses and teams",
    features: [
      "Unlimited projects",
      "1TB bandwidth",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "Team collaboration",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale applications and organizations",
    features: [
      "Everything in Pro",
      "Dedicated infrastructure",
      "24/7 phone support",
      "SLA guarantees",
      "Custom integrations",
      "Compliance certifications",
    ],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background pt-10">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-[#2563EB]/5 to-accent/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Deploy Your Apps with{" "}
            <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
              Confidence
            </span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            The modern hosting platform that supports both frontend and backend deployments. Scale from prototype to
            production with enterprise-grade infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8 bg-secondary hover:bg-secondary text-white">
                Start Deploying <Rocket className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-secondary text-secondary hover:bg-secondary hover:text-primary bg-background"
              >
                View Documentation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Deploy</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              From simple static sites to complex full-stack applications, EasyDeploy has the tools and infrastructure
              you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-tertiary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Choose the plan that fits your needs. Scale up or down anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-secondary shadow-lg scale-105" : "border-border"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-secondary to-tertiary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-secondary hover:bg-secondary text-white" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Deploy Your Next Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Join thousands of developers who trust EasyDeploy for their hosting needs.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="text-lg px-8 bg-secondary hover:bg-secondary text-white">
              Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
