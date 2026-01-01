// SEO Configuration for HackSync 2.0
// Central place for all SEO-related metadata and structured data

export const siteConfig = {
  name: "HackSync 2.0",
  description:
    "HackSync 2.0 - Uniting Coders, Igniting Innovation. A 24-hour hackathon organized by GDG TSEC, Thadomal Shahani Engineering College, Bandra, Mumbai.",
  url: "https://hacksync-2026.vercel.app",
  ogImage: "https://hacksync-2026.vercel.app/hacksync.png",
  creator: "GDG TSEC",
  keywords: [
    "hackathon",
    "HackSync",
    "HackSync 2.0",
    "GDG TSEC",
    "Thadomal Shahani College",
    "TSEC",
    "TSEC Bandra",
    "coding competition",
    "innovation",
    "developer community",
    "web development",
    "AI/ML",
    "machine learning",
    "blockchain",
    "24-hour hackathon",
    "tech event",
    "coding challenge",
    "developers",
    "Mumbai hackathon",
    "tech competition",
    "Bandra hackathon",
    "engineering college hackathon",
    "student hackathon",
    "innovation challenge",
    "TSEC hackathon",
  ],
  authors: [
    {
      name: "GDG TSEC",
      url: "https://www.instagram.com/gdg_tsec",
    },
  ],
  social: {
    instagram: "https://www.instagram.com/gdg_tsec",
    linkedin: "https://www.linkedin.com/company/gdg-tsec/",
    email: "dsctsec@gmail.com",
    whatsapp: "https://chat.whatsapp.com/BsLBWWGIAcz379C9BSRuIM",
  },
  contact: {
    email: "dsctsec@gmail.com",
  },
  organization: {
    name: "GDG TSEC",
    url: "https://gdgtsecoffical.dpdns.org/",
    logo: "https://hacksync-2026.vercel.app/Logo.png",
    description:
      "Google Developer Groups at TSEC, Thadomal Shahani Engineering College",
    address: {
      streetAddress: "Thadomal Shahani Engineering College, Bandra",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400050",
      addressCountry: "IN",
    },
  },
  event: {
    name: "HackSync 2.0",
    description: "24-hour hackathon focusing on Web Development, AI/ML, and Blockchain at Thadomal Shahani Engineering College, Bandra",
    startDate: "2026-01-15T09:00:00+05:30",
    endDate: "2026-01-16T09:00:00+05:30",
    location: "Thadomal Shahani Engineering College, Bandra, Mumbai",
    organizer: "GDG TSEC",
    image: "https://hacksync-2026.vercel.app/hacksync.png",
    url: "https://hacksync-2026.vercel.app",
  },
  domains: [
    {
      name: "Web Development",
      description: "Full-stack web development with modern technologies",
      icon: "code",
    },
    {
      name: "AI/ML",
      description: "Artificial Intelligence and Machine Learning applications",
      icon: "brain",
    },
    {
      name: "Blockchain",
      description: "Decentralized applications and blockchain technology",
      icon: "network",
    },
  ],
};

// Generate structured data (JSON-LD) - WebSite Schema
export const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    image: siteConfig.ogImage,
    creator: {
      "@type": "Organization",
      name: siteConfig.organization.name,
      url: siteConfig.organization.url,
      logo: siteConfig.organization.logo,
      sameAs: [
        siteConfig.social.instagram,
        siteConfig.social.linkedin,
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.contact.email,
        contactType: "Customer Service",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.organization.address.streetAddress,
        addressLocality: siteConfig.organization.address.addressLocality,
        addressRegion: siteConfig.organization.address.addressRegion,
        postalCode: siteConfig.organization.address.postalCode,
        addressCountry: siteConfig.organization.address.addressCountry,
      },
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      "https://www.facebook.com/gdgtsec",
    ],
  };
};

// Generate Event structured data (JSON-LD)
export const generateEventStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: siteConfig.event.name,
    description: siteConfig.event.description,
    image: siteConfig.event.image,
    startDate: siteConfig.event.startDate,
    endDate: siteConfig.event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: siteConfig.event.location,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.organization.address.streetAddress,
        addressLocality: siteConfig.organization.address.addressLocality,
        addressRegion: siteConfig.organization.address.addressRegion,
        postalCode: siteConfig.organization.address.postalCode,
        addressCountry: siteConfig.organization.address.addressCountry,
      },
    },
    organizer: {
      "@type": "Organization",
      name: siteConfig.organization.name,
      url: siteConfig.organization.url,
      logo: siteConfig.organization.logo,
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.contact.email,
      },
    },
    performer: {
      "@type": "Organization",
      name: siteConfig.organization.name,
    },
    url: siteConfig.url,
  };
};

// OG Tags configuration
export const generateOpenGraphTags = () => {
  return {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
    image: siteConfig.ogImage,
    siteName: siteConfig.name,
    locale: "en_US",
  };
};

// Twitter Card configuration
export const generateTwitterCardTags = () => {
  return {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    image: siteConfig.ogImage,
    creator: "@gdgtsec",
    site: "@gdgtsec",
  };
};
