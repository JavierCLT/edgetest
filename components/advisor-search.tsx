"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Search } from "lucide-react"

export function AdvisorSearch() {
  const [zipCode, setZipCode] = useState("")
  const [specialty, setSpecialty] = useState("")

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">Find Your Financial Advisor</h2>
        <p className="text-lg text-[var(--muted-gray)]">
          Connect with experienced advisors in your area who specialize in your financial needs
        </p>
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-[var(--brand-red)]" />
            <span>Advisor Search</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <Input
                placeholder="Enter ZIP code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Select value={specialty} onValueChange={setSpecialty}>
                <SelectTrigger>
                  <SelectValue placeholder="Select specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="retirement">Retirement Planning</SelectItem>
                  <SelectItem value="wealth">Wealth Management</SelectItem>
                  <SelectItem value="estate">Estate Planning</SelectItem>
                  <SelectItem value="tax">Tax Planning</SelectItem>
                  <SelectItem value="business">Business Planning</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button className="w-full bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white">
                <Search className="h-4 w-4 mr-2" />
                Search Advisors
              </Button>
            </div>
          </div>

          <div className="text-center text-sm text-[var(--muted-gray)]">
            <p>
              All advisors are registered representatives and investment adviser representatives of Merrill Lynch,
              Pierce, Fenner & Smith Incorporated.
            </p>
            <p className="mt-2">
              <a href="#" className="text-[var(--brand-red)] hover:underline">
                Check advisor credentials on BrokerCheck
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
