"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock, MessageCircle, HelpCircle, FileText, CreditCard, User } from "lucide-react"

interface ProgressStep {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  completed: boolean
  current: boolean
  estimatedTime: string
  helpText?: string
}

interface ProgressTrackerProps {
  accountType?: "self-directed" | "guided-investing" | "advisor"
  onStepClick?: (stepId: string) => void
  onGetHelp?: () => void
}

export function ProgressTracker({ accountType = "self-directed", onStepClick, onGetHelp }: ProgressTrackerProps) {
  const [steps, setSteps] = useState<ProgressStep[]>([
    {
      id: "personal-info",
      title: "Personal Information",
      description: "Basic details and contact information",
      icon: User,
      completed: true,
      current: false,
      estimatedTime: "2 min",
      helpText: "We need your name, address, and contact details to open your account.",
    },
    {
      id: "financial-info",
      title: "Financial Information",
      description: "Income, net worth, and investment experience",
      icon: FileText,
      completed: true,
      current: false,
      estimatedTime: "3 min",
      helpText: "This helps us understand your financial situation and investment goals.",
    },
    {
      id: "account-setup",
      title: "Account Setup",
      description: "Choose account type and investment preferences",
      icon: Circle,
      completed: false,
      current: true,
      estimatedTime: "2 min",
      helpText: "Select your account features and investment preferences.",
    },
    {
      id: "funding",
      title: "Fund Your Account",
      description: "Transfer money or deposit a check",
      icon: CreditCard,
      completed: false,
      current: false,
      estimatedTime: "1 min",
      helpText: "You can fund your account via bank transfer, check deposit, or wire transfer.",
    },
  ])

  const completedSteps = steps.filter((step) => step.completed).length
  const totalSteps = steps.length
  const progressPercentage = (completedSteps / totalSteps) * 100

  const currentStep = steps.find((step) => step.current)
  const remainingTime = steps
    .filter((step) => !step.completed)
    .reduce((total, step) => total + Number.parseInt(step.estimatedTime), 0)

  const handleStepClick = (stepId: string) => {
    onStepClick?.(stepId)
  }

  const accountTypeLabels = {
    "self-directed": "Self-Directed Trading Account",
    "guided-investing": "Merrill Guided Investing Account",
    advisor: "Advisory Account",
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Progress Overview */}
      <Card className="border-2 border-[var(--brand-red)]/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-[var(--brand-red)]" />
              <span>Account Opening Progress</span>
            </CardTitle>
            <Badge variant="outline" className="text-[var(--brand-red)] border-[var(--brand-red)]">
              {accountTypeLabels[accountType]}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-[var(--brand-navy)]">You're ~{remainingTime} minutes away</div>
                <div className="text-[var(--muted-gray)]">
                  {completedSteps} of {totalSteps} steps completed
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-[var(--brand-red)]">{Math.round(progressPercentage)}%</div>
                <div className="text-sm text-[var(--muted-gray)]">Complete</div>
              </div>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Steps List */}
      <Card>
        <CardHeader>
          <CardTitle>Required Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isCompleted = step.completed
              const isCurrent = step.current

              return (
                <div
                  key={step.id}
                  className={`flex items-start space-x-4 p-4 rounded-lg border transition-colors cursor-pointer ${
                    isCurrent
                      ? "border-[var(--brand-red)] bg-[var(--brand-red)]/5"
                      : isCompleted
                        ? "border-green-200 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleStepClick(step.id)}
                >
                  <div className="flex-shrink-0">
                    {isCompleted ? (
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    ) : (
                      <IconComponent
                        className={`h-6 w-6 ${isCurrent ? "text-[var(--brand-red)]" : "text-[var(--muted-gray)]"}`}
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4
                        className={`font-semibold ${
                          isCurrent ? "text-[var(--brand-red)]" : isCompleted ? "text-green-800" : "text-[var(--ink)]"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            isCurrent
                              ? "border-[var(--brand-red)] text-[var(--brand-red)]"
                              : "border-gray-300 text-[var(--muted-gray)]"
                          }`}
                        >
                          {step.estimatedTime}
                        </Badge>
                        {isCurrent && <Badge className="bg-[var(--brand-red)] text-white text-xs">Current</Badge>}
                      </div>
                    </div>
                    <p className="text-sm text-[var(--muted-gray)] mt-1">{step.description}</p>
                    {step.helpText && isCurrent && (
                      <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <HelpCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-blue-800">{step.helpText}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Help Section */}
      <Card className="border-2 border-blue-200 bg-blue-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MessageCircle className="h-6 w-6 text-blue-600" />
              <div>
                <h4 className="font-semibold text-blue-900">Need Help?</h4>
                <p className="text-sm text-blue-700">Our specialists are here to assist you</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="bg-white border-blue-300 text-blue-700">
                Call (800) 123-4567
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={onGetHelp}>
                Live Chat
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
