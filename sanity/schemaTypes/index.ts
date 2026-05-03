import { type SchemaTypeDefinition } from 'sanity'
import { servicesType } from './services'
import { portfolioType } from './portfolio'
import { caseStudyType } from './caseStudies'
import { testimonialType } from './testimonials'
import { pricingType } from './pricing'
import { whyZelvoxxType } from './whyZelvoxx'
import { teamMemberType } from './teamMember'
import { contactSubmissionType } from './contactSubmission'
import hero from "./hero";
import stats from "./stats";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [servicesType, portfolioType, caseStudyType, testimonialType, pricingType, whyZelvoxxType, teamMemberType, contactSubmissionType, hero, stats],
}
