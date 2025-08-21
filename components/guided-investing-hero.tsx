import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, TrendingUp, Users, BarChart3 } from "lucide-react"

const benefits = [
  { icon: Shield, title: "Professional Management", description: "Expert portfolio oversight" },
  { icon: TrendingUp, title: "Auto Rebalancing", description: "Maintain target allocation" },
  { icon: BarChart3, title: "Tax Optimization", description: "Automatic tax-loss harvesting" },
  { icon: Users, title: "Human Support", description: "Access to investment professionals" },
]

export function GuidedInvestingHero() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="mb-4 bg-[var(--brand-red)] text-white">Recommended for Most Investors</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professionally Managed Portfolios</h1>
          <p className="text-xl text-blue-100 mb-8">
            Let our investment professionals build and manage a diversified portfolio tailored to your goals. Enjoy the
            benefits of professional management with the convenience of automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--brand-navy)] bg-transparent"
            >
              See Sample Portfolio
            </Button>
          </div>
          <div className="text-sm text-blue-100">
            <strong>$1,000 minimum</strong> • <strong>0.45% annual fee</strong> • No trading fees
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <IconComponent className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-blue-100">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
