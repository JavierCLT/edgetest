import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, TrendingUp, FileText } from "lucide-react"

const services = [
  { icon: Users, title: "Dedicated Advisor", description: "Personal relationship manager" },
  { icon: FileText, title: "Financial Planning", description: "Comprehensive life planning" },
  { icon: TrendingUp, title: "Investment Management", description: "Professional portfolio oversight" },
  { icon: Shield, title: "Estate Planning", description: "Wealth transfer strategies" },
]

export function AdvisorHero() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="mb-4 bg-[var(--brand-red)] text-white">Premium Service</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Work with a Financial Advisor</h1>
          <p className="text-xl text-blue-100 mb-8">
            Get personalized advice and comprehensive financial planning from experienced professionals. Build a
            long-term relationship with an advisor who understands your unique goals and circumstances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white">
              Find an Advisor
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--brand-navy)] bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
          <div className="text-sm text-blue-100">
            <strong>$250,000 minimum</strong> • Fees vary by advisor • Comprehensive planning included
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <IconComponent className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-blue-100">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
