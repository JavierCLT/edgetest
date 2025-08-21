"use client"

import { Button } from "@/components/ui/button"

interface InlineFootnoteProps {
  number: number
  className?: string
}

export function InlineFootnote({ number, className = "" }: InlineFootnoteProps) {
  const handleClick = () => {
    const element = document.getElementById(`disclosure-${number}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" })
      element.focus()
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className={`h-auto p-0 text-xs font-normal text-[var(--brand-red)] hover:text-[var(--brand-navy)] hover:bg-transparent ${className}`}
      onClick={handleClick}
      aria-label={`Go to footnote ${number}`}
    >
      <sup>{number}</sup>
    </Button>
  )
}
