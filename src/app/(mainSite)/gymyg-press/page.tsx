import Link from "next/link";
import React from "react";

import { Metadata } from "next";
import { defaultMetadata } from "@/seo/metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "GYMYG Press Inquiries",
  description:
    "Contact GYMYG's press team for media inquiries, interviews, and partnership opportunities. We're here to help share our fitness innovation story.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "GYMYG Press | Media Inquiries & Partnerships",
    description:
      "Interested in covering GYMYG's fitness innovation? Contact our press team for media inquiries, interviews, and partnership opportunities.",
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: "GYMYG Press",
    description:
      "Media inquiries? Contact GYMYG's press team for interviews, features, and partnership opportunities. Let's share our fitness innovation story! 💪",
  },
};

const GymygPressPage = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6 tracking-tight">
        PRESS
      </h1>
      <p className="text-lg md:text-xl text-gray-700 text-center max-w-xl mb-2">
        For press inquiries, please contact{" "}
        <Link
          href="mailto:ashley@gymyg.fit"
          className="font-bold text-gray-700 hover:text-primary-100 transition-colors underline underline-offset-8"
        >
          ashley@gymyg.fit
        </Link>
      </p>
    </div>
  );
};

export default GymygPressPage;
