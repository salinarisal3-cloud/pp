export interface CaseStudy {
  id: string;
  title: string;
  category: 'branding' | 'posters' | 'social' | 'campaigns';
  categoryLabel: string;
  year: string;
  role: string;
  tools: string;
  overview: string;
  challenge: string;
  solution: string;
  metrics: string;
  image: string;
  altText: string;
  gallery?: string[];
  deliverables: string[];
  palette: string[];
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
}

export const FEATURED_PROJECT: CaseStudy = {
  id: 'origami',
  title: 'Origami For Good — National Awareness Campaign',
  category: 'campaigns',
  categoryLabel: 'Campaigns & Visual Direction',
  year: '2025',
  role: 'Lead Visual Designer & Strategist',
  tools: 'Canva Pro, Adobe Illustrator, Meta Business Suite',
  overview: 'Comprehensive social media revamp and promotional collateral driving a 240% engagement surge across Kathmandu youth communities, uniting humanitarian purpose with delicate visual aesthetics.',
  challenge: 'Previous volunteer drives suffered from visual clutter and generic templates that failed to resonate with university students in the Kathmandu valley. The message felt diluted and disconnected from the youth culture.',
  solution: 'Established a unified rose-and-cream aesthetic with bespoke vector origami cranes, clear typographic hierarchies, and interactive carousel layouts formatted specifically for mobile attention spans and organic sharing.',
  metrics: '+240% Reach • 45k+ Impressions • 300+ New Volunteers in 30 Days',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAljMCs6Ywngc4JjcelneBQ4m4zuH_wY0xqOyWZrZkJ45eqdyYinFbfseRyvtYkDq4E_gZ2mWZrnvrlhaN7ZbjD5Q22xI8B_VAkOGMluKcdtW_ofXp8SVtQWG14In44MJmtso6orOQyD7RYRzq-z1k15dZXBENAuq7Di0to1v3OQn0Qy2YGLsPDpCCJ0Vn3MdhiTLi_Av8VjOgXQRiLIXBKXCPqC5V86vt9KTdpUYoW6BSOyY5gWVkU',
  altText: 'Editorial spread mockup of the Origami For Good 2025 Nepal Youth awareness campaign showing youth empowerment posters and digital carousels with pink origami cranes.',
  deliverables: [
    'Complete Social Media Kit (18 Carousels & 30 Story Highlights)',
    'Event Stage Backdrops & Venue Signage',
    'Volunteer Onboarding Digital Welcome Guide',
    'Fundraising Campaign Flyer & Tote Bag Merchandise Graphics'
  ],
  palette: ['#8A4B5C', '#F4A6B8', '#FFE8ED', '#350D1C'],
  clientQuote: {
    text: 'Salina transformed our campaign from an ordinary student outreach project into an aesthetically revered youth movement across Kathmandu. Her dedication and eye for editorial harmony are unmatched.',
    author: 'Aayush Shrestha',
    role: 'National Coordinator, Origami For Good Nepal'
  }
};

