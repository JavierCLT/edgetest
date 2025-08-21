import { Award, Users, Shield, TrendingUp, Star, CheckCircle } from "lucide-react"
import { InlineFootnote } from "@/components/inline-footnote"

const trustMetrics = [
  {
    icon: Users,
    value: "4M+",
    label: "Client Accounts",
    description: "Trusted by millions of investors",
  },
  {
    icon: TrendingUp,
    value: "$2.8T",
    label: "Assets Under Care",
    description: "Managing wealth for generations",
  },
  {
    icon: Award,
    value: "A+",
    label: "BBB Rating",
    description: "Better Business Bureau accredited",
  },
  {
    icon: Shield,
    value: (
      <>
        SIPC
        <InlineFootnote number={2} />
      </>
    ), // Added SIPC footnote
    label: "Protected",
    description: "Securities investor protection",
  },
]

const socialProof = [
  {
    type: "rating",
    platform: "App Store",
    rating: "4.8",
    reviews: "125K+ reviews",
  },
  {
    type: "rating",
    platform: "Google Play",
    rating: "4.7",
    reviews: "89K+ reviews",
  },
  {
    type: "testimonial",
    quote: "Best trading platform I've used. Professional tools with great support.",
    author: "Sarah M., Self-Directed Investor",
  },
  {
    type: "testimonial",
    quote: "My advisor helped me plan for retirement and my kids' college. Excellent service.",
    author: "Michael R., Advisor Client",
  },
]

export function TrustBand() {
  return (
    <div className="bg-[var(--brand-navy)] text-white py-16 rounded-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Millions</h2>
          <p className="text-blue-100 text-lg">A legacy of financial expertise and client service</p>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {trustMetrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-4">
                  <IconComponent className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm font-medium mb-1">{metric.label}</div>
                <div className="text-xs text-blue-100">{metric.description}</div>
              </div>
            )
          })}
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* App Ratings */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-400" />
                Highly Rated Apps
              </h3>
              <div className="space-y-3">
                {socialProof
                  .filter((item) => item.type === "rating")
                  .map((rating, index) => (
                    <div key={index} className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                      <span className="font-medium">{rating.platform}</span>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 font-bold">{rating.rating}</span>
                        </div>
                        <span className="text-sm text-blue-100">{rating.reviews}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Client Testimonials */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                Client Success Stories
              </h3>
              <div className="space-y-4">
                {socialProof
                  .filter((item) => item.type === "testimonial")
                  .map((testimonial, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-4">
                      <p className="text-sm italic mb-2">"{testimonial.quote}"</p>
                      <p className="text-xs text-blue-100">— {testimonial.author}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
