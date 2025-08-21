import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, PiggyBank, TrendingUp, Shield, Lightbulb, FileText } from "lucide-react"
import Link from "next/link"

const educationTopics = [
  {
    icon: PiggyBank,
    title: "IRA vs Roth IRA",
    description: "Understand the differences and choose the right retirement account for your situation.",
    href: "/education/ira-vs-roth",
    category: "Retirement",
  },
  {
    icon: TrendingUp,
    title: "Rollover Guide",
    description: "Step-by-step guide to rolling over your 401(k) or other retirement accounts.",
    href: "/education/rollover-guide",
    category: "Retirement",
  },
  {
    icon: BookOpen,
    title: "Dollar-Cost Averaging",
    description: "Learn how consistent investing can help reduce market timing risk.",
    href: "/education/dollar-cost-averaging",
    category: "Investing Basics",
  },
  {
    icon: Shield,
    title: "Long-Term Investing",
    description: "Building wealth through time and compound growth strategies.",
    href: "/education/long-term-investing",
    category: "Investing Basics",
  },
  {
    icon: Lightbulb,
    title: "Market Insights",
    description: "Sample research and market analysis to inform your investment decisions.",
    href: "/research",
    category: "Research",
  },
  {
    icon: FileText,
    title: "Risk Disclosures",
    description: "Important information about investment risks and considerations.",
    href: "/legal",
    category: "Legal",
  },
]

export function EducationCards() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">Education & Research</h2>
        <p className="text-lg text-[var(--muted-gray)]">
          Build your investing knowledge with our comprehensive educational resources
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationTopics.map((topic, index) => {
          const IconComponent = topic.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-[var(--brand-red)]/10">
                    <IconComponent className="h-5 w-5 text-[var(--brand-red)]" />
                  </div>
                  <div className="text-xs font-medium text-[var(--brand-navy)] bg-[var(--brand-navy)]/10 px-2 py-1 rounded">
                    {topic.category}
                  </div>
                </div>
                <CardTitle className="text-lg">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--muted-gray)] text-sm mb-4">{topic.description}</p>
                <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                  <Link href={topic.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
