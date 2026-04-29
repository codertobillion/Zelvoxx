import { defineField, defineType } from 'sanity'

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
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
      name: 'image',
      title: 'Project Screen Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'colorGradient',
      title: 'Tailwind Color Gradient (e.g. from-blue-500/20 to-purple-500/20)',
      type: 'string',
    }),
  ],
})
