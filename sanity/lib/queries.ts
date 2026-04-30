import { groq } from "next-sanity";

export const servicesQuery = groq`
  *[_type == "service"]{
    _id,
    title,
    description,
    icon
  }
`;

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

export const testimonialsQuery = groq`
  *[_type == "testimonial"]{
    _id,
    name,
    role,
    company,
    review,
    image
  }
`;

export const heroQuery = groq`
  *[_type == "hero"][0]
`;

export const statsQuery = groq`
  *[_type == "stats"]
`;

export const pricingQuery = groq`
  *[_type == "pricing"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    priceNote,
    popular,
    features,
    ctaText
  }
`;