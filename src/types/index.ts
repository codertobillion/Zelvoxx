import { ReactNode } from "react";

export interface ServiceType {
  title: string;
  desc?: string; // local fallback shape
  shortDescription?: string; // sanity shape
  description?: string; // sanity shape
  fullDescription?: string; // detail page
  icon: string | ReactNode;
  slug?: string; // URL slug for detail page
  pricing?: string;
  duration?: string;
  features?: string[];
  benefits?: Array<{ title: string; description: string }>;
  process?: Array<{ step: number; title: string; description: string }>;
  ctaText?: string;
  relatedCaseStudies?: any[];
  heroImage?: any;
}

export interface ProjectType {
  client?: string; // local fallback shape
  clientName?: string; // sanity shape
  niche?: string;
  result?: string;
  color?: string; // local fallback shape
  colorGradient?: string; // sanity shape
  image?: any; // Sanity image ref
  slug?: { current: string };
}

export interface CaseStudyType {
  _id?: string; // sanity document id
  client?: string; // local fallback
  clientName?: string; // sanity data
  title?: string;
  industry?: string;
  problem?: string;
  solution?: string;
  result?: string;
  excerpt?: string;
  slug?: string;
  thumbnail?: any;
  heroImage?: any;
  clientLogo?: any;
  duration?: string;
  technologies?: string[];
  results?: Array<{ label: string; value: string }>;
  testimonial?: any;
  featured?: boolean;
  publishedAt?: string;
}

export interface TestimonialType {
  name: string;
  role: string;
  content: string;
  company?: string;
  excerpt?: string;
  slug?: string;
  image?: any;
  rating?: number;
  featured?: boolean;
  caseStudySlug?: string;
  fullStory?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}
