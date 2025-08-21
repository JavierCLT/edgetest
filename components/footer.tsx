import Link from "next/link"

const footerLinks = {
  Investing: [
    { name: "Self-Directed Trading", href: "/self-directed" },
    { name: "Guided Investing", href: "/guided-investing" },
    { name: "Financial Advisors", href: "/advisor" },
    { name: "Compare Options", href: "/compare" },
  ],
  Resources: [
    { name: "Education Center", href: "/education" },
    { name: "Market Research", href: "/research" },
    { name: "Preferred Rewards", href: "/preferred-rewards" },
    { name: "Pricing", href: "/pricing" },
  ],
  Support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Help Center", href: "/help" },
    { name: "Security Center", href: "/security" },
    { name: "Account Access", href: "/login" },
  ],
  Legal: [
    { name: "Disclosures", href: "/legal" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[var(--surface)] border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-[var(--brand-navy)] mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--muted-gray)] hover:text-[var(--brand-red)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-[var(--brand-red)] flex items-center justify-center">
                <span className="text-white font-bold text-xs">ME</span>
              </div>
              <span className="font-semibold text-[var(--brand-navy)]">Merrill Edge</span>
            </div>

            <div className="text-xs text-[var(--muted-gray)] text-center md:text-right max-w-2xl">
              <p className="mb-2">Investment products: • Not FDIC Insured • No Bank Guarantee • May Lose Value</p>
              <p>
                Merrill Edge is available through Merrill Lynch, Pierce, Fenner & Smith Incorporated (also referred to
                as "MLPF&S" or "Merrill"), a registered broker-dealer, registered investment adviser, Member SIPC, and a
                wholly owned subsidiary of Bank of America Corporation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
