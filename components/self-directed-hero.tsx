import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Zap, Shield, BarChart3 } from "lucide-react"

const features = [
  { icon: Zap, title: "$0 Online Trades", description: "Stock and ETF trades" },
  { icon: BarChart3, title: "MarketPro Platform", description: "Professional tools" },
  { icon: TrendingUp, title: "Advanced Analytics", description: "Real-time data" },
  { icon: Shield, title: "SIPC Protected", description: "Up to $500K coverage" },
]

export function SelfDirectedHero() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="mb-4 bg-[var(--brand-red)] text-white">Most Popular for Active Traders</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Take Control of Your Investments</h1>
          <p className="text-xl text-blue-100 mb-8">
            Trade stocks, ETFs, and options with professional-grade tools. Get real-time market data, advanced charting,
            and research from industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white">
              Open Account
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--brand-navy)] bg-transparent"
            >
              Try Demo Platform
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <IconComponent className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-blue-100">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
