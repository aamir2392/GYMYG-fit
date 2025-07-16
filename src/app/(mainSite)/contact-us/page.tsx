import ContactUs from "@/sections/gymyg-contact-us/ContactUs";
import React from "react";
import { client } from "@/sanity/lib/client";
import { contactUsSectionQuery } from "@/sanity/lib/queries";
import type { ContactUsSectionData } from "@/types/contactUsSection";

import { Metadata } from "next";
import { defaultMetadata } from "@/seo/metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Contact Us | Get in Touch with Our Team",
  description:
    "Reach out to GYMYG's support team. We're here to help with any questions about our virtual fitness platform, training programs, or membership.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "Contact GYMYG | Get in Touch with Our Team",
    description:
      "Have questions about GYMYG? Our support team is ready to help. Contact us for information about our virtual fitness platform, training programs, or membership options.",
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: "Contact GYMYG",
    description:
      "Need help? Contact GYMYG's support team for assistance with our virtual fitness platform, training programs, or membership. We're here to help! 💪",
  },
};

const page = async () => {
  // Fetch contact us data from Sanity
  const contactUsData: ContactUsSectionData | null = await client.fetch(
    contactUsSectionQuery
  );

  return <ContactUs data={contactUsData} />;
};

export default page;
