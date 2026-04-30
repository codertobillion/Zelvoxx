import { groq } from "next-sanity";

export const servicesQuery = groq`*[_type == "service"]`;
export const portfolioQuery = groq`*[_type == "portfolio"]`;
export const caseStudiesQuery = groq`
  *[_type == "caseStudy"]{
    _id,
    title,
    "clientName": coalesce(clientName, title),
    industry,
    problem,
    system,
    result,
    niche,
    image,
    color,
    colorGradient,
    "slug": slug.current
  }
`;
export const testimonialsQuery = groq`*[_type == "testimonial"]`;
