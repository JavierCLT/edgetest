import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Users, Shield } from "lucide-react"
import Link from "next/link"

const comparisonData = [
  {
    category: "Overview",
    items: [
      {
        feature: "Best for",
        selfDirected: "Experienced investors who want full control",
        guided: "Busy investors who want professional management",
        advisor: "Investors seeking comprehensive financial planning",
      },
      {
        feature: "Investment approach",
        selfDirected: "You make all investment decisions",
        guided: "Algorithm + human oversight manages your portfolio",
        advisor: "Dedicated advisor creates personalized strategy",
      },
      {
        feature: "Time commitment",
        selfDirected: "Active involvement required",
        guided: "Minimal - set it and forget it",
        advisor: "Regular meetings and check-ins",
      },
    ],
  },
  {
    category: "Costs & Minimums",
    items: [
      {
        feature: "Account minimum",
        selfDirected: "$0",
        guided: "$1,000",
        advisor: "$250,000",
      },
      {
        feature: "Advisory fee",
        selfDirected: "None",
        guided: "0.45% annually",
        advisor: "Varies by advisor (typically 0.85-1.25%)",
      },
      {
        feature: "Trading fees",
        selfDirected: "$0 online stock/ETF trades",
        guided: "Included in advisory fee",
        advisor: "Included in advisory fee",
      },
      {
        feature: "Preferred Rewards discount",
        selfDirected: "Up to 75% off margin rates",
        guided: "Fee reductions based on tier",
        advisor: "Enhanced service levels",
      },
    ],
  },
  {
    category: "Platform & Tools",
    items: [
      {
        feature: "Trading platform",
        selfDirected: "MarketPro + mobile app",
        guided: "Goal-based dashboard",
        advisor: "Advisor portal + client access",
      },
      {
        feature: "Research & analysis",
        selfDirected: "Full access to premium research",
        guided: "Curated insights for your portfolio",
        advisor: "Institutional research + advisor insights",
      },
      {
        feature: "Investment options",
        selfDirected: "Stocks, ETFs, options, bonds, mutual funds",
        guided: "Diversified ETF portfolios",
        advisor: "Full range + alternative investments",
      },
      {
        feature: "Tax optimization",
        selfDirected: "Tax-loss harvesting tools available",
        guided: "Automatic tax-loss harvesting",
        advisor: "Comprehensive tax planning",
      },
    ],
  },
  {
    category: "Support & Guidance",
    items: [
      {
        feature: "Human support",
        selfDirected: "Phone/chat support for platform questions",
        guided: "Access to investment professionals",
        advisor: "Dedicated financial advisor",
      },
      {
        feature: "Financial planning",
        selfDirected: "Self-service planning tools",
        guided: "Goal-based planning included",
        advisor: "Comprehensive financial planning",
      },
      {
        feature: "Portfolio rebalancing",
        selfDirected: "Manual (you decide when)",
        guided: "Automatic based on target allocation",
        advisor: "Strategic rebalancing by advisor",
      },
      {
        feature: "Investment recommendations",
        selfDirected: "Research available, you decide",
        guided: "Algorithm-driven with human oversight",
        advisor: "Personalized recommendations from advisor",
      },
    ],
  },
  {
    category: "Flexibility",
    items: [
      {
        feature: "Switch between services",
        selfDirected: "Yes, anytime",
        guided: "Yes, anytime",
        advisor: "Yes, subject to minimums",
      },
      {
        feature: "Customize investments",
        selfDirected: "Full control over all investments",
        guided: "Limited customization options",
        advisor: "High customization with advisor guidance",
      },
      {
        feature: "Access to funds",
        selfDirected: "Immediate",
        guided: "Standard settlement periods",
        advisor: "Coordinated with advisor",
      },
    ],
  },
]

const products = [
  {
    id: "self-directed",
    name: "Self-Directed Trading",
    icon: TrendingUp,
    popular: false,
    href: "/self-directed",
  },
  {
    id: "guided",
    name: "Merrill Guided Investing",
    icon: Shield,
    popular: true,
    href: "/guided-investing",
  },
  {
    id: "advisor",
    name: "Work with an Advisor",
    icon: Users,
    popular: false,
    href: "/advisor",
  },
]

export function ComparisonTable() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">Side-by-Side Comparison</h2>
        <p className="text-lg text-[var(--muted-gray)]">
          Compare features, costs, and benefits across all three investing options
        </p>
      </div>

      {/* Product Headers */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div></div>
        {products.map((product) => {
          const IconComponent = product.icon
          return (
            <Card
              key={product.id}
              className={`relative ${product.popular ? "border-2 border-[var(--brand-red)]" : ""}`}
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[var(--brand-red)] text-white">Most Popular</Badge>
                </div>
              )}
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brand-red)]/10 mb-4">
                  <IconComponent className="h-6 w-6 text-[var(--brand-red)]" />
                </div>
                <h3 className="font-semibold text-[var(--brand-navy)] mb-2">{product.name}</h3>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Comparison Sections */}
      <div className="space-y-8">
        {comparisonData.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="text-xl font-semibold text-[var(--brand-navy)] mb-4 flex items-center">
              <Star className="h-5 w-5 mr-2 text-[var(--brand-red)]" />
              {section.category}
            </h3>
            <div className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="grid grid-cols-4 gap-4 py-4 border-b border-gray-100 last:border-b-0">
                  <div className="font-medium text-[var(--ink)]">{item.feature}</div>
                  <div className="text-sm text-[var(--muted-gray)]">{item.selfDirected}</div>
                  <div className="text-sm text-[var(--muted-gray)]">{item.guided}</div>
                  <div className="text-sm text-[var(--muted-gray)]">{item.advisor}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-12 pt-8 border-t">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center">
            <h4 className="font-semibold text-[var(--brand-navy)]">Ready to get started?</h4>
          </div>
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <Button
                asChild
                className={`w-full mb-2 ${
                  product.popular
                    ? "bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white"
                    : "bg-[var(--brand-navy)] hover:bg-[var(--brand-navy)]/90 text-white"
                }`}
              >
                <Link href={product.href}>Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                <Link href={product.href}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
