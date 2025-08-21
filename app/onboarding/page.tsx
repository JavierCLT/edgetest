import { MicroQuiz } from "@/components/micro-quiz"
import { ProgressTracker } from "@/components/progress-tracker"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OnboardingPage() {
  return (
    <div className="min-h-screen py-16 bg-[var(--surface)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[var(--brand-navy)] mb-4">Get Started with Merrill Edge</h1>
          <p className="text-lg text-[var(--muted-gray)] max-w-2xl mx-auto">
            Take our quick assessment to find the right investing solution for you, then track your progress as you open
            your account.
          </p>
        </div>

        <Tabs defaultValue="quiz" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="quiz">Investment Quiz</TabsTrigger>
            <TabsTrigger value="progress">Progress Tracker</TabsTrigger>
          </TabsList>

          <TabsContent value="quiz">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-center">Find Your Perfect Investing Path</CardTitle>
              </CardHeader>
              <CardContent>
                <MicroQuiz />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-center">Account Opening Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <ProgressTracker />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
