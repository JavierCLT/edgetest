"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, Percent, Calculator } from "lucide-react"

export function RewardsCalculator() {
  const [scenario, setScenario] = useState("")
  const [balance, setBalance] = useState("")
  const [spending, setSpending] = useState("")

  const scenarios = [
    { value: "young-professional", label: "Young Professional", balance: "25000", spending: "1500" },
    { value: "growing-family", label: "Growing Family", balance: "75000", spending: "3000" },
    { value: "established-investor", label: "Established Investor", balance: "250000", spending: "4000" },
    { value: "high-net-worth", label: "High Net Worth", balance: "1000000", spending: "8000" },
  ]

  const handleScenarioChange = (value: string) => {
    setScenario(value)
    const selectedScenario = scenarios.find((s) => s.value === value)
    if (selectedScenario) {
      setBalance(selectedScenario.balance)
      setSpending(selectedScenario.spending)
    }
  }

  const balanceNum = Number.parseFloat(balance) || 0
  const spendingNum = Number.parseFloat(spending) || 0

  // Calculate tier and benefits
  const tier =
    balanceNum >= 1000000
      ? "Diamond Honors"
      : balanceNum >= 100000
        ? "Platinum Honors"
        : balanceNum >= 50000
          ? "Platinum"
          : balanceNum >= 20000
            ? "Gold"
            : "None"

  const bonusRate =
    tier === "Diamond Honors"
      ? 0.75
      : tier === "Platinum Honors"
        ? 0.5
        : tier === "Platinum"
          ? 0.25
          : tier === "Gold"
            ? 0.1
            : 0

  const baseRewards = spendingNum * 0.015 * 12 // 1.5% base rate annually
  const bonusRewards = baseRewards * bonusRate
  const totalRewards = baseRewards + bonusRewards

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">Scenario Calculator</h2>
        <p className="text-lg text-[var(--muted-gray)]">
          See how different life stages and financial situations benefit from Preferred Rewards
        </p>
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calculator className="h-5 w-5 text-[var(--brand-red)]" />
            <span>Your Scenario</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="scenario">Choose a scenario</Label>
              <Select value={scenario} onValueChange={handleScenarioChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select scenario" />
                </SelectTrigger>
                <SelectContent>
                  {scenarios.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="balance">Combined Balance</Label>
              <Input
                id="balance"
                type="text"
                placeholder="$100,000"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="spending">Monthly Spending</Label>
              <Input
                id="spending"
                type="text"
                placeholder="$3,000"
                value={spending}
                onChange={(e) => setSpending(e.target.value)}
              />
            </div>
          </div>

          {tier !== "None" && (
            <div className="grid md:grid-cols-3 gap-6 pt-6 border-t">
              <div className="text-center p-4 rounded-lg bg-[var(--brand-navy)]/10">
                <div className="text-2xl font-bold text-[var(--brand-navy)] mb-1">{tier}</div>
                <div className="text-sm text-[var(--muted-gray)]">Your Tier</div>
              </div>

              <div className="text-center p-4 rounded-lg bg-green-50 border border-green-200">
                <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-700">${totalRewards.toFixed(0)}</div>
                <div className="text-sm text-green-600">Annual rewards</div>
              </div>

              <div className="text-center p-4 rounded-lg bg-blue-50 border border-blue-200">
                <Percent className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-700">{((bonusRate + 1) * 100).toFixed(0)}%</div>
                <div className="text-sm text-blue-600">Effective reward rate</div>
              </div>
            </div>
          )}

          <div className="text-center pt-4">
            <Button className="bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white">
              Open Account to Start Earning
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
