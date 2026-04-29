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
    }),
    defineField({
      name: 'role',
      title: 'Client Role/Position',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Testimonial Content',
      type: 'text',
    }),
  ],
})
