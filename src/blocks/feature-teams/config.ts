import type { Block } from 'payload';

export const FeatureTeamsBlockConfig: Block = {
  slug: 'featureTeams',
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
  ],
  interfaceName: 'FeatureTeamsBlock',
}; 