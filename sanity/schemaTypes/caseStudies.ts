import { defineField, defineType } from 'sanity'

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title for this case study',
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
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'clientLogo',
      title: 'Client Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Project Duration',
      type: 'string',
      description: 'e.g., "3 months", "6 weeks"',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Used in listing pages',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Large image shown at top of detail page',
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Excerpt',
      type: 'text',
      rows: 2,
      description: 'Brief summary for cards/listings',
    }),
    defineField({
      name: 'problem',
      title: 'The Problem',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'solution',
      title: 'Our Solution / System',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'result',
      title: 'The Result',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'results',
      title: 'Key Results / Metrics',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'value', title: 'Value', type: 'string' },
      ]}],
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'reference',
      to: [{ type: 'testimonial' }],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'color',
      title: 'Accent Color (hex)',
      type: 'string',
      description: 'e.g., #7b61ff',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Case Study',
      type: 'boolean',
      description: 'Show this case study prominently',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'clientName',
      media: 'thumbnail',
    },
  },
})
