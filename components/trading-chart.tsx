"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BarChart3, TrendingUp } from "lucide-react"

interface TradingChartProps {
  symbol: string
}

const timeframes = [
  { label: "1D", value: "1D" },
  { label: "5D", value: "5D" },
  { label: "1M", value: "1M" },
  { label: "3M", value: "3M" },
  { label: "1Y", value: "1Y" },
  { label: "5Y", value: "5Y" },
]

export function TradingChart({ symbol }: TradingChartProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1D")

  return (
    <div className="space-y-4">
      {/* Timeframe Selector */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-1">
          {timeframes.map((timeframe) => (
            <Button
              key={timeframe.value}
              variant={selectedTimeframe === timeframe.value ? "default" : "outline"}
              size="sm"
              className={`text-xs ${
                selectedTimeframe === timeframe.value
                  ? "bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white"
                  : "bg-transparent"
              }`}
              onClick={() => setSelectedTimeframe(timeframe.value)}
            >
              {timeframe.label}
            </Button>
          ))}
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="bg-transparent">
            <BarChart3 className="h-4 w-4 mr-1" />
            Indicators
          </Button>
          <Button variant="outline" size="sm" className="bg-transparent">
            <TrendingUp className="h-4 w-4 mr-1" />
            Studies
          </Button>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="h-16 w-16 text-[var(--brand-navy)]/20 mx-auto mb-4" />
            <div className="text-lg font-semibold text-[var(--brand-navy)] mb-2">{symbol} Interactive Chart</div>
            <div className="text-sm text-[var(--muted-gray)] mb-4">Professional charting with technical indicators</div>
            <div className="text-xs text-[var(--muted-gray)]">
              Timeframe: {selectedTimeframe} • Real-time data • Advanced analytics
            </div>
          </div>
        </div>

        {/* Simulated Chart Elements */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex justify-between text-xs text-[var(--muted-gray)]">
            <span>9:30 AM</span>
            <span>12:00 PM</span>
            <span>4:00 PM</span>
          </div>
        </div>

        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs">
            <div className="font-semibold text-[var(--brand-navy)]">Live Quote</div>
            <div className="text-[var(--muted-gray)]">Volume: 52.3M</div>
            <div className="text-[var(--muted-gray)]">Avg Vol: 48.7M</div>
          </div>
        </div>
      </div>

      {/* Chart Controls */}
      <div className="flex justify-between items-center text-sm">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-[var(--brand-red)] rounded-full"></div>
            <span className="text-[var(--muted-gray)]">Price</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-[var(--muted-gray)]">Volume</span>
          </div>
        </div>
        <div className="text-[var(--muted-gray)]">Last updated: {new Date().toLocaleTimeString()}</div>
      </div>
    </div>
  )
}
