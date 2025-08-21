import { ComparisonHero } from "@/components/comparison-hero"
import { ComparisonTable } from "@/components/comparison-table"
import { ComparisonCalculator } from "@/components/comparison-calculator"
import { ComparisonFAQ } from "@/components/comparison-faq"
import { LegalDisclosures } from "@/components/legal-disclosures"

export default function ComparePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--brand-navy)] to-[var(--brand-navy)]/80 text-white">
        <div className="container mx-auto px-4">
          <ComparisonHero />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ComparisonTable />
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <ComparisonCalculator />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ComparisonFAQ />
        </div>
      </section>

      {/* Legal Disclosures */}
      <section className="py-8 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <LegalDisclosures />
        </div>
      </section>
    </div>
  )
}
