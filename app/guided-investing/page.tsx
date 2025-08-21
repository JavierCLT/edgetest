import { GuidedInvestingHero } from "@/components/guided-investing-hero"
import { PortfolioMethodology } from "@/components/portfolio-methodology"
import { PerformanceReporting } from "@/components/performance-reporting"
import { GuidedPricing } from "@/components/guided-pricing"
import { PreferredRewardsDiscount } from "@/components/preferred-rewards-discount"
import { GuidedInvestingFAQ } from "@/components/guided-investing-faq"
import { LegalDisclosures } from "@/components/legal-disclosures"

export default function GuidedInvestingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--brand-navy)] to-[var(--brand-navy)]/80 text-white">
        <div className="container mx-auto px-4">
          <GuidedInvestingHero />
        </div>
      </section>

      {/* Portfolio Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <PortfolioMethodology />
        </div>
      </section>

      {/* Performance Reporting */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <PerformanceReporting />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <GuidedPricing />
        </div>
      </section>

      {/* Preferred Rewards Discount */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <PreferredRewardsDiscount />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <GuidedInvestingFAQ />
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
