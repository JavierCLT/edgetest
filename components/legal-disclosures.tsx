import { AlertTriangle } from "lucide-react"
import Link from "next/link"

export function LegalDisclosures() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-start space-x-3 p-6 bg-gray-50 rounded-lg">
        <AlertTriangle className="h-5 w-5 text-[var(--brand-red)] mt-0.5 flex-shrink-0" />
        <div className="text-xs text-[var(--muted-gray)] space-y-2">
          <p>
            <strong>Investment products:</strong> • Not FDIC Insured • No Bank Guarantee • May Lose Value
          </p>
          <p>
            Merrill Edge is available through Merrill Lynch, Pierce, Fenner & Smith Incorporated (also referred to as
            "MLPF&S" or "Merrill"), a registered broker-dealer, registered investment adviser, Member SIPC, and a wholly
            owned subsidiary of Bank of America Corporation.
          </p>
          <p>
            Past performance is not indicative of future results. All investing involves risk, including the potential
            loss of principal.
            <Link href="/legal" className="text-[var(--brand-red)] hover:underline ml-1">
              View full disclosures and important information.
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
