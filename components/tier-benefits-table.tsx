import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

const tierData = [
  {
    tier: "Gold",
    minBalance: "$20,000",
    color: "bg-yellow-500",
    benefits: [
      "ATM fee rebates (non-Bank of America ATMs)",
      "10% relationship bonus on credit card rewards",
      "Interest rate boosts on deposits",
      "Preferred pricing on select services",
    ],
    tradingBenefits: ["Standard online trading rates", "Basic research tools"],
  },
  {
    tier: "Platinum",
    minBalance: "$50,000",
    color: "bg-gray-400",
    benefits: [
      "All Gold benefits",
      "25% relationship bonus on credit card rewards",
      "Higher interest rate boosts",
      "Waived fees on many services",
      "Priority customer service",
    ],
    tradingBenefits: ["Reduced margin rates", "Enhanced research access", "Priority trade execution"],
  },
  {
    tier: "Platinum Honors",
    minBalance: "$100,000",
    color: "bg-gray-600",
    benefits: [
      "All Platinum benefits",
      "50% relationship bonus on credit card rewards",
      "Premium interest rates",
      "Exclusive banking offers",
      "Dedicated relationship manager",
    ],
    tradingBenefits: ["Further reduced margin rates", "Premium research tools", "Advanced trading platforms"],
  },
  {
    tier: "Diamond Honors",
    minBalance: "$1,000,000",
    color: "bg-blue-600",
    popular: true,
    benefits: [
      "All Platinum Honors benefits",
      "75% relationship bonus on credit card rewards",
      "Highest interest rates available",
      "White-glove service",
      "Exclusive investment opportunities",
      "Private banking access",
    ],
    tradingBenefits: [
      "Lowest margin rates",
      "Institutional-grade research",
      "Direct market access",
      "Dedicated trading support",
    ],
  },
]

export function TierBenefitsTable() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">Tier Benefits Breakdown</h2>
        <p className="text-lg text-[var(--muted-gray)]">
          Higher combined balances unlock more valuable benefits and exclusive services
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tierData.map((tier, index) => (
          <Card key={index} className={`relative ${tier.popular ? "border-2 border-[var(--brand-red)]" : ""}`}>
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[var(--brand-red)] text-white">Most Popular</Badge>
              </div>
            )}

            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <div className={`w-4 h-4 rounded-full ${tier.color}`} />
                <CardTitle className="text-xl">{tier.tier}</CardTitle>
              </div>
              <div className="text-2xl font-bold text-[var(--brand-navy)]">{tier.minBalance}</div>
              <div className="text-sm text-[var(--muted-gray)]">Combined balance minimum</div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-[var(--ink)] mb-3 flex items-center">
                  <Star className="h-4 w-4 mr-2 text-[var(--brand-red)]" />
                  Banking Benefits
                </h4>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-2 text-sm">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--muted-gray)]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--ink)] mb-3 flex items-center">
                  <Star className="h-4 w-4 mr-2 text-[var(--brand-red)]" />
                  Trading Benefits
                </h4>
                <ul className="space-y-2">
                  {tier.tradingBenefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-2 text-sm">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--muted-gray)]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
