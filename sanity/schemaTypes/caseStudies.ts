import { defineField, defineType } from 'sanity'

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
    }),
    defineField({
      name: 'problem',
      title: 'The Problem',
      type: 'text',
    }),
    defineField({
      name: 'solution',
      title: 'Our System',
      type: 'text',
    }),
    defineField({
      name: 'result',
      title: 'The Result',
      type: 'text',
    }),
  ],
})
