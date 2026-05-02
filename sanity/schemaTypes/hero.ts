import { defineField, defineType } from 'sanity'

export default defineType({
  name: "hero",
  type: "document",
  title: "Hero Section",
  fields: [
    defineField({
      name: "title",
      title: "Main Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "highlightedText",
      title: "Highlighted Text (in gradient)",
      type: "string",
      description: "The part of the title that appears in gradient color",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle / Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "badgeText",
      title: "Badge Text",
      type: "string",
      description: "e.g., 'Growth Systems for Ambitious Brands'",
    }),
    defineField({
      name: "ctaText",
      title: "Primary CTA Text",
      type: "string",
      initialValue: "Book a Strategy Call",
    }),
    defineField({
      name: "ctaLink",
      title: "Primary CTA Link",
      type: "string",
      initialValue: "https://calendly.com/zelvox",
    }),
    defineField({
      name: "secondaryCtaText",
      title: "Secondary CTA Text",
      type: "string",
      initialValue: "View Our Work",
    }),
    defineField({
      name: "secondaryCtaLink",
      title: "Secondary CTA Link",
      type: "string",
      initialValue: "/portfolio",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image / Illustration",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "publishedAt",
      title: "Last Updated",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
})