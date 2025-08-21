import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { InlineFootnote } from "@/components/inline-footnote"

const pricingData = [
  {
    service: "Self-Directed Trading",
    fees: [
      {
        item: (
          <>
            Online stock & ETF trades
            <InlineFootnote number={1} />
          </>
        ),
        price: "$0",
      }, // Added footnote for trading fees
      { item: "Options trades", price: "$0.65 per contract" },
      { item: "Mutual fund trades", price: "$49.95" },
    ],
  },
  {
    service: "Merrill Guided Investing (MGI)", // Updated service name to match exact program name
    fees: [
      {
        item: (
          <>
            Advisory fee
            <InlineFootnote number={3} />
          </>
        ),
        price: "0.45% annually",
      }, // Added footnote for fees
      { item: "Account minimum", price: "$1,000" },
      { item: "Rebalancing", price: "Included" },
    ],
  },
  {
    service: "MGI with an Advisor", // Updated service name per compliance requirements
    fees: [
      {
        item: (
          <>
            Advisory fee
            <InlineFootnote number={3} />
          </>
        ),
        price: "0.85% annually",
      }, // Added footnote for fees
      {
        item: (
          <>
            Account minimum
            <InlineFootnote number={5} />
          </>
        ),
        price: "$20,000",
      }, // Updated minimum and added footnote
      { item: "Financial planning", price: "Included" },
    ],
  },
]

export function PricingSummary() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">Transparent Pricing</h2>
        <p className="text-lg text-[var(--muted-gray)]">No hidden fees. Clear pricing for every investing path.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {pricingData.map((service, index) => (
          <Card key={index} className="border-2">
            <CardHeader>
              <CardTitle className="text-lg text-[var(--brand-navy)]">{service.service}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {service.fees.map((fee, feeIndex) => (
                  <div key={feeIndex} className="flex justify-between items-center">
                    <span className="text-sm text-[var(--muted-gray)]">{fee.item}</span>
                    <span className="font-semibold text-[var(--ink)]">{fee.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-[var(--brand-navy)] text-[var(--brand-navy)] bg-transparent hover:bg-[var(--brand-navy)] hover:text-white"
        >
          <Link href="/pricing">
            See Full Pricing Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
