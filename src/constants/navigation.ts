import { Link2 } from "lucide-react";

import { Instagram, Twitter } from "lucide-react";

import { Home, Package, UserPlus, Mail } from "lucide-react";

export const navLinks = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Packages",
    href: "/packages",
    icon: Package,
  },
  {
    title: "Join GYMYG",
    href: "/join-gymyg",
    icon: UserPlus,
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    icon: Mail,
  },
];

export const mobileNavLinks = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Packages",
    href: "/packages",
    icon: Package,
  },
  {
    title: "Join GYMYG",
    href: "/join-gymyg",
    icon: UserPlus,
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    icon: Mail,
  },
];

export const footerLinks = {
  socialLinks: [
    {
      href: "http://instagram.com/gymygfit",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "http://twitter.com/gymygfit",
      icon: Twitter,
      label: "Twitter",
    },
    {
      href: "http://tiktok.com/@gymygfit",
      icon: Link2,
      label: "Link",
    },
  ],

  companyLinks: [
    {
      href: "/gymyg-press",
      label: "Press",
    },
    {
      href: "/#team",
      label: "Team",
    },
    {
      href: "/packages#FAQs",
      label: "FAQ",
    },
    {
      href: "/contact-us",
      label: "Contact",
    },
    {
      href: "https://gymyg-web-prod.vercel.app/authentication/clientLogin",
      label: "COMPUTER CONNECT",
    },
  ],

  legalLinks: [
    {
      href: "/community-guidelines",
      label: "Community Guidelines",
    },
    {
      href: "/privacy-policy",
      label: "Privacy Policy",
    },
    {
      href: "/terms-of-service",
      label: "Terms of Service",
    },
  ],
} as const;
