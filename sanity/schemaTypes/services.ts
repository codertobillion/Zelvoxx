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
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name (Lucide)',
      type: 'string',
      description: 'The name of the Lucide Icon component',
    }),
  ],
})
