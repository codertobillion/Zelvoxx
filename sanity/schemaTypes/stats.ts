import { defineField, defineType } from 'sanity'

export default defineType({
  name: "stats",
  type: "document",
  title: "Stats Section",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      description: "e.g., 'Proven Results for Ambitious Brands'",
    }),
    defineField({
      name: "subtitle",
      title: "Section Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "label", title: "Label", type: "string" },
        { name: "value", title: "Value", type: "string" },
        { name: "prefix", title: "Prefix (e.g., '$', '+')", type: "string" },
        { name: "suffix", title: "Suffix (e.g., '%', 'x')", type: "string" },
        { name: "description", title: "Description", type: "text", rows: 2 },
      ]}],
    }),
    defineField({
      name: "publishedAt",
      title: "Last Updated",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
})