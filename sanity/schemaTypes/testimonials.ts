import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role / Position',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Testimonial Content',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullStory',
      title: 'Full Story / Case Background',
      type: 'text',
      rows: 8,
      description: 'Extended story for the testimonial detail page',
    }),
    defineField({
      name: 'image',
      title: 'Client Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5).integer(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Show this testimonial prominently on homepage',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'caseStudy',
      title: 'Related Case Study',
      type: 'reference',
      to: [{ type: 'caseStudy' }],
      description: 'Link to the case study for this client',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'twitter', title: 'Twitter/X', type: 'url' },
        { name: 'website', title: 'Website', type: 'url' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      media: 'image',
    },
  },
})
