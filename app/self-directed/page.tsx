import { SelfDirectedHero } from "@/components/self-directed-hero"
import { PlatformShowcase } from "@/components/platform-showcase"
import { TradingWorkflows } from "@/components/trading-workflows"
import { MarketProDemo } from "@/components/market-pro-demo"
import { FundingOptions } from "@/components/funding-options"
import { SelfDirectedFAQ } from "@/components/self-directed-faq"
import { LegalDisclosures } from "@/components/legal-disclosures"

export default function SelfDirectedPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--brand-navy)] to-[var(--brand-navy)]/80 text-white">
        <div className="container mx-auto px-4">
          <SelfDirectedHero />
        </div>
      </section>

      {/* Platform Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <PlatformShowcase />
        </div>
      </section>

      {/* Trading Workflows */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <TradingWorkflows />
        </div>
      </section>

      {/* MarketPro Demo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MarketProDemo />
        </div>
      </section>

      {/* Funding Options */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <FundingOptions />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SelfDirectedFAQ />
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
