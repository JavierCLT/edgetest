"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star, CreditCard, Banknote, Globe, Shield, ArrowRight } from "lucide-react"

const tiers = [
  {
    tier: "Gold",
    minCombinedBalance: 20000,
    topBenefits: [
      "25% credit card rewards bonus",
      "Monthly maintenance fee waivers (up to 4 accounts)",
      "ATM/debit card rush delivery fee waived",
      "Stop payment fee waived",
    ],
    color: "bg-yellow-500",
  },
  {
    tier: "Platinum",
    minCombinedBalance: 50000,
    topBenefits: [
      "50% credit card rewards bonus",
      "1 non-BofA ATM fee waived per cycle",
      "Small safe deposit box available",
      "Merrill Guided Investing discounts",
    ],
    color: "bg-gray-400",
  },
  {
    tier: "Platinum Honors",
    minCombinedBalance: 100000,
    topBenefits: [
      "75% credit card rewards bonus",
      "Unlimited non-BofA ATM fee waivers",
      "Higher mobile check deposit limits",
      "Premium investment discounts",
    ],
    color: "bg-gray-600",
  },
  {
    tier: "Diamond Honors",
    minCombinedBalance: 1000000,
    topBenefits: [
      "75% credit card rewards bonus",
      "International ATM transaction fees waived",
      "Outgoing wire transfer fees waived",
      "Curated luxury experiences and concierge",
    ],
    color: "bg-indigo-600",
  },
]

export function PreferredRewardsWidget() {
  const [balance, setBalance] = useState("")
  const balanceNum = Number.parseFloat(balance.replace(/,/g, "")) || 0

  const currentTier = tiers.findLast((tier) => balanceNum >= tier.minCombinedBalance) || null
  const nextTier = tiers.find((tier) => balanceNum < tier.minCombinedBalance)

  const progressPercentage = nextTier ? Math.min((balanceNum / nextTier.minCombinedBalance) * 100, 100) : 100

  const amountToNext = nextTier ? nextTier.minCombinedBalance - balanceNum : 0

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">Preferred Rewards Benefits</h2>
        <p className="text-lg text-[var(--muted-gray)]">
          Combine your Bank of America and Merrill balances to unlock exclusive benefits and discounts
        </p>
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-[var(--brand-red)]" />
            <span>Benefits Estimator</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="balance" className="text-sm font-medium">
                Combined Balances (Bank + Investment)
              </Label>
              <Input
                id="balance"
                type="text"
                placeholder="$50,000"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                className="mt-1"
              />
            </div>

            <div className="space-y-4">
              {currentTier && (
                <div className={`p-4 rounded-lg border-2 ${currentTier.color}/20 border-current`}>
                  <h4 className="font-semibold text-[var(--brand-navy)] mb-3 flex items-center">
                    <div className={`w-4 h-4 rounded-full mr-2 ${currentTier.color}`} />
                    Current Tier: {currentTier.tier}
                  </h4>
                  <ul className="text-sm text-[var(--muted-gray)] space-y-2">
                    {currentTier.topBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-red)] mt-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {nextTier && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Progress to {nextTier.tier}</span>
                    <span className="text-sm text-[var(--muted-gray)]">${amountToNext.toLocaleString()} to go</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
            <div className="text-center">
              <CreditCard className="h-6 w-6 mx-auto mb-2 text-[var(--brand-red)]" />
              <p className="text-xs font-medium text-[var(--brand-navy)]">Credit Card Bonuses</p>
              <p className="text-xs text-[var(--muted-gray)]">25% - 75% more rewards</p>
            </div>
            <div className="text-center">
              <Banknote className="h-6 w-6 mx-auto mb-2 text-[var(--brand-red)]" />
              <p className="text-xs font-medium text-[var(--brand-navy)]">Fee Waivers</p>
              <p className="text-xs text-[var(--muted-gray)]">ATM & maintenance fees</p>
            </div>
            <div className="text-center">
              <Globe className="h-6 w-6 mx-auto mb-2 text-[var(--brand-red)]" />
              <p className="text-xs font-medium text-[var(--brand-navy)]">Investment Discounts</p>
              <p className="text-xs text-[var(--muted-gray)]">Merrill advisory fees</p>
            </div>
            <div className="text-center">
              <Shield className="h-6 w-6 mx-auto mb-2 text-[var(--brand-red)]" />
              <p className="text-xs font-medium text-[var(--brand-navy)]">Premium Services</p>
              <p className="text-xs text-[var(--muted-gray)]">Priority support & more</p>
            </div>
          </div>

          <div className="flex justify-center">
            <Button asChild className="bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white">
              <Link href="/preferred-rewards">
                Learn More About Benefits
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
