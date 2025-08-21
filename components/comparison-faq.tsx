import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "Can I switch between these options later?",
    answer:
      "Yes, you can switch between Self-Directed, Merrill Guided Investing, and working with an advisor at any time. However, some options have minimum balance requirements that must be met. There are no fees for switching between services.",
  },
  {
    question: "What if I want to start with one option and add another?",
    answer:
      "You can have multiple types of accounts. For example, you might have a self-directed account for individual stock picking and a guided investing account for your retirement savings. Each account type operates independently with its own fee structure.",
  },
  {
    question: "How do I know which option is right for me?",
    answer:
      "Consider your investment experience, time availability, and preference for control. Self-directed is best for experienced investors who want full control. Guided investing suits busy investors who want professional management. An advisor is ideal for those seeking comprehensive financial planning and personalized advice.",
  },
  {
    question: "Are there any hidden fees I should know about?",
    answer:
      "We believe in transparent pricing. The fees shown are the primary costs for each service. Additional fees may apply for specific services like wire transfers, paper statements, or certain types of trades. All fees are clearly disclosed in your account agreement.",
  },
  {
    question: "Do I get the same investment options with all three?",
    answer:
      "Investment options vary by service. Self-directed offers the broadest range including individual stocks, ETFs, options, and bonds. Guided investing focuses on diversified ETF portfolios. Advisors can access the full range plus alternative investments and may have access to institutional-class funds.",
  },
  {
    question: "How does Preferred Rewards affect these services?",
    answer:
      "Preferred Rewards provides benefits across all services based on your combined Bank of America and Merrill balances. Benefits include fee reductions, enhanced service levels, and better rates. Higher tiers receive greater benefits regardless of which investing option you choose.",
  },
]

export function ComparisonFAQ() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-[var(--muted-gray)]">Get answers to common questions about our investing options</p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-[var(--ink)] hover:text-[var(--brand-red)]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-[var(--muted-gray)] pt-2 pb-4">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
