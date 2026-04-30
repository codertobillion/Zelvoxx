import { ReactNode } from "react";

export interface ServiceType {
  title: string;
  desc?: string; // local fallback shape
  description?: string; // sanity shape
  icon: string | ReactNode;
}

export interface ProjectType {
  client?: string; // local fallback shape
  clientName?: string; // sanity shape
  niche?: string;
  result?: string;
  color?: string; // local fallback shape
  colorGradient?: string; // sanity shape
  image?: any; // Sanity image ref
  slug?: string;
}

export interface CaseStudyType {
  client: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
}

export interface TestimonialType {
  name: string;
  role: string;
  content: string;
}
