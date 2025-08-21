"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MicroQuiz } from "@/components/micro-quiz"
import { ProgressTracker } from "@/components/progress-tracker"
import { X } from "lucide-react"

interface OnboardingModalProps {
  isOpen: boolean
  onClose: () => void
  initialTab?: "quiz" | "progress"
}

export function OnboardingModal({ isOpen, onClose, initialTab = "quiz" }: OnboardingModalProps) {
  const [activeTab, setActiveTab] = useState(initialTab)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [recommendation, setRecommendation] = useState<string>("")

  const handleQuizComplete = (answers: Record<string, string>, rec: string) => {
    setQuizCompleted(true)
    setRecommendation(rec)
    setActiveTab("progress")
  }

  const handleGetHelp = () => {
    // Placeholder for live chat integration
    alert("Live chat would open here")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Get Started with Merrill Edge</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="quiz">Find Your Path</TabsTrigger>
            <TabsTrigger value="progress" disabled={!quizCompleted}>
              Track Progress
            </TabsTrigger>
          </TabsList>

          <TabsContent value="quiz" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[var(--brand-navy)] mb-2">
                Let's Find Your Perfect Investing Solution
              </h3>
              <p className="text-[var(--muted-gray)]">Answer 5 quick questions to get a personalized recommendation</p>
            </div>
            <MicroQuiz onComplete={handleQuizComplete} />
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[var(--brand-navy)] mb-2">Ready to Open Your Account?</h3>
              <p className="text-[var(--muted-gray)]">Follow these steps to get started with your new account</p>
            </div>
            <ProgressTracker
              accountType={recommendation as "self-directed" | "guided-investing" | "advisor"}
              onGetHelp={handleGetHelp}
            />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
