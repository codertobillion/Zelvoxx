import { type SchemaTypeDefinition } from 'sanity'
import { servicesType } from './services'
import { portfolioType } from './portfolio'
import { caseStudyType } from './caseStudies'
import { testimonialType } from './testimonials'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [servicesType, portfolioType, caseStudyType, testimonialType],
}