export const PROJECTS: CaseStudy[] = [
  {
    id: 'lumiere',
    title: 'Lumière Organics Skincare',
    category: 'branding',
    categoryLabel: 'Branding',
    year: '2024',
    role: 'Visual Brand Identity Designer',
    tools: 'Canva Pro, Adobe Illustrator, Figma',
    overview: 'Elegantly packaged botanical cosmetics identity guide crafted for a boutique organic skincare house in Kathmandu.',
    challenge: 'Creating an identity that felt as premium as international apothecary brands while maintaining warm, approachable pricing cues for conscious local customers.',
    solution: 'Blended subtle serif wordmarks with frosted rose-gold tones, tactile textured packaging templates, and a reusable Instagram product launch toolkit.',
    metrics: 'Complete brand guide adopted across 12 SKUs, resulting in immediate distributor interest across regional boutique stores.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC304c4jbLx08QL07-1ZgqTYZOHiA2QFiCr17Zlv1Nm9d94G51lcSTTqXhQaW78zc7D-f4quxg0yd6-Yx-yUcnOqMU1HheK7iQ13oV2lleiNh4dWnS8cCXe7Xu_cXZs1W_q6Uhb-0naJ2yRszZ7y1HjE5T_hf7IQEA8cqVTL5JIml_Jtl0w4mq1RiY5xEDN1Ov6Y43Pt-TyUB_23JcYiVPW-I4xJ-XcUxO_OOuj_2PLyfaveP-mzH2',
    altText: 'Lumière Organics clean skincare packaging with blush glass dropper bottles and botanical ingredients.',
    deliverables: [
      'Primary Wordmark & Secondary Monogram',
      'Glass Dropper Bottle & Jar Packaging Labels (12 SKUs)',
      'Digital Brand Style Guide (32 Pages)',
      'Product Launch Social Grid & Packaging Mockups'
    ],
    palette: ['#E7ACBA', '#8A4B5C', '#FFF0F2', '#524346'],
    clientQuote: {
      text: 'Our packaging now sits comfortably beside premier imported brands in organic lifestyle boutiques. Salina captured the soul of our botanical formulas perfectly.',
      author: 'Pooja Karki',
      role: 'Founder, Lumière Organics'
    }
  },
  {
    id: 'techsummit',
    title: 'Kathmandu Youth Tech ’24',
    category: 'posters',
    categoryLabel: 'Posters & Banners',
    year: '2024',
    role: 'Lead Conference Graphic Designer',
    tools: 'Adobe Illustrator, Canva Pro',
    overview: 'Cyber-minimalist typography for national tech congress gathering over 600 young innovators in Lalitpur.',
    challenge: 'Balancing high-density technical agendas, keynote speaker bios, and 24 sponsor logos without compromising on an uncluttered, cutting-edge conference presence.',
    solution: 'Constructed a bold geometric modular poster grid paired with high-contrast rose-to-wine gradients that held clarity from billboard size down to delegate badge scales.',
    metrics: 'Event sold out 4 days prior to schedule; 100% positive feedback on signage accessibility from attendees.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ5YBqIu373pLob0IQvacIIIactekR091XE1iciFfjYSqV3dAKOvISfVMHOnjnI8_sN9CSj2vCFLF95QLtoy7dVNvz5jEC3_8OcEnf4-7uL4WeyxeGfHDta0ALuhfSk3gb_STJ4hZnuw9Q_lteEZEkCN2vwiXppuFRTNeEozGz-ckut-d3JG3-kjORReJg9Fcuz70ea8oYV52Et4NZv3JVyLfWekOQiy77TiEfH4MeVVVvB6o8-jDj',
    altText: 'Kathmandu Youth Tech Summit 2024 poster design featuring dynamic geometric grid typography on gallery wall.',
    deliverables: [
      'Main A1 Exhibition Poster & Digital Wallpapers',
      'Roll-up Banners (Stage & Registration Desk)',
      'Delegate Badges & Speaker Lanyard Passes',
      'LED Stage Presentation Screen Templates'
    ],
    palette: ['#350D1C', '#8A4B5C', '#FFD9E2', '#FFFFFF'],
    clientQuote: {
      text: 'The visual branding set a high standard for youth tech summits in Nepal. Clean, futuristic yet warm and readable.',
      author: 'Rohan Shahi',
      role: 'Lead Organizer, Youth Tech Nepal'
    }
  },
  {
    id: 'bloom',
    title: 'Bloom Cafe & Roastery',
    category: 'social',
    categoryLabel: 'Social Media Design',
    year: '2024',
    role: 'Social Media Designer & Content Planner',
    tools: 'Canva Pro, Lightroom Mobile',
    overview: 'Cohesive Instagram grid, story carousels & menu system for an independent specialty coffee destination in Jhamsikhel.',
    challenge: 'Inconsistent visual tone and sporadic posting had led to declining engagement and plateaued walk-in visits.',
    solution: 'Curated 18 modular carousel templates, story highlight systems, and a soft warm pink-to-mocha color system celebrating bean origin stories.',
    metrics: '+160% profile visits in 60 days, 3.2x increase in saved posts for menu announcements.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo3XHbqC9TAoXu2JnWPAIcWlGE86s1wOhQ88MU8YmQAKAuhnQlloruGohyI6brRo0UYFi9vK4pjd4ufGD_R-7jvnUTd-X46MSOqo5HSjviYKhsWNYE17WRsXzIPzASTvVk007CdBB-nP5fX6ZI0EPkswVzBSgsWJB-vkE3uD4qmMl8IJCw0eFup9eoNERqnovEAZA0_sfSW9O4otjt7xqHr8iDrRKNX5aLYTi2OoHDTecNO1TK-d0U',
    altText: 'Bloom Cafe Kathmandu aesthetic social media Instagram carousel templates, specialty coffee photography.',
    deliverables: [
      'Instagram 9-Grid Content System & Reusable Canva Templates',
      'Digital Food & Beverage Menu (Tablet + QR Code)',
      'Story Highlight Icons & Promotional Stickers',
      'Seasonal Coffee Tasting Promo Posters'
    ],
    palette: ['#80515D', '#FDAABF', '#FFF8F8', '#793B4E'],
    clientQuote: {
      text: 'Customers constantly remark on how beautiful our Instagram looks before they even step through the cafe doors.',
      author: 'Sunil Thapa',
      role: 'Co-Founder & Head Roaster, Bloom Cafe'
    }
  },
  {
    id: 'tedx',
    title: 'TEDx Social Club Annual Gala',
    category: 'campaigns',
    categoryLabel: 'Campaigns',
    year: '2023',
    role: 'Club President & Creative Director',
    tools: 'Canva Pro, Presentation Tools, Illustrator',
    overview: 'Event branding, stage screens, print badges & roll-ups for a youth-led conference engaging over 500 attendees.',
    challenge: 'Coordinating multiple design assets under tight student budget constraints and stringent delivery timelines.',
    solution: 'Standardized visual assets across badges, stage projector screens, and social teaser countdowns for efficient turnkey production.',
    metrics: '500+ attendees engaged, unified branding featured across 3 local youth media publications.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiDzk06sDSWOputa2Evj3rEKVcB7wVQcZOIoFLSWrthO0jferv0eBdw_ChYXXVf6H3CoLqq74QUOEGz8lTo8TZSasTvO_xa2a7_3opBIB0OFZl7qDEgPNyhiJWWiz8gjGxe4vRytFUFLfXKUKggtkEoOj26BcMcqXz88J5olatjmO57moMQLMpFrb37a9fg5VcwvnZVKCxFf4wmgI2InYF5ZQ5iaxfaU-tmdNkFW691wp2PIYuFWBK',
    altText: 'TEDx student club annual gala complete promotional collateral, delegate passes mockup, stage backdrop graphic.',
    deliverables: [
      'Conference Theme Graphic & Stage Projections',
      'Speaker Spotlight Social Posts & Countdown Teasers',
      'Print Badges, Programs & Roll-up Banners',
      'Certificate of Participation Templates'
    ],
    palette: ['#BA1A1A', '#350D1C', '#FFDAD6', '#8A4B5C']
  },
  {
    id: 'aura',
    title: 'Aura Candle Studio',
    category: 'branding',
    categoryLabel: 'Branding',
    year: '2024',
    role: 'Packaging & Brand Stylist',
    tools: 'Adobe Illustrator, Canva Pro',
    overview: 'Visual identity, label packaging & warm mood boards for hand-poured soy wax candles made with Himalayan essential oils.',
    challenge: 'Ensuring waterproof, heat-tolerant label visual balance across 4 different jar dimensions while keeping artisanal purity.',
    solution: 'Designed delicate typography with subtle starburst details and soft rose border trims that give the candles an artisanal gift feel.',
    metrics: 'Holiday gift pack orders surged 210% over projections within the initial launch quarter.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOfEsB2iAAe3ZYE8xXK0M8_U5PSyJiPn3hXj69kSy4muMHczTyM47eqHGbv3UpyUiH397_Q4yfRlBKiSBlRzue-Z5zMNn5ai9A7Gg1SuXfRaAxTBJNzwx2bIShs3flbVZmjFFiy3aluHiH08zKU__UMSiZw-0UwkULhheI5nhh0rS1vVa0QzXIln7GghqbzPg20GhWTAhf69a3sxFEvgUnhDut-tWxkMV6bSq60bFrOhoxyf4vKc23',
    altText: 'Aura Candle Studio brand identity presentation mockup showing custom amber candle jars with minimalist blush label stickers.',
    deliverables: [
      'Minimalist Typographic Logo & Monogram',
      'Candle Jar Labels (Amber Glass & Matte Cream Tins)',
      'Product Hangtags & Scent Description Cards',
      'Gift Packaging Box Sleeve Design'
    ],
    palette: ['#8C4A5D', '#FFE1E7', '#FFF8F8', '#524346'],
    clientQuote: {
      text: 'Salina delivered a brand visual that felt high-end yet personal. Our customers rave about keeping the jar labels on display even after the candle finishes.',
      author: 'Nirmal Bajracharya',
      role: 'Artisan, Aura Candle Studio'
    }
  },
  {
    id: 'heritage',
    title: 'Nepal Heritage Reimagined',
    category: 'posters',
    categoryLabel: 'Posters & Banners',
    year: '2024',
    role: 'Illustrator & Visual Artist',
    tools: 'Canva Pro, Vector Graphics, Illustrator',
    overview: 'Cultural typography & modern architectural vector art celebrating traditional Newar architecture through contemporary pastel lenses.',
    challenge: 'Respecting cultural integrity while abstracting complex pagoda and woodcraft architectural landmarks for contemporary youth spaces.',
    solution: 'Applied warm rose-tinted atmospheric lines to temple silhouettes, balancing intricate wood-carving textures with clean negative space.',
    metrics: 'Featured on 2 design curation forums; widely shared across local architecture student groups in Nepal.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBPbTUS7djXJ742ZnS9Wqu2blSFyfe-KY65oq-yFPHf4cguCOWy5ng1_W4eko40qLMQCTs6Z1TVrhRm0PRoch4VqwMxarwywZ8sybOuyJB5miyUmy9Z_ne1srCLx62te_xIZro8gPVOzPjXkoRI0QjB-ntyCpOa_4Cz7u_Bo3nqcHOWAMlwhNmTq6zJAYZMrAIb4eZYnFgtEdUr6faN7H89aSVJMVTQaIeACG4JDhJQutF02WmMl_-',
    altText: 'Nepal Heritage Reimagined artistic exhibition poster with stylized traditional Newari architecture.',
    deliverables: [
      'Limited-Edition A2 Art Prints',
      'Postcard Series for Kathmandu Art Tour',
      'High-Resolution Digital Desktop & Mobile Wallpapers',
      'Typography Specimen Documentation'
    ],
    palette: ['#733949', '#FFD9E1', '#FFF8F8', '#350D1C']
  },
  {
    id: 'urbanglow',
    title: 'Urban Glow Cosmetics',
    category: 'social',
    categoryLabel: 'Social Media Design',
    year: '2023',
    role: 'Digital Campaign Designer',
    tools: 'Canva Pro, Meta Ads Manager',
    overview: 'Promotional reel covers, product ads & social campaign tailored for youth TikTok and Instagram beauty demographics in Nepal.',
    challenge: 'Generating immediate curiosity and click-throughs in a hyper-saturated cosmetics market with short attention spans.',
    solution: 'Built dynamic story polls, giveaway templates, and short-form video cover cards optimized for mobile screens.',
    metrics: 'Campaign reached 38k unique accounts with an average CTR of 4.2% on paid promotion.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmUgW_PPwYTZ-IXWlTOtntvJ6273gbw8Y9-Zbo0PwA_70QKlu_EDz-V9lhkhUXKxhiByrif-P_wvEju5VUycU87Tn3JBpg34idWvT8sWJER-lG-9_FK6dazWSaRu6fX3vgh5Zndin-_FHtM0UoG0AeCOWJXIZqkzmhL-sr3gEPxiD9Dtl2ej2UsvDRdKJlP0-Dfk_03Naq8QoGONLCa-3p0hA0PWn-I22-7vS5z99VUY_iiDkKTpgi',
    altText: 'Urban Glow dynamic Instagram Reels cover layouts, beauty TikTok promotional banners, trendy pastel pink typography.',
    deliverables: [
      '24 Instagram Reels Covers & Video Lower-Thirds',
      'Story Interaction Sticker Packs (Polls, Quizzes, Countdowns)',
      'Influencer Collaboration PR Kit Card',
      'Meta Paid Ad Creative Variants (Feed + Stories)'
    ],
    palette: ['#F4A6B8', '#703346', '#FFE8ED', '#350D1C']
  },
  {
    id: 'echo',
    title: 'Echo Sustainable Living',
    category: 'campaigns',
    categoryLabel: 'Campaigns',
    year: '2024',
    role: 'Content Strategist & Graphic Designer',
    tools: 'Canva Pro, Adobe Illustrator',
    overview: 'Zero-waste digital awareness flyer & engagement drive targeting single-use plastics in educational campuses throughout Kathmandu.',
    challenge: 'Avoiding doom-and-gloom messaging; making sustainability look inviting, chic, actionable, and fun.',
    solution: 'Designed friendly infographic checklists with soft pink and warm mint highlights that encouraged daily behavior shifts.',
    metrics: 'Distributed across 8 campus student unions, resulting in over 1,200 digital shares and downloads.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZQdvUvGGQF1xoR7QtEjxQ2Y0lylo_7_qBzjqAT_j6ayreJfUnTvEHe4H81eor6XIFOiQ3JY0GlmjeVxtWE7TpVei1_jHgf-cdi4B5GuSsg5ZcayYhUwTCmj9qMWqDU4Lh4GDFEH0lJ6qnqQ2AdrdrOOrwD4fKhV5Sht3m4E5S6HAnCOx0cNDCrm0DfddYwSvKATWx5TnUgfRUFfnpda3vqRRV0OVhdoDF2U98QXTNh1ENZK-Fe0BT',
    altText: 'Echo Sustainable Living Kathmandu youth digital flyer campaign, eco-friendly lifestyle graphics in muted sage and blush pink.',
    deliverables: [
      'Zero-Waste Campus Starter Infographic',
      'Printable Campus Bulletin Board Posters (A3)',
      'Social Media Carousel Series (6 Slides each)',
      'Digital Pledge Card Template for Instagram Stories'
    ],
    palette: ['#80515D', '#E7ACBA', '#FFF8F8', '#350D1C']
  }
];

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  tagline: string;
  deliverables: string[];
  selectValue: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'social-media',
    title: 'Social Media Design',
    icon: 'grid_view',
    description: 'Curated Instagram feeds, carousel systems, story kits, and Reels thumbnails that captivate attention and convert casual scrollers into loyal brand fans.',
    tagline: 'Feed Kits • Carousels • Stories',
    deliverables: [
      'Curated Instagram 9-grid puzzle or modular feed layouts',
      'High-converting multi-slide educational carousel templates',
      'Custom Instagram Story highlight icons & interactive frames',
      'Reels and TikTok cover graphics with strong typographic hooks'
    ],
    selectValue: 'social-media'
  },
  {
    id: 'posters',
    title: 'Posters & Banners',
    icon: 'post_add',
    description: 'High-impact print & digital posters, event backdrops, conference roll-ups, and marketing collaterals built with disciplined typographic hierarchy.',
    tagline: 'Event Collateral • Print Ready',
    deliverables: [
      'Print-ready event posters (A1, A2, A3) with CMYK bleed specs',
      'Stage backdrops, conference roll-up banners, and podium signs',
      'Event delegate badges, VIP passes, and lanyard inserts',
      'Digital web banners & social promotional flyers'
    ],
    selectValue: 'posters'
  },
  {
    id: 'branding',
    title: 'Brand Visuals',
    icon: 'palette',
    description: 'Logomarks, signature color palettes, font pairings, pitch decks, and brand style guides that establish a memorable, poised visual presence.',
    tagline: 'Identity Kits • Style Guides',
    deliverables: [
      'Primary logomark, secondary lockup & responsive monogram',
      'Custom color harmony palettes with hex, RGB & CMYK codes',
      'Editorial typography pairing guidelines & licensing notes',
      'Comprehensive Brand Identity PDF book (20–40 pages)'
    ],
    selectValue: 'branding'
  },
  {
    id: 'campaign',
    title: 'Marketing Planning',
    icon: 'trending_up',
    description: 'Data-informed campaign timelines, monthly content calendars, creative copywriting cues, and audience testing to maximize your media investments.',
    tagline: 'Timelines • Content Calendars',
    deliverables: [
      '30-day and 90-day comprehensive content roadmaps',
      'Campaign thematic pillars & messaging framework',
      'Copywriting cues & hook templates tailored to target audience',
      'A/B visual creative testing plans for Meta and TikTok ads'
    ],
    selectValue: 'campaign'
  }
];

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  badge?: string;
  description: string;
  isCurrent?: boolean;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Graphics Officer',
    organization: 'Origami For Good — Nepal Chapter',
    period: 'Jun 2025 — Present',
    badge: 'Jun 2025 — Present',
    description: 'Lead visual content creation and brand standards across social channels. Collaborate directly with the national communications team to engineer high-impact awareness campaigns that significantly enhanced community reach and donor engagement.',
    isCurrent: true
  },
  {
    role: 'Digital Marketing Intern',
    organization: 'Creative Spark Media • Kathmandu',
    period: 'Jan 2024 — May 2024',
    badge: 'Jan 2024 — May 2024',
    description: 'Supported multi-client social media execution, drafted visual content calendars, tested ad variants across Meta networks, and analyzed weekly performance analytics to optimize audience interaction.',
    isCurrent: false
  },
  {
    role: 'President',
    organization: 'TEDx Social Club',
    period: 'Mar 2018 — Mar 2020',
    badge: 'Mar 2018 — Mar 2020',
    description: 'Founded and spearheaded a youth community empowering 500+ students through weekly meetings, inter-college debates, public speaking symposiums, and stage collateral design.',
    isCurrent: false
  }
];

export const COMPETENCIES = [
  'Canva Pro',
  'Graphic Design',
  'Social Media Strategy',
  'Content Creation',
  'Presentation Design',
  'Creative Leadership',
  'HTML & CSS',
  'Web Basics',
  'Adobe Illustrator',
  'Figma',
  'Meta Ads Suite',
  'Brand Guidelines'
];
