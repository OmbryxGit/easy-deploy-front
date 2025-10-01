import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for personal projects and learning",
    features: [
      "3 projects",
      "100GB bandwidth",
      "Community support",
      "Basic analytics",
      "SSL certificates",
      "GitHub integration",
    ],
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
      "Environment variables",
      "Database hosting",
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
      "Advanced security",
      "Priority deployment",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Choose the plan that fits your needs. Scale up or down anytime with no hidden fees.
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
                    Most Popular
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
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include 99.9% uptime SLA and 30-day money-back guarantee
          </p>
          <Link href="/contact" className="text-secondary hover:text-secondary font-medium">
            Need a custom plan? Contact our sales team →
          </Link>
        </div>
      </div>
    </div>
  )
}
