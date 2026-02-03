import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What documents are required for a personal loan?',
    answer: 'For a personal loan, you typically need PAN card, Aadhaar card, last 3 months salary slips, 6 months bank statements, and address proof. Requirements may vary based on the loan amount and your profile.',
  },
  {
    question: 'How do I start investing in mutual funds?',
    answer: 'Starting is easy! Complete your KYC (one-time process), choose funds based on your goals and risk appetite, and start a SIP with as little as ₹500/month. Our advisors can help you select the right funds.',
  },
  {
    question: 'What types of insurance do you offer?',
    answer: 'We offer comprehensive insurance solutions including term life insurance, health insurance, critical illness cover, motor insurance, and home insurance from leading insurers in India.',
  },
  {
    question: 'How long does loan approval take?',
    answer: 'For most personal and business loans, we provide in-principle approval within 48 hours. Final disbursement typically happens within 5-7 working days after document verification.',
  },
  {
    question: 'Are there any hidden charges?',
    answer: 'No, we believe in complete transparency. All fees and charges are clearly communicated upfront before you sign up for any service. There are no hidden costs.',
  },
  {
    question: 'Can I track my investments online?',
    answer: 'Yes, we provide a comprehensive online portal where you can track all your investments, insurance policies, and loan status in real-time.',
  },
];

const FAQ = () => {
  return (
    <section className="section-padding">
      <div className="container-section">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our services.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
