"use client"

import { Button } from "@/components/ui/button"

interface DisclosureItem {
  number: number
  text: string
}

interface DisclosureListProps {
  items: DisclosureItem[]
  id?: string
  className?: string
}

export function DisclosureList({ items, id = "page-disclosures", className = "" }: DisclosureListProps) {
  if (items.length === 0) return null

  return (
    <section className={`mt-12 pt-8 border-t border-gray-200 ${className}`} aria-labelledby="disclosures-heading">
      <div className="flex items-center justify-between mb-4">
        <h2 id="disclosures-heading" className="text-lg font-semibold text-[var(--brand-navy)]">
          Disclosures
        </h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs"
        >
          Back to top
        </Button>
      </div>
      <ol id={id} className="space-y-3 text-sm text-gray-600">
        {items.map((item) => (
          <li key={item.number} id={`disclosure-${item.number}`} className="flex gap-2" tabIndex={-1}>
            <span className="font-medium text-[var(--brand-red)] min-w-[1.5rem]">{item.number}.</span>
            <span dangerouslySetInnerHTML={{ __html: item.text }} />
          </li>
        ))}
      </ol>
    </section>
  )
}
