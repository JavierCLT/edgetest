import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "How do I qualify for Preferred Rewards?",
    answer:
      "You qualify by maintaining a combined balance of at least $20,000 across your Bank of America deposit accounts and/or Merrill investment accounts. The higher your combined balance, the higher your tier and benefits.",
  },
  {
    question: "What counts toward my combined balance?",
    answer:
      "Your combined balance includes Bank of America deposit accounts (checking, savings, CDs) and Merrill investment accounts (brokerage, retirement accounts, managed portfolios). Business accounts and credit card balances do not count.",
  },
  {
    question: "How often are my benefits calculated?",
    answer:
      "Your tier is determined by your average combined balance over the previous three-month period. Benefits are applied automatically based on your current tier status.",
  },
  {
    question: "Can I lose my tier status?",
    answer:
      "Yes, if your three-month average combined balance falls below your current tier threshold, you'll be moved to the appropriate lower tier. However, you'll receive advance notice before any changes take effect.",
  },
  {
    question: "Are there any fees for Preferred Rewards?",
    answer:
      "No, Preferred Rewards is a complimentary program. There are no enrollment fees or monthly charges. You simply need to maintain the minimum combined balance for your desired tier.",
  },
  {
    question: "How do I track my benefits?",
    answer:
      "You can view your current tier status, benefits earned, and progress toward the next tier through your online banking or mobile app. Monthly statements also include a summary of your Preferred Rewards benefits.",
  },
]

export function PreferredRewardsFAQ() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--brand-navy)] mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-[var(--muted-gray)]">Get answers to common questions about Preferred Rewards</p>
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
