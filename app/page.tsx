import { HeroChoiceTiles } from "@/components/hero-choice-tiles"
import { PreferredRewardsWidget } from "@/components/preferred-rewards-widget"
import { MarketProSimple } from "@/components/market-pro-simple"
import { TrustBand } from "@/components/trust-band"
import { EducationCards } from "@/components/education-cards"
import { PricingSummary } from "@/components/pricing-summary"
import { LegalDisclosures } from "@/components/legal-disclosures"
import { AccountTypesExplainer } from "@/components/account-types-explainer"
import { DisclosureList } from "@/components/disclosure-list"

export default function HomePage() {
  const disclosureItems = [
    {
      number: 1,
      text: '$0 online stock and ETF trades; options $0 + $0.65/contract. Other fees may apply. <a href="/pricing" class="text-[var(--brand-red)] hover:underline">See Pricing</a>.',
    },
    {
      number: 2,
      text: 'SIPC protection for securities up to $500,000 (including $250,000 for cash). SIPC does not protect against market losses. <a href="https://www.sipc.org" class="text-[var(--brand-red)] hover:underline" target="_blank" rel="noopener noreferrer">See sipc.org</a>.',
    },
    {
      number: 3,
      text: "Program fees: Merrill Guided Investing 0.45%/yr; Merrill Guided Investing with Advisor 0.85%/yr. Other fees may apply. Preferred Rewards discounts may reduce program fees.",
    },
    {
      number: 4,
      text: "Tax Efficient Management Overlay (TEM) is optional and available when elected and eligible. Techniques such as tax-loss harvesting may be used when appropriate. Not all accounts or circumstances qualify; outcomes are not guaranteed.",
    },
    {
      number: 5,
      text: "MGI with Advisor account minimums: $20,000 (standard), $50,000 for income-focused portfolios. Minimums apply per account; product/strategy eligibility may vary.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Choice Tiles */}
      <section className="py-16 bg-gradient-to-b from-white to-[var(--surface)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--brand-navy)] mb-4">Choose Your Investing Path</h1>
            <p className="text-lg text-[var(--muted-gray)] max-w-3xl mx-auto">
              Whether you want to trade on your own, get guidance, or work with an advisor, we have the right solution
              for your investing needs.
            </p>
          </div>
          <HeroChoiceTiles />
        </div>
      </section>

      {/* Account Types Explainer */}
      <section className="bg-white py-5">
        <div className="container mx-auto px-4">
          <AccountTypesExplainer />
        </div>
      </section>

      {/* Trust Band */}
      <section className="py-12 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <TrustBand />
        </div>
      </section>

      {/* Preferred Rewards Widget */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <PreferredRewardsWidget />
        </div>
      </section>

      {/* MarketPro Preview */}
      

      {/* Education & Research Cards */}
      <section className="bg-white py-5">
        <div className="container mx-auto px-4">
          <EducationCards />
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="bg-[var(--surface)] py-5">
        <div className="container mx-auto px-4">
          <PricingSummary />
        </div>
      </section>

      {/* Legal Disclosures */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <DisclosureList items={disclosureItems} />
          <LegalDisclosures />
        </div>
      </section>
    </div>
  )
}
