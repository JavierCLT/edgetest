"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu, X } from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Self-Directed", href: "/self-directed" },
  { name: "Guided Investing", href: "/guided-investing" },
  { name: "Compare", href: "/compare" },
  { name: "Pricing", href: "/pricing" },
  { name: "Education", href: "/education" },
  { name: "Research", href: "/research" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-[var(--brand-red)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">ME</span>
              </div>
              <span className="font-semibold text-[var(--brand-navy)] text-lg">Merrill Edge</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[var(--ink)] hover:text-[var(--brand-red)] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and CTAs */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="h-4 w-4" />
            </Button>

            <Button
              size="sm"
              className="hidden sm:flex bg-[var(--brand-navy)] hover:bg-[var(--brand-navy)]/90 text-white font-medium"
            >
              Log in
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex border-[var(--brand-navy)] text-[var(--brand-navy)] hover:bg-[var(--brand-navy)] hover:text-white bg-transparent"
            >
              Schedule a call
            </Button>

            <Button size="sm" className="bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white">
              Open account
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-[var(--ink)] hover:text-[var(--brand-red)] hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 space-y-2">
                <Button className="w-full bg-[var(--brand-navy)] hover:bg-[var(--brand-navy)]/90 text-white font-medium">
                  Log in
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[var(--brand-navy)] text-[var(--brand-navy)] bg-transparent"
                >
                  Schedule a call
                </Button>
                <Button className="w-full bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white">
                  Open account
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
