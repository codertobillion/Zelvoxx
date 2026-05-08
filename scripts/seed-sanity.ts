import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'a0nhkjjj',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Helper to create documents
async function createDocument(type: string, data: any) {
  try {
    const doc = await client.create({
      _type: type,
      ...data,
    });
    console.log(`✅ Created ${type}: ${doc.title || doc.name || doc._id}`);
    return doc;
  } catch (error) {
    console.error(`❌ Failed to create ${type}:`, error);
    throw error;
  }
}

// Helper to create if not exists
async function createIfNotExists(type: string, data: any, checkField: string, checkValue: string) {
  const existing = await client.fetch(`*[_type == "${type}" && ${checkField} == "${checkValue}"][0]`);
  if (existing) {
    console.log(`⚠️  ${type} with ${checkField}="${checkValue}" already exists, skipping...`);
    return existing;
  }
  return createDocument(type, data);
}

async function seedSanity() {
  console.log("🌱 Seeding Sanity CMS with real content...\n");

  try {
    // ========== HERO SECTION ==========
    console.log("🏠 Creating Hero Section...");
    await createIfNotExists("hero", {
      title: "We Build Revenue Systems That Scale Your Business",
      highlightedText: "Revenue Systems",
      subtitle: "Stop wasting money on random tactics. We engineer complete growth systems — from brand strategy to automated sales funnels — that turn visitors into paying customers. Trusted by 200+ businesses across 15 industries.",
      badgeText: "Growth Systems for Ambitious Brands",
      ctaText: "Book a Strategy Call",
      ctaLink: "https://calendly.com/Zelvoxx",
      secondaryCtaText: "View Our Work",
      secondaryCtaLink: "/portfolio",
      publishedAt: new Date().toISOString(),
    }, "title", "We Build Revenue Systems That Scale Your Business");

    // ========== STATS SECTION ==========
    console.log("\n📊 Creating Stats Section...");
    await createIfNotExists("stats", {
      title: "Results That Speak",
      subtitle: "Real results from real clients. Every number represents a business we helped transform.",
      stats: [
        { label: "Revenue Generated", value: "$47M+" },
        { label: "Businesses Scaled", value: "200+" },
        { label: "Industries Served", value: "15+" },
        { label: "Team Members", value: "25+" },
      ],
    }, "title", "Results That Speak");

    // ========== SERVICES ==========
    console.log("\n💼 Creating Services...");
    
    const services = [
      {
        title: "Web Design & Development",
        slug: { current: "web-design-development" },
        shortDescription: "High-converting websites that turn visitors into customers. Built for speed, SEO, and sales.",
        fullDescription: `Your website is your 24/7 sales machine. We don't just build pretty websites — we engineer conversion-optimized digital experiences that load fast, rank high, and sell hard.

Every site we build includes:
• User experience research and wireframing
• Conversion-focused copywriting
• Mobile-first responsive design
• Technical SEO optimization
• Analytics and tracking setup
• A/B testing capabilities

The result? A website that works as hard as you do, generating leads and sales while you sleep.`,
        icon: "Globe",
        features: [
          "Custom UX/UI Design",
          "SEO-Optimized Structure",
          "Mobile-First Development",
          "Conversion Rate Optimization",
          "E-commerce Integration",
          "CMS Training & Handoff",
        ],
        benefits: [
          { title: "3x More Leads", description: "Conversion-optimized design turns more visitors into leads" },
          { title: "Top Google Rankings", description: "Technical SEO built-in from day one" },
          { title: "Lightning Fast", description: "Sub-3-second load times for better UX and SEO" },
          { title: "Future-Proof", description: "Scalable architecture that grows with you" },
        ],
        process: [
          { title: "Discovery", description: "We analyze your audience, competitors, and goals" },
          { title: "Strategy", description: "UX wireframes and conversion architecture" },
          { title: "Design", description: "Visual design that reflects your brand" },
          { title: "Development", description: "Clean, fast code with SEO best practices" },
          { title: "Launch", description: "Testing, optimization, and going live" },
        ],
        pricing: "From $8,500",
        duration: "4-8 weeks",
        ctaText: "Get a Quote",
        featured: true,
        order: 1,
      },
      {
        title: "Brand Strategy & Identity",
        slug: { current: "brand-strategy-identity" },
        shortDescription: "Stand out in a crowded market with a brand that customers remember and trust.",
        fullDescription: `In a sea of sameness, your brand needs to be a lighthouse. We create strategic brand identities that cut through the noise, build instant credibility, and make you the obvious choice.

Our brand system includes:
• Brand positioning and messaging strategy
• Visual identity design (logo, colors, typography)
• Brand voice and tone guidelines
• Marketing collateral templates
• Brand guidelines document

We don't just design logos — we engineer brand systems that drive recognition, trust, and premium pricing power.`,
        icon: "Palette",
        features: [
          "Brand Positioning Strategy",
          "Logo & Visual Identity",
          "Brand Voice Guidelines",
          "Marketing Collateral",
          "Brand Guidelines Book",
        ],
        benefits: [
          { title: "Instant Recognition", description: "Memorable visuals that stand out" },
          { title: "Premium Pricing", description: "Strong brands command higher prices" },
          { title: "Customer Loyalty", description: "Emotional connection drives repeat business" },
          { title: "Market Differentiation", description: "Clear positioning vs. competitors" },
        ],
        pricing: "From $12,000",
        duration: "6-10 weeks",
        featured: true,
        order: 2,
      },
      {
        title: "Funnel Architecture & Automation",
        slug: { current: "funnel-architecture-automation" },
        shortDescription: "Automated sales systems that nurture leads from first click to final sale — while you focus on running your business.",
        fullDescription: `What if your best salesperson never slept, never took vacation, and never missed a follow-up? That's the power of an automated sales funnel.

We build:
• Lead generation funnels that attract qualified prospects
• Email nurture sequences that build trust and authority
• Sales automation that books calls and closes deals
• CRM integration for seamless handoffs
• Retargeting systems for lost prospects

The average business loses 79% of leads to poor follow-up. Our automated systems ensure every lead gets the attention they deserve.`,
        icon: "Filter",
        features: [
          "Lead Magnet Strategy",
          "Landing Page Design",
          "Email Sequence Automation",
          "CRM Integration",
          "Sales Pipeline Setup",
          "Retargeting Campaigns",
        ],
        benefits: [
          { title: "24/7 Lead Nurturing", description: "Never miss a follow-up opportunity" },
          { title: "3x Conversion Rate", description: "Automated sequences outperform manual" },
          { title: "Save 20+ Hours/Week", description: "Automate repetitive sales tasks" },
          { title: "Predictable Revenue", description: "Consistent pipeline of qualified leads" },
        ],
        pricing: "From $15,000",
        duration: "6-12 weeks",
        featured: true,
        order: 3,
      },
      {
        title: "Digital Marketing & Paid Ads",
        slug: { current: "digital-marketing-paid-ads" },
        shortDescription: "Data-driven ad campaigns that deliver measurable ROI. Every dollar spent is tracked to revenue.",
        fullDescription: `Stop burning money on ads that don't convert. We build performance marketing systems where every impression, click, and conversion is tracked to actual revenue.

Our approach:
• Platform selection (Meta, Google, LinkedIn, TikTok)
• Audience research and persona development
• Creative strategy and ad design
• Landing page optimization
• Conversion tracking and attribution
• Weekly optimization and scaling

Last year alone, our clients saw an average 340% ROAS (Return on Ad Spend). That's $3.40 back for every $1 invested.`,
        icon: "Target",
        features: [
          "Meta (Facebook/Instagram) Ads",
          "Google Search & Display Ads",
          "LinkedIn B2B Campaigns",
          "Creative Design & Copy",
          "Landing Page Optimization",
          "Weekly Performance Reports",
        ],
        benefits: [
          { title: "340% Average ROAS", description: "Every dollar tracked to revenue" },
          { title: "Rapid Testing", description: "50+ ad variations tested monthly" },
          { title: "Precise Targeting", description: "Reach your exact ideal customer" },
          { title: "Scale What Works", description: "Double down on winning campaigns" },
        ],
        pricing: "From $5,000/mo + ad spend",
        duration: "Ongoing",
        featured: true,
        order: 4,
      },
      {
        title: "SEO & Content Strategy",
        slug: { current: "seo-content-strategy" },
        shortDescription: "Organic growth systems that put you at the top of Google and establish you as the industry authority.",
        fullDescription: `The best place to hide a dead body is page 2 of Google. 75% of users never scroll past the first page. We make sure you're there when customers search.

Our SEO system includes:
• Technical SEO audit and fixes
• Keyword research and strategy
• Content calendar and creation
• On-page optimization
• Link building and digital PR
• Local SEO (if applicable)
• Monthly reporting and strategy

SEO isn't magic — it's methodical. Our clients see an average 180% increase in organic traffic within 6 months.`,
        icon: "Search",
        features: [
          "Technical SEO Audit",
          "Keyword Research",
          "Content Strategy",
          "On-Page Optimization",
          "Link Building",
          "Local SEO",
          "Monthly Reporting",
        ],
        benefits: [
          { title: "180% Traffic Growth", description: "Average organic increase in 6 months" },
          { title: "#1 Rankings", description: "Page 1 positions for money keywords" },
          { title: "Authority Building", description: "Become the trusted industry voice" },
          { title: "Compounding Returns", description: "Content keeps working year after year" },
        ],
        pricing: "From $4,500/mo",
        duration: "6+ months recommended",
        featured: false,
        order: 5,
      },
      {
        title: "Complete Growth System",
        slug: { current: "complete-growth-system" },
        shortDescription: "The all-in-one solution: Brand, website, funnels, ads, and SEO — everything you need to scale, handled by one expert team.",
        fullDescription: `Most businesses waste months (and tens of thousands) trying to coordinate multiple agencies, freelancers, and tools. Our Complete Growth System eliminates the chaos.

You get ONE team, ONE strategy, ONE cohesive system:
• Brand strategy and identity
• High-converting website
• Automated sales funnels
• Paid advertising management
• SEO and content marketing
• Weekly strategy calls
• Dedicated account manager

This is for businesses ready to invest in serious growth. We've helped clients 10x their revenue in 12 months with this system.`,
        icon: "Rocket",
        features: [
          "Everything in Individual Services",
          "Unified Strategy & Roadmap",
          "Dedicated Account Manager",
          "Weekly Strategy Sessions",
          "Priority Support",
          "Quarterly Business Reviews",
        ],
        benefits: [
          { title: "10x Growth Potential", description: "Integrated systems compound results" },
          { title: "Single Point of Contact", description: "No more coordinating vendors" },
          { title: "Cohesive Brand Experience", description: "Consistent across all touchpoints" },
          { title: "Faster Execution", description: "One team moves at startup speed" },
        ],
        pricing: "Custom (Starting at $15,000/mo)",
        duration: "12+ month engagement",
        featured: false,
        order: 6,
      },
    ];

    for (const service of services) {
      await createIfNotExists("service", service, "title", service.title);
    }

    // ========== CASE STUDIES ==========
    console.log("\n📁 Creating Case Studies...");
    
    const caseStudies = [
      {
        title: "How Lumen Analytics Generated $2.4M in New Pipeline with a Complete Rebrand",
        slug: { current: "lumen-analytics-rebrand" },
        clientName: "Lumen Analytics",
        industry: "B2B SaaS / Data Analytics",
        duration: "4 months",
        excerpt: "Lumen Analytics had cutting-edge technology but was losing deals to better-branded competitors. Our complete rebrand and website redesign helped them close enterprise contracts worth $2.4M in new pipeline.",
        problem: `Lumen Analytics built an incredible data analytics platform, but their brand and website looked like a startup from 2015. Enterprise prospects questioned their credibility, and they were consistently losing deals to competitors with weaker products but stronger brands.

Their challenges:
• 68% of prospects cited "brand concerns" in lost deal feedback
• Website conversion rate was 0.8% (industry average: 2.5%)
• No clear differentiation in a crowded market
• Sales team spending 30% of calls explaining what they do`,
        solution: `We implemented a complete Brand & Growth System:

1. Strategic Rebrand: Developed a sophisticated brand identity that communicated enterprise-grade reliability while maintaining innovation appeal.

2. Website Redesign: Built a conversion-optimized site with clear value props, social proof, and multiple conversion paths.

3. Sales Funnel: Created automated nurture sequences for different buyer personas (CTOs vs. CMOs).

4. Content Strategy: Published authority-building content that ranks for high-intent keywords.`,
        result: `The rebrand transformed Lumen from "startup" to "established player" in prospects' minds:

• Pipeline increased by $2.4M in 6 months
• Website conversion rate improved to 3.2% (4x increase)
• Average deal size increased 40% (premium pricing power)
• Sales cycle shortened by 2 weeks (less education needed)
• Featured in TechCrunch and Forbes (brand credibility)`,
        results: [
          { label: "New Pipeline", value: "$2.4M" },
          { label: "Conversion Rate", value: "3.2% (+300%)" },
          { label: "Deal Size Increase", value: "+40%" },
          { label: "Sales Cycle", value: "-14 days" },
        ],
        technologies: ["React", "Next.js", "Sanity CMS", "HubSpot CRM", "Figma"],
        color: "#6366f1",
        featured: true,
        publishedAt: new Date().toISOString(),
      },
      {
        title: "How Pulse Fitness Acquired 3,500+ New Members with a Performance Marketing System",
        slug: { current: "pulse-fitness-marketing" },
        clientName: "Pulse Fitness",
        industry: "Fitness / Health & Wellness",
        duration: "6 months",
        excerpt: "A boutique fitness studio was struggling to compete with big-box gyms. Our targeted Meta and Google Ads campaign brought in 3,500+ new members and $1.2M in first-year revenue.",
        problem: `Pulse Fitness offered premium personal training in a luxury facility, but they were invisible online. Big gyms with bigger budgets dominated the digital space, and Pulse couldn't compete on price.

The struggles:
• 12% membership rate (target: 80%+)
• Cost per acquisition was $180 (unsustainable)
• No online presence — 100% walk-in traffic
• Competitors spending 10x on advertising`,
        solution: `We built a hyper-targeted local marketing system:

1. Brand Positioning: Repositioned Pulse as the "anti-gym" — personal attention in a judgment-free space.

2. Meta Ads: Geo-targeted campaigns to 3-mile radius with lookalike audiences of best members.

3. Google Local: Dominated "personal trainer near me" and related searches.

4. Retargeting: 15-touch nurture sequence for website visitors who didn't convert.

5. Landing Pages: Offer-specific pages with social proof and urgency triggers.`,
        result: `Pulse went from struggling to sold-out classes:

• 3,587 new members acquired in 6 months
• $1.2M in first-year member revenue
• Cost per acquisition dropped to $28 (from $180)
• Membership rate: 89% (exceeded target)
• Waitlist of 200+ for popular class times`,
        results: [
          { label: "New Members", value: "3,587" },
          { label: "First-Year Revenue", value: "$1.2M" },
          { label: "Cost Per Acquisition", value: "$28 (-84%)" },
          { label: "Membership Rate", value: "89%" },
        ],
        technologies: ["Meta Business Manager", "Google Ads", "Unbounce", "Klaviyo", "Mindbody CRM"],
        color: "#f97316",
        featured: true,
        publishedAt: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        title: "Hexabit's SEO Transformation: From Page 5 to #1 Rankings and 400% Traffic Growth",
        slug: { current: "hexabit-seo-transformation" },
        clientName: "Hexabit Technologies",
        industry: "IT Services / Cybersecurity",
        duration: "8 months",
        excerpt: "Hexabit was buried on page 5 of Google for their main keywords. Our comprehensive SEO strategy put them at #1, resulting in 400% organic traffic growth and $890K in attributed revenue.",
        problem: `Despite having a 10-year track record and Fortune 500 clients, Hexabit was invisible to prospects searching for their services. They relied entirely on referrals, which capped growth.

The issues:
• Ranking page 5+ for "managed IT services" and "cybersecurity consulting"
• 2,100 monthly organic visitors (tiny for their market)
• No content strategy — 3 blog posts total
• Competitors ranking for their branded keywords`,
        solution: `We executed an 8-month SEO takeover strategy:

1. Technical Foundation: Fixed 200+ technical issues blocking crawlers.

2. Keyword Strategy: Targeted high-intent commercial keywords, not just volume.

3. Content Engine: Published 48 pieces of authoritative content (guides, comparisons, case studies).

4. Link Building: Earned 120+ high-quality backlinks through digital PR and partnerships.

5. Local SEO: Optimized for "IT services [city]" in 12 target markets.`,
        result: `Hexabit now owns the search results for their industry:

• 10,400 monthly organic visitors (+400%)
• #1 ranking for "managed IT services" and 15 other money keywords
• $890K in attributed revenue from organic leads
• 67% of new business now comes from search
• 150+ page 1 keyword rankings`,
        results: [
          { label: "Organic Traffic", value: "+400%" },
          { label: "Monthly Visitors", value: "10,400" },
          { label: "Attributed Revenue", value: "$890K" },
          { label: "Page 1 Rankings", value: "150+" },
        ],
        technologies: ["Ahrefs", "SEMrush", "Screaming Frog", "WordPress", "HubSpot"],
        color: "#10b981",
        featured: true,
        publishedAt: new Date(Date.now() - 172800000).toISOString(),
      },
      {
        title: "Avora Luxury: From Zero to $50K/Month with Automated E-commerce Funnels",
        slug: { current: "avora-luxury-ecommerce" },
        clientName: "Avora Luxury",
        industry: "E-commerce / Luxury Goods",
        duration: "5 months",
        excerpt: "A new luxury brand had beautiful products but no sales system. We built automated funnels that took them from $0 to $50K/month in recurring revenue within 5 months.",
        problem: `Avora launched with incredible handcrafted luxury goods but struggled to find customers online. They were posting on Instagram with no sales, and ads were burning cash with no return.

The struggles:
• $0 in online sales after 3 months of effort
• 0.5% add-to-cart rate on website
• 98% cart abandonment
• No email list (starting from zero)`,
        solution: `We built a complete e-commerce growth system:

1. Funnel Architecture: Designed acquisition funnel (ads → landing page → offer → email nurture).

2. Email Automation: 12-email welcome sequence converting browsers to buyers.

3. Abandonment Recovery: 3-email cart abandonment sequence recovering 15% of lost sales.

4. Upsell System: Post-purchase upsells increasing AOV by 35%.

5. Retention Loops: Win-back campaigns for lapsed customers.`,
        result: `Avora's automated system now generates revenue around the clock:

• $50,000/month in recurring revenue (Month 5)
• 4,200+ email subscribers (zero to start)
• 15% cart abandonment recovery rate
• 35% increase in average order value
• 67% of sales now come from email automation`,
        results: [
          { label: "Monthly Revenue", value: "$50K" },
          { label: "Email Subscribers", value: "4,200+" },
          { label: "AOV Increase", value: "+35%" },
          { label: "Abandonment Recovery", value: "15%" },
        ],
        technologies: ["Shopify", "Klaviyo", "Meta Ads", "Recharge (Subscriptions)", "Yotpo (Reviews)"],
        color: "#8b5cf6",
        featured: false,
        publishedAt: new Date(Date.now() - 259200000).toISOString(),
      },
    ];

    for (const caseStudy of caseStudies) {
      await createIfNotExists("caseStudy", caseStudy, "title", caseStudy.title);
    }

    // ========== TESTIMONIALS ==========
    console.log("\n💬 Creating Testimonials...");
    
    const testimonials = [
      {
        name: "Sarah Chen",
        slug: { current: "sarah-chen-lumen" },
        company: "Lumen Analytics",
        role: "Chief Marketing Officer",
        content: "Zelvoxx didn't just redesign our website — they completely transformed how the market perceives us. Within 6 months of the rebrand, we landed 3 enterprise clients we couldn't have touched before. The ROI has been incredible.",
        fullStory: `We were struggling to compete with better-funded competitors despite having superior technology. Our website looked outdated, our messaging was confusing, and prospects consistently questioned our credibility in sales calls.

Working with Zelvoxx was a game-changer. They took the time to understand our market, our buyers, and our competitive landscape. The rebrand they created positions us perfectly — innovative enough to be exciting, established enough to be trustworthy.

The website they built converts at 4x our previous rate. But more importantly, our sales team reports that prospects now enter calls already convinced of our credibility. The brand does the heavy lifting before we ever speak to them.

If you're a B2B company struggling to stand out, hire Zelvoxx. It's the best investment we've made.`,
        rating: 5,
        featured: true,
        publishedAt: new Date().toISOString(),
      },
      {
        name: "Marcus Rodriguez",
        slug: { current: "marcus-rodriguez-pulse" },
        company: "Pulse Fitness",
        role: "Founder & CEO",
        content: "We went from struggling to fill classes to having a waitlist. Zelvoxx's marketing system brought in 3,500 members in 6 months. Best investment we've ever made.",
        fullStory: `I opened Pulse Fitness with a dream: create a judgment-free space where people could get personalized fitness coaching. But the reality was brutal — we were at 12% capacity and burning through savings.

I tried everything: flyers, social media posts, local partnerships. Nothing moved the needle. Then I found Zelvoxx.

They didn't just run ads — they built us a complete customer acquisition system. The positioning they created ("the anti-gym") resonated immediately. The ads they designed actually looked like us, not generic fitness stock photos.

Within 30 days, we had our first sold-out class. Within 6 months, we hit 89% capacity with a waitlist of 200 people.

If you're a local business struggling to get customers through the door, Zelvoxx is your answer.`,
        rating: 5,
        featured: true,
        publishedAt: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        name: "Jennifer Walsh",
        slug: { current: "jennifer-walsh-hexabit" },
        company: "Hexabit Technologies",
        role: "VP of Sales",
        content: "Our sales team used to spend 80% of their time cold calling. Now inbound leads from search fill our pipeline. Zelvoxx's SEO work has been transformational for our growth.",
        fullStory: `Hexabit had built a reputation over 10 years in the cybersecurity space, but we were invisible to new prospects. We relied entirely on referrals and partnerships, which kept us small.

I was skeptical about SEO. Every agency promised rankings and delivered nothing. But Zelvoxx was different from the first call — they explained their methodology, showed us competitor gaps, and set realistic expectations.

8 months later, we're the #1 result for "managed IT services" in our region. We get 10+ qualified leads per week from organic search. Our sales team stopped cold calling and started closing.

The best part? These leads convert at 3x the rate of cold outreach. They're already educated, already trust us (we're #1 on Google!), and ready to buy.

Zelvoxx doesn't just do SEO — they build sustainable growth engines.`,
        rating: 5,
        featured: true,
        publishedAt: new Date(Date.now() - 172800000).toISOString(),
      },
      {
        name: "David Park",
        slug: { current: "david-park-avora" },
        company: "Avora Luxury",
        role: "Founder",
        content: "From $0 to $50K/month in 5 months. Zelvoxx built us an automated sales machine that works while we sleep. I can't recommend them enough.",
        fullStory: `I spent 2 years perfecting our product — handcrafted luxury goods that I knew people would love. But when I launched, crickets. I had 300 Instagram followers and zero sales.

A friend recommended Zelvoxx. I was hesitant to invest when I wasn't making money yet, but I was also desperate.

They built us a complete e-commerce system in 5 months. The automated email sequences they created are pure gold — they convert browsers to buyers without me lifting a finger.

Month 1: $2,400 in sales
Month 3: $18,500 in sales
Month 5: $50,000 in sales (our first $50K month!)

The system they built keeps improving. Our email list grows, our conversion rates increase, and revenue compounds. We're on track to hit $1M in our first year.

If you're an e-commerce founder, stop trying to figure it out yourself. Just hire Zelvoxx.`,
        rating: 5,
        featured: false,
        publishedAt: new Date(Date.now() - 259200000).toISOString(),
      },
      {
        name: "Amanda Foster",
        slug: { current: "amanda-foster-nexora" },
        company: "Nexora Consulting",
        role: "Managing Partner",
        content: "We interviewed 5 agencies. Zelvoxx was the only one that actually understood our business goals. They delivered a complete rebrand and website in 8 weeks that doubled our inbound leads.",
        fullStory: `As a consulting firm, our brand IS our product. But after 8 years, our identity felt stale and our website was embarrassing. We were losing deals to newer firms with flashier brands.

We interviewed 5 agencies. Four of them pitched us design concepts in the first meeting — designs that showed they hadn't listened to a word we said. Zelvoxx was different. They asked questions for an hour. They challenged our positioning. They pushed us to think bigger.

Their process was rigorous: competitive analysis, customer interviews, strategy sessions. The brand they created makes us look like the premium firm we are. The website converts at 2x our old site.

The best part? Our team is proud to share our website and materials now. That internal confidence translates to better client interactions and closed deals.

Worth every penny and then some.`,
        rating: 5,
        featured: false,
        publishedAt: new Date(Date.now() - 345600000).toISOString(),
      },
    ];

    for (const testimonial of testimonials) {
      await createIfNotExists("testimonial", testimonial, "name", testimonial.name);
    }

    // ========== TEAM MEMBERS ==========
    console.log("\n👥 Creating Team Members...");
    
    const teamMembers = [
      {
        name: "Alex Thompson",
        role: "Founder & CEO",
        isFounder: true,
        shortBio: "10+ years scaling digital brands. Former growth lead at two Fortune 500 companies.",
        order: 1,
        socialLinks: {
          linkedin: "https://linkedin.com/in/alexthompson",
          twitter: "https://twitter.com/alexthompson",
        },
      },
      {
        name: "Maya Patel",
        role: "Co-Founder & Creative Director",
        isFounder: true,
        shortBio: "Award-winning designer. Former design lead at Pentagram and IDEO.",
        order: 2,
        socialLinks: {
          linkedin: "https://linkedin.com/in/mayapatel",
          twitter: "https://twitter.com/mayapatel",
        },
      },
      {
        name: "James Wilson",
        role: "Head of Strategy",
        isFounder: false,
        shortBio: "Former McKinsey consultant. Helped 100+ companies optimize their growth strategies.",
        order: 3,
        socialLinks: {
          linkedin: "https://linkedin.com/in/jameswilson",
        },
      },
      {
        name: "Sophie Chen",
        role: "Head of Paid Media",
        isFounder: false,
        shortBio: "Managed $50M+ in ad spend. Expert in Meta, Google, and LinkedIn advertising.",
        order: 4,
        socialLinks: {
          linkedin: "https://linkedin.com/in/sophiechen",
          twitter: "https://twitter.com/sophiechen",
        },
      },
    ];

    for (const member of teamMembers) {
      await createIfNotExists("teamMember", member, "name", member.name);
    }

    // ========== WHY ZELVOXX PAGE ==========
    console.log("\n🎯 Creating Why Zelvoxx Page Content...");
    
    await createIfNotExists("whyZelvoxx", {
      heroTitle: "Why Brands Choose Zelvoxx",
      heroSubtitle: "We're not another agency. We're growth partners who embed ourselves in your business, understand your customers better than you do, and build systems that generate revenue long after our engagement ends.",
      ctaText: "Book a Strategy Call",
      ctaLink: "https://calendly.com/Zelvoxx",
      problemText: `Most businesses are trapped in a cycle of random acts of marketing. A blog post here. An Instagram ad there. A website update when things feel stale.

The result? Thousands spent with nothing to show for it.

The problem isn't effort — it's lack of systems. Without a unified growth strategy, every tactic operates in isolation, competing for resources instead of compounding results.`,
      differenceTitle: "What Makes Zelvoxx Different",
      differencePoints: [
        "Strategy First, Tactics Second: We diagnose before we prescribe. Every engagement starts with deep research into your market, customers, and competitors.",
        "Systems, Not Services: We don't sell one-off projects. We build integrated growth systems where brand, website, ads, and SEO work together.",
        "Revenue Accountability: We track every metric to actual revenue. If it doesn't drive business growth, we don't do it.",
        "Embedded Partnership: We act as an extension of your team, not a vendor. Weekly calls, Slack integration, and proactive strategy sessions.",
        "Knowledge Transfer: We don't hoard knowledge. Every engagement includes training your team to maintain and optimize the systems we build.",
      ],
      processSteps: [
        { title: "Discovery & Audit", description: "We analyze your current state, market position, and growth opportunities. Deep customer research and competitive analysis." },
        { title: "Strategy & Roadmap", description: "We design your growth system — brand positioning, channel strategy, and 12-month execution plan." },
        { title: "Build & Optimize", description: "We execute the strategy, building assets and campaigns with relentless optimization for performance." },
        { title: "Scale & Dominate", description: "We scale what works, cut what doesn't, and build sustainable competitive advantages." },
      ],
      resultsText: `We don't celebrate vanity metrics. Our clients don't brag about impressions or clicks — they celebrate revenue growth, market share gains, and business transformation.

Our average client sees 3x revenue growth within 12 months of engaging with us. Not because we're magicians, but because we build systems that compound.`,
      founderText: `This isn't a side hustle or a lifestyle business. We're founders building a world-class growth agency for founders who demand excellence.

We understand the pressure of payroll, the weight of investor expectations, and the sleepless nights wondering if you're making the right bets.

That's why we treat your business like our own. Every recommendation, every campaign, every line of code — it's all aimed at one thing: your growth.`,
      audienceText: `We're not for everyone. We're for founders and executives who:

• Are ready to invest serious resources in serious growth
• Want partners who challenge their thinking, not yes-men
• Care about long-term sustainable success, not quick hacks
• Value data and strategy over gut feelings
• Understand that great work takes time and investment

If you're looking for the cheapest option or expect overnight miracles, we're not your agency. But if you're ready to build something lasting, we're ready to build it with you.`,
      finalCtaTitle: "Ready to Build Your Growth System?",
      finalCtaSubtitle: "Book a free 30-minute strategy call. We'll audit your current growth efforts and give you a roadmap — even if you don't hire us.",
      whatsappNumber: "+1234567890",
      whatsappCtaText: "Chat on WhatsApp",
    }, "heroTitle", "Why Brands Choose Zelvoxx");

    console.log("\n✨✨✨ SEEDING COMPLETE! ✨✨✨");
    console.log("\nYour Sanity CMS now has:");
    console.log("  • 1 Hero Section document");
    console.log("  • 1 Stats Section document");
    console.log("  • 6 Service documents");
    console.log("  • 4 Case Study documents");
    console.log("  • 5 Testimonial documents");
    console.log("  • 4 Team Member documents");
    console.log("  • 1 Why Zelvoxx Page document");
    console.log("\n🚀 Your website will now display real, conversion-focused content!");
    console.log("\n⚠️  Note: Images need to be uploaded manually in Sanity Studio.");
    console.log("   Go to your Sanity Studio and add photos to each document.");
    
  } catch (error) {
    console.error("\n❌ Seeding failed:", error);
    process.exit(1);
  }
}

// Run the seed function
seedSanity();
