import type { Block } from 'payload';

export const PricingBlockConfig: Block = {
  slug: 'pricing',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: false,
    },
    {
      name: 'plans',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          required: false,
        },
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'Starter', value: 'starter' },
            { label: 'Pro', value: 'pro' },
            { label: 'Enterprise', value: 'enterprise' },
          ],
          required: true,
        },
        {
          name: 'frequency',
          type: 'select',
          options: [
            { label: 'Monthly', value: 'monthly' },
            { label: 'Yearly', value: 'yearly' },
          ],
          required: true,
        },
        {
          name: 'price',
          type: 'group',
          fields: [
            {
              name: 'currency',
              type: 'text',
              required: true,
            },
            {
              name: 'amount',
              type: 'number',
              required: true,
            },
          ],
        },
        {
          name: 'items',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'included',
              type: 'checkbox',
              label: 'Feature included in this plan',
              defaultValue: true,
            },
          ],
        },
      ],
    },
  ],
  interfaceName: 'PricingBlock',
}; 