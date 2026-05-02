import { defineField, defineType } from 'sanity'

export const servicesType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Brief description for homepage/service cards',
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
      rows: 6,
      description: 'Detailed description for service detail page',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name (Lucide)',
      type: 'string',
      description: 'The name of the Lucide Icon component (e.g., "Rocket", "Palette")',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Large image for service detail page header',
    }),
    defineField({
      name: 'features',
      title: 'Service Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of key features or deliverables',
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'title', title: 'Benefit Title', type: 'string' },
        { name: 'description', title: 'Benefit Description', type: 'text', rows: 2 },
      ]}],
    }),
    defineField({
      name: 'process',
      title: 'Process Steps',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'step', title: 'Step Number', type: 'number' },
        { name: 'title', title: 'Step Title', type: 'string' },
        { name: 'description', title: 'Step Description', type: 'text', rows: 2 },
      ]}],
    }),
    defineField({
      name: 'pricing',
      title: 'Starting Price',
      type: 'string',
      description: 'e.g., "From $2,999" or "Custom"',
    }),
    defineField({
      name: 'duration',
      title: 'Typical Duration',
      type: 'string',
      description: 'e.g., "2-4 weeks", "1-2 months"',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Get Started',
    }),
    defineField({
      name: 'relatedCaseStudies',
      title: 'Related Case Studies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Service',
      type: 'boolean',
      description: 'Show this service prominently',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
    },
  },
})
