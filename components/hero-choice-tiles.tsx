import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Shield, Users, CreditCard } from "lucide-react"
import Link from "next/link"
import { InlineFootnote } from "@/components/inline-footnote"
import { Fragment } from "react"

const investingPaths = [
  {
    id: "self-directed",
    title: "Merrill Edge® Self-Directed", // Added registered trademark on first mention
    subtitle: "Take control of your investments",
    icon: TrendingUp,
    videoPlaceholder: "/trading-platform-interface.png",
    valueProps: [
      <Fragment key="footnote1">
        $0 online stock & ETF trades
        <InlineFootnote number={1} />
      </Fragment>, // Added footnote for trading fees
      "Advanced trading tools",
      "Real-time market data",
      "Merrill Edge MarketPro® platform access", // Added registered trademark
    ],
    howItWorks: [
      "Open your account in minutes",
      "Fund and start trading immediately",
      "Access professional-grade tools",
    ],
    primaryCTA: "Start Trading",
    href: "/self-directed",
    pricing: "No advisory fees",
  },
  {
    id: "guided-investing",
    title: "Merrill Guided Investing (MGI)", // Updated to match exact program name
    subtitle: "Automated portfolios",
    icon: Shield,
    videoPlaceholder: "/automated-portfolio-dashboard.png",
    valueProps: [
      "Professionally managed by Merrill CIO team",
      "Goal setting and tracking online",
      <Fragment key="footnote4">
        Optional Tax Efficient Management Overlay (TEM)
        <InlineFootnote number={4} />
      </Fragment>, // Updated tax language per compliance
      "Strategies that evolve with your needs",
    ],
    howItWorks: [
      "Tell us your goals and timeline",
      "We build your personalized portfolio",
      "We manage and optimize over time",
    ],
    primaryCTA: "Get Started",
    href: "/guided-investing",
    pricing: (
      <Fragment key="footnote3">
        0.45% annual advisory fee
        <InlineFootnote number={3} />
      </Fragment>
    ), // Added footnote for fees
  },
  {
    id: "advisor",
    title: "MGI with Advisor", // Updated to exact program name
    subtitle: "Automated portfolios with human oversight",
    icon: Users,
    videoPlaceholder: "/placeholder-y9633.png",
    valueProps: [
      "One-on-one guidance with dedicated advisor",
      "Professionally managed MGI portfolios",
      "Comprehensive financial planning",
      "24/7 phone and chat support",
    ],
    howItWorks: ["Schedule a consultation", "Develop your financial plan", "Implement and monitor progress"],
    primaryCTA: "Find an Advisor",
    href: "/advisor",
    pricing: (
      <Fragment key="footnote3-advisor">
        0.85% annual advisory fee
        <InlineFootnote number={3} />
      </Fragment>
    ), // Added footnote for fees
  },
]

export function HeroChoiceTiles() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {investingPaths.map((path) => {
        const IconComponent = path.icon
        return (
          <Card
            key={path.id}
            className="relative overflow-hidden border-2 hover:border-[var(--brand-red)] transition-all duration-300 hover:shadow-lg"
          >
            <CardHeader className="pb-0">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-[var(--brand-red)]/10">
                  <IconComponent className="h-6 w-6 text-[var(--brand-red)]" />
                </div>
                <div>
                  <CardTitle className="text-xl text-[var(--brand-navy)]">{path.title}</CardTitle>
                  <p className="text-sm text-[var(--muted-gray)]">{path.subtitle}</p>
                  <p className="text-xs font-medium text-[var(--brand-red)] mt-1">{path.pricing}</p>
                </div>
              </div>

              {/* Video/Animation Placeholder */}
              
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Value Props */}
              <div>
                <h4 className="font-semibold text-[var(--ink)] mb-3">Key Benefits</h4>
                <ul className="space-y-2">
                  {path.valueProps.map((prop, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-red)] mt-2 flex-shrink-0" />
                      <span className="text-[var(--muted-gray)]">{prop}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <CreditCard className="h-4 w-4 text-[var(--brand-navy)]" />
                  <h4 className="font-semibold text-[var(--brand-navy)] text-sm">Available Account Types</h4>
                </div>
                <p className="text-xs text-[var(--muted-gray)]">Brokerage Accounts, Traditional IRA, Roth IRA & more</p>
              </div>

              {/* How It Works */}
              <div>
                <h4 className="font-semibold text-[var(--ink)] mb-3">How It Works</h4>
                <ol className="space-y-2">
                  {path.howItWorks.map((step, index) => (
                    <li key={index} className="flex items-start space-x-3 text-sm">
                      <div className="w-6 h-6 rounded-full bg-[var(--brand-navy)] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-[var(--muted-gray)]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-4">
                <Button asChild className="w-full bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white">
                  <Link href={path.href}>
                    {path.primaryCTA}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[var(--brand-navy)] text-[var(--brand-navy)] bg-transparent hover:bg-[var(--brand-navy)] hover:text-white"
                >
                  <Link href="/compare">Compare Options</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
