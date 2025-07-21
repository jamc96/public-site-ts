import type { Block } from 'payload';

export const FAQBlockConfig: Block = {
  slug: 'faq',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: true,
    },
    {
      name: 'faqs',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'contactText',
      type: 'text',
      required: true,
    },
    {
      name: 'contactSubtext',
      type: 'text',
      required: true,
    },
  ],
  interfaceName: 'FAQBlock',
}; 