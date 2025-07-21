import type { Block } from 'payload';

export const ResultsBlockConfig: Block = {
  slug: 'results',
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
      name: 'downloadText',
      type: 'text',
      required: true,
    },
    {
      name: 'downloadUrl',
      type: 'text',
      required: true,
    },
    {
      name: 'beforeMetrics',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'afterMetrics',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'overallImprovement',
      type: 'text',
      required: true,
    },
  ],
  interfaceName: 'ResultsBlock',
}; 