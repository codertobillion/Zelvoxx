import { SchemaTypeDefinition } from 'sanity'

export const pricingType: SchemaTypeDefinition = {
  name: 'pricing',
  title: 'Pricing Plans',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Plan Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g. "$2,999" or "Custom"',
    },
    {
      name: 'priceNote',
      title: 'Price Note',
      type: 'string',
      description: 'e.g. "Starting at" or "/month"',
    },
    {
      name: 'popular',
      title: 'Popular Plan',
      type: 'boolean',
      description: 'Mark this as the recommended plan',
      initialValue: false,
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Get Started',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
    },
  },
}
