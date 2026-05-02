import { defineType, defineField } from 'sanity'

export const whyZelvoxxType = defineType({
  name: 'whyZelvoxx',
  title: 'Why Zelvoxx Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main headline for the Why Zelvoxx page',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
      description: 'Supporting text below the hero title',
    }),
    defineField({
      name: 'ctaText',
      title: 'Hero CTA Text',
      type: 'string',
      description: 'Text for the main CTA button',
      initialValue: 'Book a Strategy Call',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Hero CTA Link',
      type: 'string',
      description: 'URL for the hero CTA button',
      initialValue: 'https://calendly.com/Zelvoxx',
    }),
    defineField({
      name: 'problemText',
      title: 'Problem Section Text',
      type: 'text',
      rows: 4,
      description: 'Text explaining the system problem businesses face',
    }),
    defineField({
      name: 'differenceTitle',
      title: 'Difference Section Title',
      type: 'string',
      description: 'Title for what makes Zelvoxx different',
    }),
    defineField({
      name: 'differencePoints',
      title: 'Difference Points',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points highlighting the Zelvoxx difference',
    }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Step Title', type: 'string' },
          { name: 'description', title: 'Step Description', type: 'text', rows: 3 },
        ],
      }],
      description: 'The 3-step process (Audit & Strategy, Build & Optimize, Scale & Dominate)',
    }),
    defineField({
      name: 'resultsText',
      title: 'Results Section Text',
      type: 'text',
      rows: 4,
      description: 'Text emphasizing revenue-focused results',
    }),
    defineField({
      name: 'founderText',
      title: 'Founder Mindset Text',
      type: 'text',
      rows: 4,
      description: 'Strong positioning text about founder mindset',
    }),
    defineField({
      name: 'audienceText',
      title: 'Who It\'s For Text',
      type: 'text',
      rows: 4,
      description: 'Clear filtering section describing ideal clients',
    }),
    defineField({
      name: 'finalCtaTitle',
      title: 'Final CTA Title',
      type: 'string',
      description: 'Title for the final conversion section',
    }),
    defineField({
      name: 'finalCtaSubtitle',
      title: 'Final CTA Subtitle',
      type: 'text',
      rows: 2,
      description: 'Subtitle for the final conversion section',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'WhatsApp number for contact (with country code, e.g., +1234567890)',
      initialValue: '+1234567890',
    }),
    defineField({
      name: 'whatsappCtaText',
      title: 'WhatsApp CTA Text',
      type: 'string',
      description: 'Text for the WhatsApp button',
      initialValue: 'Chat on WhatsApp',
    }),
  ],
  preview: {
    select: {
      title: 'heroTitle',
    },
    prepare({ title }) {
      return {
        title: title || 'Why Zelvoxx Page Content',
        subtitle: 'Single document - only one should exist',
      }
    },
  },
})
