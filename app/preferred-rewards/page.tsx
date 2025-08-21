import { PreferredRewardsHero } from "@/components/preferred-rewards-hero"
import { TierBenefitsTable } from "@/components/tier-benefits-table"
import { EnhancedRewardsEstimator } from "@/components/enhanced-rewards-estimator"
import { RewardsCalculator } from "@/components/rewards-calculator"
import { PreferredRewardsFAQ } from "@/components/preferred-rewards-faq"
import { LegalDisclosures } from "@/components/legal-disclosures"

export default function PreferredRewardsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--brand-navy)] to-[var(--brand-navy)]/80 text-white">
        <div className="container mx-auto px-4">
          <PreferredRewardsHero />
        </div>
      </section>

      {/* Enhanced Estimator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <EnhancedRewardsEstimator />
        </div>
      </section>

      {/* Tier Benefits Table */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <TierBenefitsTable />
        </div>
      </section>

      {/* Rewards Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <RewardsCalculator />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <PreferredRewardsFAQ />
        </div>
      </section>

      {/* Legal Disclosures */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <LegalDisclosures />
        </div>
      </section>
    </div>
  )
}
