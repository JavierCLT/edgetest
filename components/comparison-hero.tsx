import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ComparisonHero() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Compare Your Options</h1>
      <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
        Find the perfect investing solution for your needs, experience level, and financial goals. Each path offers
        unique benefits designed for different investor preferences.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white">
          Take Our Quiz
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-[var(--brand-navy)] bg-transparent"
        >
          Schedule Consultation
        </Button>
      </div>
    </div>
  )
}
