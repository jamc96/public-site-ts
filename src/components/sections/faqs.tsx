import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

function FaqAccordion({ data }: { data: Faq[] }) {
  /* let faqIds = data.map((item) => item.id); */

  return (
    <Accordion type="multiple" /* defaultValue={faqIds} */>
      {data.map((item) => (
        <AccordionItem value={item.id} key={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
interface Faq {
  id: string;
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqData: Faq[] = [
    {
      id: "1",
      question: "How does Triad Secure support multi-tenant environments?",
      answer:
        "Triad Secure offers native multi-tenancy, enabling MSSPs to manage multiple clients from one platform. Each client’s data is isolated, and you can apply policies or automations across all clients effortlessly.",
    },
    {
      id: "2",
      question: "What cost savings can we expect?",
      answer:
        "Customers typically save 30% on operational costs by reducing tool sprawl and leveraging AI automation, which cuts ticket resolution time by 50%.",
    },

    {
      id: "3",
      question: "How fast is deployment?",
      answer:
        "With pre-built integrations and expert onboarding, most teams deploy Triad Secure in days—not weeks—ensuring rapid time to value.",
    },
    {
      id: "4",
      question: "Can it handle high alert volumes?",
      answer:
        "Absolutely. Triad Secure scales with large SOCs, using AI to prioritize and automate responses, keeping your team efficient even under heavy workloads.",
    },
    {
      id: "5",
      question: "Is there a demo or trial?",
      answer:
        "Yes! Schedule a personalized demo to see Triad Secure in action and how it meets your specific needs.",
    },
  ];

  return (<section id="faq" className="bg-light py-28 ">
    <div className="max-w-5xl container">
      <div className="m-auto mb-14 max-w-3xl md:mb-20">
        <h2 className="mb-6 text-5xl font-semibold md:text-center">FAQs</h2>
        <p className="text-lg md:text-center">
          We’ve answered the most common questions from MSSPs and medium to large SOC teams to help
          you understand how Triad Secure can transform your operations.
        </p>
      </div>
      <FaqAccordion data={faqData} />
      <div className="flex flex-col items-center justify-center">
        <span className="pb-4 text-xl font-semibold">Need more details?</span>
        <span className="text-lg">Contact us anytime. </span>
      </div>
    </div>
  </section>)
}