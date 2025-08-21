"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calculator, DollarSign, TrendingUp } from "lucide-react"

export function ComparisonCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState("")
  const [tradingFrequency, setTradingFrequency] = useState("")
  const [timeHorizon, setTimeHorizon] = useState("")

  const amount = Number.parseFloat(investmentAmount.replace(/,/g, "")) || 0
  const trades = Number.parseInt(tradingFrequency) || 0

  // Calculate estimated costs
  const selfDirectedCosts = {
    advisory: 0,
    trading: trades * 0, // $0 online trades
    total: 0,
  }

  const guidedCosts = {
    advisory: amount * 0.0045, // 0.45% annually
    trading: 0,
    total: amount * 0.0045,
  }

  const advisorCosts = {
    advisory: amount * 0.01, // 1% annually (estimated)
    trading: 0,
    total: amount * 0.01,
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">Cost Calculator</h2>
        <p className="text-lg text-[var(--muted-gray)]">
          See how much each option would cost based on your investment amount and trading activity
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calculator className="h-5 w-5 text-[var(--brand-red)]" />
              <span>Your Investment Profile</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="amount">Investment Amount</Label>
              <Input
                id="amount"
                type="text"
                placeholder="$100,000"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="frequency">Monthly Trading Frequency</Label>
              <Select value={tradingFrequency} onValueChange={setTradingFrequency}>
                <SelectTrigger>
                  <SelectValue placeholder="Select trading frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">No trading (buy and hold)</SelectItem>
                  <SelectItem value="5">1-5 trades per month</SelectItem>
                  <SelectItem value="15">6-15 trades per month</SelectItem>
                  <SelectItem value="30">16-30 trades per month</SelectItem>
                  <SelectItem value="50">30+ trades per month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="horizon">Investment Time Horizon</Label>
              <Select value={timeHorizon} onValueChange={setTimeHorizon}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time horizon" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="short">Less than 2 years</SelectItem>
                  <SelectItem value="medium">2-10 years</SelectItem>
                  <SelectItem value="long">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="p-4 rounded-lg bg-[var(--surface)] border">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--brand-navy)]">${amount.toLocaleString()}</div>
                <div className="text-sm text-[var(--muted-gray)]">Total Investment Amount</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Annual Cost Comparison</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {amount > 0 && (
              <>
                {/* Self-Directed */}
                <div className="p-4 rounded-lg border border-green-200 bg-green-50">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-green-800">Self-Directed Trading</h4>
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Advisory fees:</span>
                      <span className="font-medium">${selfDirectedCosts.advisory.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Trading costs:</span>
                      <span className="font-medium">${selfDirectedCosts.trading.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-green-800 pt-2 border-t border-green-200">
                      <span>Total annual cost:</span>
                      <span>${selfDirectedCosts.total.toFixed(0)}</span>
                    </div>
                  </div>
                </div>

                {/* Guided Investing */}
                <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-blue-800">Merrill Guided Investing</h4>
                    <DollarSign className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Advisory fees (0.45%):</span>
                      <span className="font-medium">${guidedCosts.advisory.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Trading costs:</span>
                      <span className="font-medium">${guidedCosts.trading.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-blue-800 pt-2 border-t border-blue-200">
                      <span>Total annual cost:</span>
                      <span>${guidedCosts.total.toFixed(0)}</span>
                    </div>
                  </div>
                </div>

                {/* Advisor */}
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-purple-800">Financial Advisor</h4>
                    <DollarSign className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Advisory fees (~1.0%):</span>
                      <span className="font-medium">${advisorCosts.advisory.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Trading costs:</span>
                      <span className="font-medium">${advisorCosts.trading.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-purple-800 pt-2 border-t border-purple-200">
                      <span>Total annual cost:</span>
                      <span>${advisorCosts.total.toFixed(0)}</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-[var(--muted-gray)] pt-4 border-t">
                  * Estimates based on typical fee structures. Actual costs may vary. Advisor fees are estimated and
                  vary by advisor and account size.
                </div>
              </>
            )}

            {amount === 0 && (
              <div className="text-center py-8 text-[var(--muted-gray)]">
                Enter your investment amount to see cost comparison
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-8">
        <Button className="bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white">
          Get Personalized Recommendation
        </Button>
      </div>
    </div>
  )
}
