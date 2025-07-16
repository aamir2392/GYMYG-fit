import type { Metadata } from "next";

const baseURL = process.env.NEXT_PUBLIC_APP_URL || "https://gymyg.fit"; // Base URL for the website, used for canonical links

export const defaultMetadata: Metadata = {
  // Title setup for all pages
  title: {
    default: "GYMYG | Virtual Fitness Revolution - Train Live, Live Better", // Main title used when no custom page title is defined
    template: "%s | GYMYG", // Used when a custom page title is provided → e.g. 'Trainers' → 'Trainers | GYMYG'
  },

  // Meta description (important for Google snippet)
  description:
    "Join GYMYG's live virtual workouts with certified trainers. Connect with a global fitness community and achieve your goals from anywhere.",

  // Publisher information
  publisher: "GYMYG", // The name of the publisher or organization responsible for the content

  // Author information
  authors: [
    {
      name: "GYMYG Team",
      url: `${baseURL}#team`,
    },
  ],
  creator: "GYMYG", // The author of the page (can be a person or organization)

  // Canonical and language alternate URLs for international SEO
  alternates: {
    canonical: `${baseURL}`, // This tells search engines the main/official version of this page
    languages: {
      "en-US": "/en", // English language version
    },
  },

  // Robots tag (controls how search engines crawl and index the page)
  robots: {
    index: true, // Allow indexing of this page
    follow: true, // Allow following links on this page
    nocache: false, // Allow caching
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Keywords (less important for modern SEO, but still useful for context)
  keywords: [
    // Core Business Keywords
    "virtual fitness",
    "online personal training",
    "live workout classes",
    "fitness app",
    "virtual gym",
    "interactive fitness",

    // Service Specific
    "personal training online",
    "group fitness classes",
    "live fitness streaming",
    "virtual workout sessions",
    "fitness coaching",
    "workout programs",
    "fitness community",

    // Technology & Platform
    "fitness technology",
    "virtual reality fitness",
    "live streaming workouts",
    "interactive training",
    "mobile fitness app",
    "digital fitness platform",

    // Target Audience
    "home workouts",
    "remote fitness",
    "online fitness training",
    "virtual personal trainer",
    "fitness enthusiasts",
    "workout from home",

    // Trainer Related
    "certified fitness trainers",
    "professional trainers",
    "fitness professionals",
    "trainer platform",
    "fitness instructor",

    // Health & Wellness
    "fitness goals",
    "health and wellness",
    "workout motivation",
    "fitness journey",
    "exercise programs",
    "strength training",
    "cardio workouts",
    "fitness tracking",

    // Brand Specific
    "GYMYG",
    "gymyg fit",
    "train live live better",
    "virtual fitness revolution",
    "personalized group fitness",
  ],

  // Favicon and device icons
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "manifest",
      url: "/site.webmanifest",
    },
  ],

  // Open Graph for Facebook, LinkedIn, WhatsApp sharing previews
  openGraph: {
    type: "website", // This is a website (can be article, product, etc.)
    siteName: "GYMYG", // Brand or website name
    title: "GYMYG - Virtual Fitness Revolution | Train Live, Live Better", // What you want people to see as title when link is shared
    description:
      "Experience the future of fitness with GYMYG. Join live interactive workouts with certified trainers, connect with a global fitness community, and achieve your goals from anywhere. Real trainers. Real connections. Real results.",
    url: baseURL, // The URL of the page being shared
    images: [
      //   {
      //     url: "/assets/gymyg-logo.png", // Image URL for the preview
      //     alt: "GYMYG - Virtual Fitness Platform Logo", // Screen reader/semantic text for the image
      //     width: 1200,
      //     height: 630,
      //     type: "image/png",
      //   },
      {
        url: "/assets/gymyg-for-trainers.jpg",
        alt: "GYMYG Virtual Training Session - Train Live, Live Better",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ], // Array of images to be used in the preview
    locale: "en_US", // Primary locale
    countryName: "United States",
  },

  // Twitter card preview
  twitter: {
    card: "summary_large_image", // Big preview card on Twitter
    title: "GYMYG - Virtual Fitness Revolution 💪",
    site: "@GYMYG", // Twitter handle of the site or brand
    creator: "@GYMYG", // Twitter handle of the creator or author
    description:
      "Transform your fitness journey with live interactive workouts, certified trainers, and a global community. Download the app and start training today! 🏋️‍♀️",
    images: [
      {
        url: "/assets/gymyg-logo.png", // Preview image
        alt: "GYMYG - Virtual Fitness Platform", // Alt text for accessibility
        width: 1200,
        height: 630,
      },
    ],
  },

  // Additional metadata for better SEO
  category: "Health & Fitness",
  classification: "Fitness Technology",

  // App-specific metadata
  applicationName: "GYMYG",
  appleWebApp: {
    capable: true,
    title: "GYMYG",
    statusBarStyle: "black-translucent",
  },

  // Verification tags (add when you have them)
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
    // other: {
    //   'facebook-domain-verification': 'your-facebook-verification-code',
    // },
  },

  // Other metadata
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#000000",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};
