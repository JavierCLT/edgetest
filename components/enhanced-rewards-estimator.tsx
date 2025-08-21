"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, TrendingUp, CreditCard, Banknote } from "lucide-react"

const tiers = [
  { tier: "Gold", minCombinedBalance: 20000, topBenefits: ["ATM fee rebates", "10% credit card bonus"] },
  { tier: "Platinum", minCombinedBalance: 50000, topBenefits: ["25% credit card bonus", "Priority service"] },
  { tier: "Platinum Honors", minCombinedBalance: 100000, topBenefits: ["50% credit card bonus", "Dedicated manager"] },
  { tier: "Diamond Honors", minCombinedBalance: 1000000, topBenefits: ["75% credit card bonus", "Private banking"] },
]

export function EnhancedRewardsEstimator() {
  const [bankBalance, setBankBalance] = useState("")
  const [investmentBalance, setInvestmentBalance] = useState("")
  const [creditCardSpend, setCreditCardSpend] = useState("")

  const bankBalanceNum = Number.parseFloat(bankBalance.replace(/,/g, "")) || 0
  const investmentBalanceNum = Number.parseFloat(investmentBalance.replace(/,/g, "")) || 0
  const totalBalance = bankBalanceNum + investmentBalanceNum
  const monthlySpend = Number.parseFloat(creditCardSpend.replace(/,/g, "")) || 0

  const currentTier = tiers.findLast((tier) => totalBalance >= tier.minCombinedBalance) || null
  const nextTier = tiers.find((tier) => totalBalance < tier.minCombinedBalance)

  const progressPercentage = nextTier ? Math.min((totalBalance / nextTier.minCombinedBalance) * 100, 100) : 100
  const amountToNext = nextTier ? nextTier.minCombinedBalance - totalBalance : 0

  // Calculate estimated rewards
  const baseRewardRate = 0.015 // 1.5% base rate
  const bonusMultiplier = currentTier
    ? currentTier.tier === "Gold"
      ? 1.1
      : currentTier.tier === "Platinum"
        ? 1.25
        : currentTier.tier === "Platinum Honors"
          ? 1.5
          : 1.75
    : 1

  const monthlyRewards = monthlySpend * baseRewardRate * bonusMultiplier
  const annualRewards = monthlyRewards * 12

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">Benefits Calculator</h2>
        <p className="text-lg text-[var(--muted-gray)]">
          See exactly how much you could earn and save with Preferred Rewards
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calculator className="h-5 w-5 text-[var(--brand-red)]" />
              <span>Your Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4">
              <div>
                <Label htmlFor="bank-balance" className="text-sm font-medium">
                  Bank of America Deposit Balances
                </Label>
                <Input
                  id="bank-balance"
                  type="text"
                  placeholder="$25,000"
                  value={bankBalance}
                  onChange={(e) => setBankBalance(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="investment-balance" className="text-sm font-medium">
                  Merrill Investment Balances
                </Label>
                <Input
                  id="investment-balance"
                  type="text"
                  placeholder="$75,000"
                  value={investmentBalance}
                  onChange={(e) => setInvestmentBalance(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="credit-spend" className="text-sm font-medium">
                  Monthly Credit Card Spending
                </Label>
                <Input
                  id="credit-spend"
                  type="text"
                  placeholder="$2,000"
                  value={creditCardSpend}
                  onChange={(e) => setCreditCardSpend(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[var(--surface)] border">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Combined Balance</span>
                <span className="text-xl font-bold text-[var(--brand-navy)]">${totalBalance.toLocaleString()}</span>
              </div>

              {nextTier && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Progress to {nextTier.tier}</span>
                    <span className="text-sm text-[var(--muted-gray)]">${amountToNext.toLocaleString()} to go</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Your Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="current" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="current">Current Tier</TabsTrigger>
                <TabsTrigger value="next">Next Tier</TabsTrigger>
              </TabsList>

              <TabsContent value="current" className="space-y-6">
                {currentTier ? (
                  <>
                    <div className="p-4 rounded-lg bg-[var(--brand-red)]/10 border border-[var(--brand-red)]/20">
                      <h4 className="font-semibold text-[var(--brand-navy)] mb-2">Current Tier: {currentTier.tier}</h4>
                      <ul className="text-sm text-[var(--muted-gray)] space-y-1">
                        {currentTier.topBenefits.map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-red)]" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-green-50 border border-green-200">
                        <CreditCard className="h-6 w-6 text-green-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-green-700">${monthlyRewards.toFixed(0)}</div>
                        <div className="text-xs text-green-600">Monthly rewards</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-blue-50 border border-blue-200">
                        <TrendingUp className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-blue-700">${annualRewards.toFixed(0)}</div>
                        <div className="text-xs text-blue-600">Annual rewards</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-[var(--muted-gray)]">
                      Increase your combined balance to $20,000 to unlock Gold tier benefits
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="next" className="space-y-6">
                {nextTier ? (
                  <>
                    <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                      <h4 className="font-semibold text-[var(--brand-navy)] mb-2">Next Tier: {nextTier.tier}</h4>
                      <p className="text-sm text-[var(--muted-gray)] mb-3">
                        Add ${amountToNext.toLocaleString()} to reach this tier
                      </p>
                      <ul className="text-sm text-[var(--muted-gray)] space-y-1">
                        {nextTier.topBenefits.map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                      <h5 className="font-medium text-yellow-800 mb-2">What changes for you:</h5>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Higher credit card reward bonus</li>
                        <li>• Additional banking fee waivers</li>
                        <li>• Enhanced customer service priority</li>
                        <li>• Better interest rates on deposits</li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Banknote className="h-12 w-12 text-[var(--brand-navy)] mx-auto mb-4" />
                    <h4 className="font-semibold text-[var(--brand-navy)] mb-2">You've reached the highest tier!</h4>
                    <p className="text-[var(--muted-gray)]">Enjoy all the premium benefits of Diamond Honors status</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
