import { groq } from "next-sanity";

export const servicesQuery = groq`*[_type == "service"]`;
export const portfolioQuery = groq`*[_type == "portfolio"]`;
export const caseStudiesQuery = groq`
  *[_type == "caseStudy"]{
    _id,
    title,
    clientName,
    niche,
    industry,
    problem,
    system,
    result,
    image,
    colorGradient,
    "slug": slug.current
  }
`;
export const testimonialsQuery = groq`*[_type == "testimonial"]`;
