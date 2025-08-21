import { Button } from "@/components/ui/button"
import { Star, TrendingUp, CreditCard, Banknote } from "lucide-react"

const heroStats = [
  { icon: Star, value: "4 Tiers", label: "Reward Levels" },
  { icon: TrendingUp, value: "Up to 75%", label: "Trading Discounts" },
  { icon: CreditCard, value: "Unlimited", label: "ATM Fee Rebates" },
  { icon: Banknote, value: "Higher", label: "Interest Rates" },
]

export function PreferredRewardsHero() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Bank of America Preferred Rewards</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Combine your Bank of America and Merrill balances to unlock exclusive benefits, higher rewards, and premium
          services across all your accounts.
        </p>
        <Button size="lg" className="bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white">
          Calculate Your Benefits
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {heroStats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                <IconComponent className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
