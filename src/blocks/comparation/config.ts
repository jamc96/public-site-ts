import type { Block } from 'payload';

export const ComparationBlockConfig: Block = {
  slug: 'comparation',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'comparisonData',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
        {
          name: 'triadsecure',
          type: 'checkbox',
          required: true,
        },
        {
          name: 'xdr',
          type: 'checkbox',
          required: true,
        },
        {
          name: 'soar',
          type: 'checkbox',
          required: true,
        },
        {
          name: 'siem',
          type: 'checkbox',
          required: true,
        },
      ],
    },
  ],
  interfaceName: 'ComparationBlock',
}; 