import { defineType, defineField } from 'sanity'

export const contactSubmissionType = defineType({
  name: 'contactSubmission',
  title: 'Contact Form Submission',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'budget',
      title: 'Budget Range',
      type: 'string',
      options: {
        list: [
          { title: '$5,000 - $10,000', value: '5k-10k' },
          { title: '$10,000 - $25,000', value: '10k-25k' },
          { title: '$25,000 - $50,000', value: '25k-50k' },
          { title: '$50,000+', value: '50k+' },
          { title: 'Not Sure Yet', value: 'not-sure' },
        ],
      },
    }),
    defineField({
      name: 'services',
      title: 'Services Interested In',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Web Design & Development', value: 'web-design' },
          { title: 'Brand Strategy & Identity', value: 'branding' },
          { title: 'Digital Marketing & Ads', value: 'marketing' },
          { title: 'SEO & Content Strategy', value: 'seo' },
          { title: 'Funnel Architecture', value: 'funnels' },
          { title: 'Sales Automation & CRM', value: 'automation' },
          { title: 'Complete Growth System', value: 'complete-system' },
        ],
      },
    }),
    defineField({
      name: 'timeline',
      title: 'Project Timeline',
      type: 'string',
      options: {
        list: [
          { title: 'ASAP (Within 2 weeks)', value: 'asap' },
          { title: '1-2 Months', value: '1-2-months' },
          { title: '3-6 Months', value: '3-6-months' },
          { title: 'Just Exploring', value: 'exploring' },
        ],
      },
    }),
    defineField({
      name: 'discoverySource',
      title: 'How Did You Find Us?',
      type: 'string',
      options: {
        list: [
          { title: 'Google Search', value: 'google' },
          { title: 'Social Media', value: 'social' },
          { title: 'Referral / Word of Mouth', value: 'referral' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'message',
      title: 'Project Details',
      type: 'text',
      rows: 5,
      description: 'Tell us about your project, goals, and challenges',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'In Review', value: 'review' },
          { title: 'Contacted', value: 'contacted' },
          { title: 'Qualified', value: 'qualified' },
          { title: 'Closed', value: 'closed' },
        ],
      },
      initialValue: 'new',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      status: 'status',
    },
    prepare({ title, subtitle, status }) {
      return {
        title: title || 'Unnamed',
        subtitle: `${subtitle ? subtitle + ' • ' : ''}${status?.toUpperCase() || 'NEW'}`,
      }
    },
  },
})
