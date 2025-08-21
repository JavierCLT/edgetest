"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, BarChart3, ArrowRight, Eye, Plus, Settings } from "lucide-react"
import Link from "next/link"
import { OptionsChainModal } from "@/components/options-chain-modal"
import { TradingChart } from "@/components/trading-chart"
import { Sparkline } from "@/components/sparkline"

const watchlistData = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 175.43,
    change: 2.34,
    changePercent: 1.35,
    trend: "up" as const,
    volume: "52.3M",
    sparklineData: [170, 172, 169, 174, 176, 175, 175.43],
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp",
    price: 378.85,
    change: -1.23,
    changePercent: -0.32,
    trend: "down" as const,
    volume: "28.7M",
    sparklineData: [382, 380, 379, 381, 377, 379, 378.85],
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc",
    price: 142.56,
    change: 0.87,
    changePercent: 0.61,
    trend: "up" as const,
    volume: "31.2M",
    sparklineData: [140, 141, 142, 141, 143, 142, 142.56],
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc",
    price: 248.42,
    change: -5.67,
    changePercent: -2.23,
    trend: "down" as const,
    volume: "89.4M",
    sparklineData: [255, 252, 250, 254, 249, 251, 248.42],
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corp",
    price: 875.28,
    change: 12.45,
    changePercent: 1.44,
    trend: "up" as const,
    volume: "45.8M",
    sparklineData: [860, 865, 870, 862, 878, 872, 875.28],
  },
]

const marketIndices = [
  { symbol: "SPY", name: "S&P 500", price: 4185.47, change: 15.23, changePercent: 0.37 },
  { symbol: "QQQ", name: "NASDAQ", price: 358.92, change: -2.14, changePercent: -0.59 },
  { symbol: "DIA", name: "Dow Jones", price: 339.84, change: 8.76, changePercent: 2.65 },
]

