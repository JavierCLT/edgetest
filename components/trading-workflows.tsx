import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, TrendingUp, Shield, Zap } from "lucide-react"

const workflows = [
  {
    icon: TrendingUp,
    title: "Multi-Leg Options Strategies",
    description: "Execute complex options strategies with ease",
    steps: [
      "Select your strategy template (spreads, straddles, etc.)",
      "Customize strike prices and expiration dates",
      "Review profit/loss scenarios",
      "Execute all legs simultaneously",
    ],
    badge: "Advanced",
  },
  {
    icon: Settings,
    title: "Conditional Orders",
    description: "Automate your trading with intelligent order types",
    steps: [
      "Set trigger conditions (price, time, or technical indicators)",
      "Define order parameters and quantities",
      "Add multiple conditions with AND/OR logic",
      "Monitor and modify active conditions",
    ],
    badge: "Professional",
  },
  {
    icon: Shield,
    title: "Risk Management Tools",
    description: "Protect your portfolio with automated safeguards",
    steps: [
      "Set position size limits and concentration rules",
      "Configure stop-loss and take-profit levels",
      "Monitor real-time risk metrics",
      "Receive alerts for risk threshold breaches",
    ],
    badge: "Essential",
  },
  {
    icon: Zap,
    title: "Algorithmic Trading",
    description: "Deploy systematic trading strategies",
    steps: [
      "Choose from pre-built strategy templates",
      "Backtest strategies with historical data",
      "Paper trade to validate performance",
      "Deploy live with position sizing controls",
    ],
    badge: "Premium",
  },
]

export function TradingWorkflows() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">Professional Trading Workflows</h2>
        <p className="text-lg text-[var(--muted-gray)]">
          Execute sophisticated strategies with tools designed for serious traders
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {workflows.map((workflow, index) => {
          const IconComponent = workflow.icon
          return (
            <Card key={index} className="border-2 hover:border-[var(--brand-red)]/20 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-[var(--brand-red)]/10">
                      <IconComponent className="h-6 w-6 text-[var(--brand-red)]" />
                    </div>
                    <CardTitle className="text-xl">{workflow.title}</CardTitle>
                  </div>
                  <Badge variant="outline">{workflow.badge}</Badge>
                </div>
                <p className="text-[var(--muted-gray)]">{workflow.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {workflow.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[var(--brand-navy)] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {stepIndex + 1}
                      </div>
                      <span className="text-sm text-[var(--muted-gray)]">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
