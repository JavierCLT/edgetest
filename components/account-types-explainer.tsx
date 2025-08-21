import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, DollarSign, Shield, TrendingUp } from "lucide-react"

export function AccountTypesExplainer() {
  const accountTypes = [
    {
      title: "Brokerage Account",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "Flexible investing with no contribution limits",
      features: [
        "No annual contribution limits",
        "Access funds anytime without penalties",
        "Taxable gains and dividends",
        "Perfect for short and long-term goals",
      ],
      badge: "Most Flexible",
    },
    {
      title: "Traditional IRA",
      icon: <Shield className="h-6 w-6" />,
      description: "Tax-deferred retirement savings",
      features: [
        "Tax-deductible contributions*",
        "Tax-deferred growth until withdrawal",
        "Required distributions at age 73",
        "Early withdrawal penalties may apply",
      ],
      badge: "Tax Deferred",
    },
    {
      title: "Roth IRA",
      icon: <DollarSign className="h-6 w-6" />,
      description: "Tax-free retirement growth",
      features: [
        "After-tax contributions",
        "Tax-free growth and withdrawals*",
        "No required minimum distributions",
        "Withdraw contributions anytime penalty-free",
      ],
      badge: "Tax Free",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">Choose the Right Account Type</h2>
        <p className="text-lg text-[var(--muted-gray)] max-w-3xl mx-auto">
          All our investing paths work with multiple account types. Choose the one that fits your goals and tax
          situation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {accountTypes.map((account, index) => (
          <Card key={index} className="relative border-2 hover:border-[var(--brand-red)] transition-colors">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-[var(--brand-red)]/10 rounded-full text-[var(--brand-red)]">{account.icon}</div>
              </div>
              <Badge variant="secondary" className="mb-2 bg-[var(--brand-red)]/10 text-[var(--brand-red)]">
                {account.badge}
              </Badge>
              <CardTitle className="text-xl text-[var(--brand-navy)]">{account.title}</CardTitle>
              <p className="text-[var(--muted-gray)]">{account.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {account.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[var(--ink)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-[var(--muted-gray)] text-center">
          *Tax benefits depend on your individual situation. Consult a tax professional for personalized advice. Income
          limits may apply for IRA contributions and deductions.
        </p>
      </div>
    </div>
  )
}
