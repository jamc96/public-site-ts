import type { Block } from 'payload';

export const Feature: Block = {
  slug: 'feature',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'App Window', value: 'appWindow' },
            { label: 'Cloud Fog', value: 'cloudFog' },
            { label: 'Box', value: 'box' },
          ],
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'scaleTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'scaleSubtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'scaleDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'statistics',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
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
      ],
    },
  ],
  interfaceName: 'FeatureBlock',
};

export default Feature;