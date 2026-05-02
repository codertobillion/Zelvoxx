import { defineField, defineType } from 'sanity'

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
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
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'niche',
      title: 'Industry / Niche',
      type: 'string',
    }),
    defineField({
      name: 'result',
      title: 'Result Statistic',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Brief summary for portfolio cards',
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text',
      rows: 6,
      description: 'Detailed project description for detail page',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Used in portfolio grids',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Large image for detail page header',
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Additional project images',
    }),
    defineField({
      name: 'colorGradient',
      title: 'Tailwind Color Gradient (e.g. from-blue-500/20 to-purple-500/20)',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Live Website URL',
      type: 'url',
    }),
    defineField({
      name: 'caseStudy',
      title: 'Related Case Study',
      type: 'reference',
      to: [{ type: 'caseStudy' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Show this project prominently',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
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
