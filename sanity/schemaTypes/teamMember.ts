import { defineType, defineField } from 'sanity'

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name of the team member',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Title',
      type: 'string',
      description: 'e.g., Founder, Developer, Marketing Lead',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Professional headshot or portrait',
    }),
    defineField({
      name: 'isFounder',
      title: 'Is Founder',
      type: 'boolean',
      description: 'Check if this is a founder (displayed prominently)',
      initialValue: false,
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      rows: 2,
      description: 'One-line description or tagline (optional)',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first. Founders always appear first regardless.',
      initialValue: 0,
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'twitter', title: 'Twitter/X URL', type: 'url' },
        { name: 'github', title: 'GitHub URL', type: 'url' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
      isFounder: 'isFounder',
    },
    prepare({ title, subtitle, media, isFounder }) {
      return {
        title: title || 'Unnamed',
        subtitle: `${isFounder ? '⭐ ' : ''}${subtitle || 'Team Member'}`,
        media,
      }
    },
  },
})
