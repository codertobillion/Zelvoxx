import { 
  Building2, 
  MonitorSmartphone, 
  Code2, 
  Filter, 
  Megaphone, 
  Search, 
  Bot 
} from "lucide-react";
import { ServiceType, ProjectType, CaseStudyType, TestimonialType } from "@/src/types";

export const CALENDLY_URL = "https://calendly.com/";

export const services: ServiceType[] = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Brand Positioning",
    desc: "We don't just design logos. We architect premium brand identities that command authority and trust.",
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8" />,
    title: "High-Converting Web Design",
    desc: "Aesthetic interfaces engineered specifically to convert cold traffic into high-paying clients.",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Full-Stack Web Development",
    desc: "Robust, scalable, and lightning-fast web applications built on modern technologies.",
  },
  {
    icon: <Filter className="w-8 h-8" />,
    title: "Funnel Architecture",
    desc: "Strategic sales funnels designed to seamlessly guide users from awareness to purchase.",
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Meta & Google Ads",
    desc: "Data-driven advertising campaigns that systematically acquire customers at profit.",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO & Content Systems",
    desc: "Dominate search engines with SEO systems that generate predictable organic revenue.",
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Sales Automation & CRM",
    desc: "Automate your follow-ups, lead nurturing, and closing sequences to infinite scale.",
  },
];

export const projects: ProjectType[] = [
  {
    client: "Apex Financial",
    niche: "FinTech App",
    result: "+340% Lead Volume",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    client: "Luminary MedSpa",
    niche: "Local Business",
    result: "$100k Monthly Added Revenue",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    client: "Velocity SaaS",
    niche: "B2B Software",
    result: "4.2x ROI on Ads",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    client: "Strata Real Estate",
    niche: "Luxury Agency",
    result: "$12M in closed volume",
    color: "from-amber-500/20 to-orange-500/20",
  },
];

export const caseStudies: CaseStudyType[] = [
  {
    client: "E-commerce Brand",
    industry: "DTC Apparel",
    problem: "Burning $10k/mo on ads with a 0.8x ROAS and a clunky outdated theme hurting conversions.",
    solution: "Complete custom headless build + A/B testing framework + structured Google Shopping & Meta funnels.",
    result: "$120k/mo added revenue. ROAS skyrocketed to 3.4x within 45 days. Conversion rate doubled.",
  },
  {
    client: "B2B SaaS Startup",
    industry: "B2B Software",
    problem: "Stuck at $30k MRR. Leads were unqualified, and the sales cycle was over 4 months long.",
    solution: "Rebuilt the entire front-end brand positioning. Implemented automated VSL funnels and CRM cadences.",
    result: "Secured $2M Series A funding. Scaled to $110k MRR in 6 months using the automated systems.",
  }
];

export const testimonials: TestimonialType[] = [
  {
    name: "Sarah J.",
    role: "Founder, E-commerce Brand",
    content: "The clarity in their system is what stood out. They didn't just build us a website. They handed us a machine that prints money. Our conversion rate literally doubled in 45 days.",
  },
  {
    name: "Marcus T.",
    role: "Startup Founder",
    content: "The level of engineering and psychology that went into our funnels is insane. We closed our Series A off the back of the growth system they built. It permanently solves lead generation.",
  },
  {
    name: "David C.",
    role: "Local Business Owner",
    content: "If you want a pretty site, go somewhere else. If you want a scalable infrastructure that predictably generates revenue and scales on autopilot, hire Zelvoxx.",
  }
];

export const socialLinks = [
  { platform: "Instagram", url: "https://instagram.com/Zelvoxx" },
  { platform: "Twitter", url: "https://twitter.com/Zelvoxx" },
  { platform: "LinkedIn", url: "https://linkedin.com/company/Zelvoxx" },
];

export const legalLinks = [
  { label: "Privacy Policy", url: "/privacy" },
  { label: "Terms of Service", url: "/terms" },
];

export const footerNavLinks = [
  { label: "Our Work", url: "/portfolio" },
  { label: "Case Studies", url: "/case-studies" },
  { label: "Why Zelvoxx", url: "/why-Zelvoxx" },
  { label: "Our Team", url: "/team" },
  { label: "Pricing", url: "/pricing" },
  { label: "Reviews", url: "/testimonials" },
];
