"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface QuizQuestion {
  id: string
  question: string
  options: { value: string; label: string; description?: string }[]
}

const quizQuestions: QuizQuestion[] = [
  {
    id: "goal",
    question: "What's your primary investment goal?",
    options: [
      { value: "growth", label: "Long-term growth", description: "Build wealth over 10+ years" },
      { value: "income", label: "Generate income", description: "Regular dividends and interest" },
      { value: "preservation", label: "Preserve capital", description: "Protect what I have" },
      { value: "speculation", label: "Active trading", description: "Frequent buying and selling" },
    ],
  },
  {
    id: "timeline",
    question: "When do you plan to use this money?",
    options: [
      { value: "short", label: "Less than 2 years", description: "Near-term needs" },
      { value: "medium", label: "2-10 years", description: "Medium-term goals" },
      { value: "long", label: "10+ years", description: "Long-term planning" },
      { value: "retirement", label: "Retirement", description: "Building retirement savings" },
    ],
  },
  {
    id: "guidance",
    question: "How much guidance do you want?",
    options: [
      { value: "none", label: "I want full control", description: "Make all decisions myself" },
      { value: "some", label: "Some guidance", description: "Professional management with oversight" },
      { value: "full", label: "Full guidance", description: "Personal advisor relationship" },
      { value: "unsure", label: "I'm not sure", description: "Help me decide" },
    ],
  },
  {
    id: "risk",
    question: "How comfortable are you with investment risk?",
    options: [
      { value: "conservative", label: "Conservative", description: "Prefer stability over growth" },
      { value: "moderate", label: "Moderate", description: "Balanced approach to risk/return" },
      { value: "aggressive", label: "Aggressive", description: "Willing to take risks for higher returns" },
      { value: "very-aggressive", label: "Very aggressive", description: "Maximum growth potential" },
    ],
  },
  {
    id: "funding",
    question: "How ready are you to start investing?",
    options: [
      { value: "ready", label: "Ready now", description: "Have funds available to invest" },
      { value: "soon", label: "Within 30 days", description: "Need to transfer or save funds" },
      { value: "planning", label: "Still planning", description: "Researching and learning" },
      { value: "future", label: "Future consideration", description: "Not ready to invest yet" },
    ],
  },
]

interface MicroQuizProps {
  onComplete?: (answers: Record<string, string>, recommendation: string) => void
}

export function MicroQuiz({ onComplete }: MicroQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isComplete, setIsComplete] = useState(false)
  const router = useRouter()

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      completeQuiz()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const getRecommendation = (answers: Record<string, string>) => {
    const { goal, guidance, risk, funding } = answers

    // Logic to determine recommendation
    if (guidance === "full" || (goal === "preservation" && risk === "conservative")) {
      return "advisor"
    }
    if (guidance === "none" || goal === "speculation" || risk === "very-aggressive") {
      return "self-directed"
    }
    return "guided-investing"
  }

  const completeQuiz = () => {
    const recommendation = getRecommendation(answers)
    setIsComplete(true)
    onComplete?.(answers, recommendation)

    // Auto-redirect after showing results
    setTimeout(() => {
      const routes = {
        "self-directed": "/self-directed",
        "guided-investing": "/guided-investing",
        advisor: "/advisor",
      }
      router.push(routes[recommendation as keyof typeof routes])
    }, 3000)
  }

  const currentQ = quizQuestions[currentQuestion]
  const currentAnswer = answers[currentQ?.id]

  if (isComplete) {
    const recommendation = getRecommendation(answers)
    const recommendationTitles = {
      "self-directed": "Self-Directed Trading",
      "guided-investing": "Merrill Guided Investing",
      advisor: "Work with an Advisor",
    }

    return (
      <Card className="max-w-2xl mx-auto border-2 border-green-200">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-[var(--brand-navy)] mb-4">Perfect Match Found!</h3>
          <p className="text-lg text-[var(--muted-gray)] mb-6">
            Based on your answers, we recommend:{" "}
            <strong className="text-[var(--brand-red)]">
              {recommendationTitles[recommendation as keyof typeof recommendationTitles]}
            </strong>
          </p>
          <div className="bg-[var(--surface)] rounded-lg p-4 mb-6">
            <p className="text-sm text-[var(--muted-gray)]">
              Redirecting you to learn more about this option in 3 seconds...
            </p>
          </div>
          <Button
            className="bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white"
            onClick={() => {
              const routes = {
                "self-directed": "/self-directed",
                "guided-investing": "/guided-investing",
                advisor: "/advisor",
              }
              router.push(routes[recommendation as keyof typeof routes])
            }}
          >
            Get Started Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto border-2">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <CardTitle>Find Your Perfect Investing Path</CardTitle>
          <div className="text-sm text-[var(--muted-gray)]">
            {currentQuestion + 1} of {quizQuestions.length}
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-[var(--brand-navy)] mb-6">{currentQ.question}</h3>
          <RadioGroup value={currentAnswer} onValueChange={(value) => handleAnswer(currentQ.id, value)}>
            <div className="space-y-3">
              {currentQ.options.map((option) => (
                <div key={option.value} className="flex items-start space-x-3">
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    <div className="font-medium text-[var(--ink)]">{option.label}</div>
                    {option.description && (
                      <div className="text-sm text-[var(--muted-gray)] mt-1">{option.description}</div>
                    )}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div className="flex justify-between pt-6 border-t">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="bg-transparent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!currentAnswer}
            className="bg-[var(--brand-red)] hover:bg-[var(--brand-red)]/90 text-white"
          >
            {currentQuestion === quizQuestions.length - 1 ? "Get Recommendation" : "Next"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
