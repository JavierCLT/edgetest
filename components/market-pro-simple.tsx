import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function MarketProSimple() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">Experience MarketPro</h2>
        <p className="text-lg text-[var(--muted-gray)] max-w-2xl mx-auto">
          Our advanced trading platform with professional-grade tools, real-time data, and comprehensive market
          analysis.
        </p>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          
        </CardContent>
      </Card>
    </div>
  )
}
