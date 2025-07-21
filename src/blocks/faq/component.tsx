import type { FAQBlock as FAQBlockProps } from '@/payload-types';
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Faq {
    id: string;
    question: string;
    answer: string;
}

function FaqAccordion({ data }: { data: Faq[] }) {
    return (
        <Accordion type="multiple">
            {data.map((item) => (
                <AccordionItem value={item.id} key={item.id}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export const FAQBlock: React.FC<Partial<FAQBlockProps> & { className?: string }> = ({
    title,
    subtitle,
    faqs,
    contactText,
    contactSubtext,
    className,
}) => {
    const faqData: Faq[] = faqs?.map((faq, index: number) => ({
        id: (index + 1).toString(),
        question: faq.question,
        answer: faq.answer,
    })) || [];

    return (
        <section id="faq" className={`bg-light py-28 ${className || ''}`}>
            <div className="max-w-5xl container">
                <div className="m-auto mb-14 max-w-3xl md:mb-20">
                    <h2 className="mb-6 text-5xl font-semibold md:text-center">{title}</h2>
                    <p className="text-lg md:text-center">
                        {subtitle}
                    </p>
                </div>
                <FaqAccordion data={faqData} />
                <div className="flex flex-col items-center justify-center">
                    <span className="pb-4 text-xl font-semibold">{contactText}</span>
                    <span className="text-lg">{contactSubtext}</span>
                </div>
            </div>
        </section>
    );
}; 