export function MarketProPreview() {
  const [selectedStock, setSelectedStock] = useState("AAPL")
  const [optionsModalOpen, setOptionsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("watchlist")

  const selectedStockData = watchlistData.find((stock) => stock.symbol === selectedStock) || watchlistData[0]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">MarketPro Platform Preview</h2>
        <p className="text-lg text-[var(--muted-gray)]">Professional-grade tools for serious traders and investors</p>
        <Badge variant="secondary" className="mt-2">
          Read-Only Demo
        </Badge>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Trading Interface */}
        <div className="lg:col-span-2 space-y-6">
          {/* Market Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Market Overview</span>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Market Open
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {marketIndices.map((index) => (
                  <div key={index.symbol} className="text-center p-3 rounded-lg bg-gray-50">
                    <div className="font-semibold text-[var(--brand-navy)]">{index.symbol}</div>
                    <div className="text-sm text-[var(--muted-gray)] mb-1">{index.name}</div>
                    <div className="font-bold">${index.price.toFixed(2)}</div>
                    <div
                      className={`text-sm flex items-center justify-center space-x-1 ${
                        index.change > 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {index.change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                      <span>
                        {index.change > 0 ? "+" : ""}
                        {index.change.toFixed(2)} ({index.changePercent > 0 ? "+" : ""}
                        {index.changePercent.toFixed(2)}%)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Watchlist and Chart Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="watchlist">My Watchlist</TabsTrigger>
              <TabsTrigger value="chart">Advanced Chart</TabsTrigger>
            </TabsList>

            <TabsContent value="watchlist">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>My Watchlist</span>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        Add Symbol
                      </Button>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {/* Header */}
                    <div className="grid grid-cols-12 gap-2 text-xs font-medium text-[var(--muted-gray)] pb-2 border-b">
                      <div className="col-span-3">Symbol</div>
                      <div className="col-span-2 text-right">Price</div>
                      <div className="col-span-2 text-right">Change</div>
                      <div className="col-span-2 text-right">Volume</div>
                      <div className="col-span-2 text-center">30-Day Trend</div>
                      <div className="col-span-1 text-center">Action</div>
                    </div>

                    {/* Watchlist Items */}
                    {watchlistData.map((stock) => (
                      <div
                        key={stock.symbol}
                        className={`grid grid-cols-12 gap-2 items-center p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer ${
                          selectedStock === stock.symbol
                            ? "bg-[var(--brand-red)]/5 border border-[var(--brand-red)]/20"
                            : ""
                        }`}
                        onClick={() => setSelectedStock(stock.symbol)}
                      >
                        <div className="col-span-3">
                          <div className="font-semibold text-[var(--brand-navy)]">{stock.symbol}</div>
                          <div className="text-xs text-[var(--muted-gray)]">{stock.name}</div>
                        </div>
                        <div className="col-span-2 text-right font-medium">${stock.price.toFixed(2)}</div>
                        <div className="col-span-2 text-right">
                          <div
                            className={`flex items-center justify-end space-x-1 ${
                              stock.trend === "up" ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {stock.trend === "up" ? (
                              <TrendingUp className="h-3 w-3" />
                            ) : (
                              <TrendingDown className="h-3 w-3" />
                            )}
                            <div className="text-sm">
                              <div>
                                {stock.change > 0 ? "+" : ""}
                                {stock.change.toFixed(2)}
                              </div>
                              <div className="text-xs">
                                ({stock.changePercent > 0 ? "+" : ""}
                                {stock.changePercent.toFixed(2)}%)
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 text-right text-sm text-[var(--muted-gray)]">{stock.volume}</div>
                        <div className="col-span-2 flex justify-center">
                          <Sparkline data={stock.sparklineData} trend={stock.trend} />
                        </div>
                        <div className="col-span-1 flex justify-center">
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Eye className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="chart">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>
                      {selectedStockData.symbol} - {selectedStockData.name}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Real-time</Badge>
                      <div className="text-right">
                        <div className="font-bold">${selectedStockData.price.toFixed(2)}</div>
                        <div
                          className={`text-sm ${selectedStockData.trend === "up" ? "text-green-600" : "text-red-600"}`}
                        >
                          {selectedStockData.change > 0 ? "+" : ""}
                          {selectedStockData.change.toFixed(2)} ({selectedStockData.changePercent > 0 ? "+" : ""}
                          {selectedStockData.changePercent.toFixed(2)}%)
                        </div>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <TradingChart symbol={selectedStockData.symbol} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar Tools */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white">
                Place Order
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                Create Alert
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                Add to Watchlist
              </Button>
            </CardContent>
          </Card>

          {/* Options Chain Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Options Chain</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between font-medium text-[var(--muted-gray)]">
                  <span>Strike</span>
                  <span>Premium</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>$170 Call</span>
                    <span className="text-green-600 font-medium">$8.45</span>
                  </div>
                  <div className="flex justify-between">
                    <span>$175 Call</span>
                    <span className="text-green-600 font-medium">$5.20</span>
                  </div>
                  <div className="flex justify-between">
                    <span>$180 Call</span>
                    <span className="text-green-600 font-medium">$2.85</span>
                  </div>
                  <div className="flex justify-between">
                    <span>$175 Put</span>
                    <span className="text-red-600 font-medium">$3.15</span>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-4 bg-transparent"
                onClick={() => setOptionsModalOpen(true)}
              >
                View Full Chain
              </Button>
            </CardContent>
          </Card>

          {/* Market News */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Market News</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="pb-2 border-b">
                  <div className="font-medium text-[var(--ink)] mb-1">Tech Stocks Rally on AI News</div>
                  <div className="text-xs text-[var(--muted-gray)]">2 hours ago</div>
                </div>
                <div className="pb-2 border-b">
                  <div className="font-medium text-[var(--ink)] mb-1">Fed Minutes Show Dovish Tone</div>
                  <div className="text-xs text-[var(--muted-gray)]">4 hours ago</div>
                </div>
                <div>
                  <div className="font-medium text-[var(--ink)] mb-1">Earnings Season Preview</div>
                  <div className="text-xs text-[var(--muted-gray)]">6 hours ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center mt-8">
        <Button asChild size="lg" className="bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white">
          <Link href="/self-directed">
            Explore MarketPro Features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <OptionsChainModal
        isOpen={optionsModalOpen}
        onClose={() => setOptionsModalOpen(false)}
        symbol={selectedStockData.symbol}
        currentPrice={selectedStockData.price}
      />
    </div>
  )
}
