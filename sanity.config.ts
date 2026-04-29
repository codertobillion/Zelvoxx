import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Zelvox Studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'a0nhkjjj',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [structureTool()],

  schema,
})
