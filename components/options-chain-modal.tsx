"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface OptionsChainModalProps {
  isOpen: boolean
  onClose: () => void
  symbol: string
  currentPrice: number
}

const generateOptionsData = (currentPrice: number) => {
  const strikes = []
  const baseStrike = Math.floor(currentPrice / 5) * 5

  for (let i = -4; i <= 4; i++) {
    const strike = baseStrike + i * 5
    const callPremium = Math.max(0.05, currentPrice - strike + Math.random() * 5)
    const putPremium = Math.max(0.05, strike - currentPrice + Math.random() * 5)

    strikes.push({
      strike,
      call: {
        premium: callPremium,
        volume: Math.floor(Math.random() * 1000) + 100,
        openInterest: Math.floor(Math.random() * 5000) + 500,
        impliedVol: 0.2 + Math.random() * 0.3,
      },
      put: {
        premium: putPremium,
        volume: Math.floor(Math.random() * 800) + 50,
        openInterest: Math.floor(Math.random() * 4000) + 300,
        impliedVol: 0.25 + Math.random() * 0.25,
      },
    })
  }

  return strikes
}

export function OptionsChainModal({ isOpen, onClose, symbol, currentPrice }: OptionsChainModalProps) {
  const optionsData = generateOptionsData(currentPrice)
  const expirationDate = new Date()
  expirationDate.setDate(expirationDate.getDate() + 21) // 3 weeks from now

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Options Chain - {symbol}</span>
            <div className="flex items-center space-x-2">
              <Badge variant="outline">Expiry: {expirationDate.toLocaleDateString()}</Badge>
              <Badge variant="outline">Current: ${currentPrice.toFixed(2)}</Badge>
            </div>
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="chain" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="chain">Options Chain</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="chain" className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-medium text-green-600" colSpan={4}>
                      CALLS
                    </th>
                    <th className="text-center p-2 font-medium">STRIKE</th>
                    <th className="text-right p-2 font-medium text-red-600" colSpan={4}>
                      PUTS
                    </th>
                  </tr>
                  <tr className="border-b text-xs text-[var(--muted-gray)]">
                    <th className="text-left p-2">Premium</th>
                    <th className="text-left p-2">Volume</th>
                    <th className="text-left p-2">OI</th>
                    <th className="text-left p-2">IV</th>
                    <th className="text-center p-2 font-bold">Price</th>
                    <th className="text-right p-2">IV</th>
                    <th className="text-right p-2">OI</th>
                    <th className="text-right p-2">Volume</th>
                    <th className="text-right p-2">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {optionsData.map((option, index) => {
                    const isITM = option.strike < currentPrice
                    const isATM = Math.abs(option.strike - currentPrice) < 2.5

                    return (
                      <tr key={index} className={`border-b hover:bg-gray-50 ${isATM ? "bg-yellow-50" : ""}`}>
                        {/* Calls */}
                        <td className="p-2 font-medium text-green-600">${option.call.premium.toFixed(2)}</td>
                        <td className="p-2 text-[var(--muted-gray)]">{option.call.volume.toLocaleString()}</td>
                        <td className="p-2 text-[var(--muted-gray)]">{option.call.openInterest.toLocaleString()}</td>
                        <td className="p-2 text-[var(--muted-gray)]">{(option.call.impliedVol * 100).toFixed(1)}%</td>

                        {/* Strike */}
                        <td
                          className={`p-2 text-center font-bold ${isATM ? "text-[var(--brand-red)]" : "text-[var(--brand-navy)]"}`}
                        >
                          ${option.strike}
                          {isATM && <div className="text-xs text-[var(--brand-red)]">ATM</div>}
                        </td>

                        {/* Puts */}
                        <td className="p-2 text-right text-[var(--muted-gray)]">
                          {(option.put.impliedVol * 100).toFixed(1)}%
                        </td>
                        <td className="p-2 text-right text-[var(--muted-gray)]">
                          {option.put.openInterest.toLocaleString()}
                        </td>
                        <td className="p-2 text-right text-[var(--muted-gray)]">
                          {option.put.volume.toLocaleString()}
                        </td>
                        <td className="p-2 text-right font-medium text-red-600">${option.put.premium.toFixed(2)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <div className="text-xs text-[var(--muted-gray)]">
                OI = Open Interest, IV = Implied Volatility, ATM = At The Money
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="bg-transparent">
                  Export Data
                </Button>
                <Button size="sm" className="bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white">
                  Place Options Order
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-[var(--brand-navy)]">Volatility Analysis</h4>
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[var(--muted-gray)]">Implied Volatility</span>
                    <span className="font-medium">28.5%</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[var(--muted-gray)]">Historical Volatility (30d)</span>
                    <span className="font-medium">24.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--muted-gray)]">IV Rank</span>
                    <span className="font-medium text-green-600">High</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-[var(--brand-navy)]">Greeks Summary</h4>
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-[var(--muted-gray)]">Delta</div>
                      <div className="font-medium">0.65</div>
                    </div>
                    <div>
                      <div className="text-[var(--muted-gray)]">Gamma</div>
                      <div className="font-medium">0.08</div>
                    </div>
                    <div>
                      <div className="text-[var(--muted-gray)]">Theta</div>
                      <div className="font-medium">-0.12</div>
                    </div>
                    <div>
                      <div className="text-[var(--muted-gray)]">Vega</div>
                      <div className="font-medium">0.23</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
