import { groq } from "next-sanity";

// ==================== HOMEPAGE SECTIONS ====================

// Hero Section
export const heroQuery = groq`
  *[_type == "hero"][0]{
    _id,
    title,
    highlightedText,
    subtitle,
    badgeText,
    ctaText,
    ctaLink,
    secondaryCtaText,
    secondaryCtaLink,
    heroImage
  }
`;

// Stats Section
export const statsQuery = groq`
  *[_type == "stats"][0]{
    _id,
    title,
    subtitle,
    stats
  }
`;

// Services Section
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    icon,
    featured,
    pricing,
    duration
  }
`;

// Portfolio/Projects
export const portfolioQuery = groq`
  *[_type == "portfolio"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    clientName,
    niche,
    result,
    excerpt,
    thumbnail,
    colorGradient,
    featured,
    services
  }
`;

export const featuredPortfolioQuery = groq`
  *[_type == "portfolio" && featured == true] | order(order asc) [0...6] {
    _id,
    title,
    "slug": slug.current,
    clientName,
    niche,
    result,
    excerpt,
    thumbnail,
    colorGradient,
    services
  }
`;

// Case Studies
export const caseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    clientName,
    industry,
    problem,
    solution,
    result,
    excerpt,
    thumbnail,
    color,
    featured,
    publishedAt,
    duration
  }
`;

export const featuredCaseStudiesQuery = groq`
  *[_type == "caseStudy" && featured == true] | order(publishedAt desc) [0...6] {
    _id,
    title,
    "slug": slug.current,
    clientName,
    industry,
    excerpt,
    result,
    thumbnail,
    color,
    duration
  }
`;

// Testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(publishedAt desc) {
    _id,
    name,
    "slug": slug.current,
    role,
    company,
    content,
    excerpt,
    image,
    rating,
    featured,
    publishedAt,
    "caseStudySlug": caseStudy->slug.current
  }
`;

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(publishedAt desc) [0...6] {
    _id,
    name,
    "slug": slug.current,
    role,
    company,
    content,
    excerpt,
    image,
    rating,
    "caseStudySlug": caseStudy->slug.current
  }
`;

// Pricing
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

// ==================== DYNAMIC PAGE QUERIES ====================

// Get single case study by slug OR _id (fallback)
export const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && (slug.current == $slug || _id == $slug)][0]{
    _id,
    title,
    "slug": slug.current,
    clientName,
    clientLogo,
    industry,
    duration,
    excerpt,
    problem,
    solution,
    result,
    results,
    heroImage,
    thumbnail,
    technologies,
    color,
    publishedAt,
    "testimonial": testimonial->{
      name,
      role,
      company,
      content,
      image,
      rating
    }
  }
`;

// Get single testimonial by slug OR _id
export const testimonialBySlugQuery = groq`
  *[_type == "testimonial" && (slug.current == $slug || _id == $slug)][0]{
    _id,
    name,
    "slug": slug.current,
    role,
    company,
    companyLogo,
    content,
    fullStory,
    image,
    rating,
    publishedAt,
    socialLinks,
    "caseStudy": caseStudy->{
      title,
      "slug": slug.current,
      excerpt,
      result,
      thumbnail
    },
    "relatedTestimonials": *[_type == "testimonial" && slug.current != $slug] | order(publishedAt desc) [0...3]{
      _id,
      name,
      "slug": slug.current,
      role,
      company,
      excerpt,
      image
    }
  }
`;

// Get single service by slug OR _id
export const serviceBySlugQuery = groq`
  *[_type == "service" && (slug.current == $slug || _id == $slug)][0]{
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    fullDescription,
    icon,
    heroImage,
    features,
    benefits,
    process,
    pricing,
    duration,
    ctaText,
    "relatedCaseStudies": relatedCaseStudies[]->{
      _id,
      title,
      "slug": slug.current,
      clientName,
      excerpt,
      result,
      thumbnail
    }
  }
`;

// Get single portfolio project by slug
export const portfolioBySlugQuery = groq`
  *[_type == "portfolio" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    clientName,
    niche,
    result,
    excerpt,
    description,
    thumbnail,
    heroImage,
    gallery,
    services,
    websiteUrl,
    colorGradient,
    publishedAt,
    "caseStudy": caseStudy->{
      title,
      "slug": slug.current,
      excerpt,
      result
    }
  }
`;

// Get all slugs for static generation
export const allCaseStudySlugsQuery = groq`
  *[_type == "caseStudy" && defined(slug.current)][].slug.current
`;

export const allTestimonialSlugsQuery = groq`
  *[_type == "testimonial" && defined(slug.current)][].slug.current
`;

export const allServiceSlugsQuery = groq`
  *[_type == "service" && defined(slug.current)][].slug.current
`;

export const allPortfolioSlugsQuery = groq`
  *[_type == "portfolio" && defined(slug.current)][].slug.current
`;

// Get related content
export const relatedCaseStudiesQuery = groq`
  *[_type == "caseStudy" && slug.current != $slug] | order(publishedAt desc) [0...3]{
    _id,
    title,
    "slug": slug.current,
    clientName,
    industry,
    excerpt,
    thumbnail,
    color
  }
`;

export const relatedServicesQuery = groq`
  *[_type == "service" && slug.current != $slug] | order(order asc) [0...3]{
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    icon
  }
`;