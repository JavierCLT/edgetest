import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Monitor, Smartphone, Tablet, ArrowRight } from "lucide-react"

const platforms = [
  {
    icon: Monitor,
    name: "MarketPro Desktop",
    description: "Full-featured trading platform with advanced charting and analysis tools",
    features: ["Level II quotes", "Advanced charting", "Options chains", "Screeners"],
    image: "/platform-desktop.png",
  },
  {
    icon: Smartphone,
    name: "Mobile App",
    description: "Trade on the go with our award-winning mobile application",
    features: ["Touch ID login", "Real-time alerts", "Mobile deposit", "Quick trades"],
    image: "/platform-mobile.png",
  },
  {
    icon: Tablet,
    name: "Tablet Experience",
    description: "Optimized interface for tablet trading and portfolio management",
    features: ["Drag & drop", "Split screen", "Touch charts", "Portfolio view"],
    image: "/platform-tablet.png",
  },
]

export function PlatformShowcase() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">Award-Winning Trading Platforms</h2>
        <p className="text-lg text-[var(--muted-gray)]">
          Access your investments anywhere with our suite of professional trading tools
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {platforms.map((platform, index) => {
          const IconComponent = platform.icon
          return (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={platform.image || "/placeholder.svg?height=200&width=400"}
                  alt={platform.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">Available Now</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <IconComponent className="h-6 w-6 text-[var(--brand-red)]" />
                  <span>{platform.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--muted-gray)] mb-4">{platform.description}</p>
                <ul className="space-y-2 mb-6">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-red)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
