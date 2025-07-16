import { Info, Shield, Clock, Calendar } from "lucide-react";

export const policySections = {
  header: {
    title: "GYMYG Privacy Policy",
    subtitle: "For Members/Trainers",
    lastUpdated: "2023-07-01",
    icons: {
      main: Shield,
      clock: Clock,
      calendar: Calendar,
    },
  },
  introduction: {
    paragraphs: [
      'Welcome to GYMYG, together with our affiliates, ("GYMYG," "we," or "us").',
      "This privacy policy is meant to explain how we collect, use, and share information about you when you visit our website, use the GYMYG app, visit GYMYG sites, use any GYMYG services, or when you interact with us in any way. This privacy policy applies to our services except where otherwise noted.",
      "Please be sure to read this entire policy before using our services. When you do, you agree to the collection, transfer, manipulation, processing, storage, disclosure, and other uses of your personal information as described in this privacy policy, and to be bound by its terms.",
      'We may change this policy from time to time. If we make changes, we will notify you by revising the "last updated" date at the top of the notice. When we do, we will take reasonable measures to inform you of those changes and obtain your consent to any material changes, if and where required by law. You also agree, however, to affirmatively check this policy for updates.',
    ],
  },
  sections: [
    {
      id: "information-collection",
      title: "What Personal Information We Collect",
      icon: Info,
      content: [
        {
          id: "provided-usage",
          title: "Provided and usage information",
          description:
            "This includes information you provide to create the account, information you provide while using the app, and information about your progress (including workouts completed, attendance, members added as friends, and details of workout performance).",
        },
        {
          id: "demographic",
          title: "Demographic data",
          description:
            "This includes account information you provide such as your name, address, zip code, email, date of birth, and phone number. It also includes information available on your Instagram account (when linked during the account creation process).",
        },
        {
          id: "location",
          title: "Location information",
          description:
            "We may collect location-based information, including your IP address, GPS location, city, country, zip code, and region, and your smart device's proximity to other systems.",
        },
        {
          id: "purchase",
          title: "Purchase information",
          description:
            "This includes payment information, order details, and any other information you provide to purchase a service.",
        },
        {
          id: "video-audio",
          title: "Video and audio",
          description:
            "Because GYMYG's primary service is a live, interactive virtual workout, we also collect your voice and likeness, visual imagery, likeness, and voice recording when you participate in any classes. This data is not used for identification purposes. You should think of your participation in a GYMYG class as similar to your participation in an in-person class at a physical gym.",
        },
        {
          id: "user-content",
          title: "User-generated content",
          description: "This includes any material you publish or post.",
        },
        {
          id: "third-party",
          title: "Other providers and services",
          description:
            "Because GYMYG requires integration with Instagram and is downloadable through either the Apple App Store or Google Play Store, we may collect information from your use of those services or from Google that you have made available via your privacy settings. We may, with your consent, collect information from your use of additional third-party devices or services.",
        },
        {
          id: "feedback",
          title: "Feedback and support communications",
          description:
            "Your interactions with us–whether via the app, text, email, live chat, video call, our social media accounts, or otherwise, may be collected for purposes of providing support, improving our services, or for training and monitoring purposes.",
        },
      ],
    },
    {
      id: "information-usage",
      title: "How We Use Your Information",
      icon: Shield,
      content: [
        {
          id: "services",
          title: "Provide services",
          description:
            "We use your information to provide you with services, to communicate with you, to verify your identity, to personalize your experience, to improve our services, for quality assurance and training purposes, for personalization, to ensure security, to comply with law, and other lawful purposes.",
        },
        {
          id: "third-party",
          title: "Third-party services",
          description:
            "We may contract with third-parties to help us provide services or to display ads on their service. These companies may use cookies and similar technologies to track your activity, which is subject to their own privacy policies.",
        },
        {
          id: "disclosure",
          title: "Information disclosure",
          description:
            "We may disclose your personal information with employees, agents and contractors of GYMYG, and third party partners or service providers (with appropriate contractual confidentiality agreements). GYMYG strives to be a virtual community, so your information may also be disclosed to other users of the services, including trainers and other members.",
        },
        {
          id: "business-transfer",
          title: "Business transfers",
          description:
            "We may also share your personal information with potential buyers and their agents in connection with any actual or proposed purchase, merger, acquisition, financing or reorganization, bankruptcy, receivership, sale of company assets, or transition of service, subject to appropriate contractual confidentiality agreements.",
        },
        {
          id: "legal",
          title: "Legal compliance",
          description:
            "GYMYG will use and disclose your personal information as necessary or appropriate, including information otherwise authorized by you or authorized representative, in aggregate anonymized formats, or as required by law or the exercise of GYMYG's legal rights.",
        },
        {
          id: "international",
          title: "International transfers",
          description:
            "Your personal information may be transferred to processed or stored in countries other than the one you reside in. We will take appropriate safeguards to protect your personal information in accordance with this privacy policy and applicable laws, including U.S, EU and UK data laws.",
        },
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights",
      icon: Shield,
      content: [
        {
          id: "control",
          title: "Control over your data",
          description:
            "When possible, we will give you control over your personal data to ensure it is accurate and complete. Your ability to exercise these rights is subject to certain exceptions permitted by law. Legal requirements and our legal defense may require us to retain some or all of the personal information we hold for a period of time that is longer than that for which we might otherwise hold it. If you delete your account, this will result in a deletion of your GYMYG account, and your access to all historical information.",
        },
        {
          id: "identity",
          title: "Identity verification",
          description:
            "We will confirm your identity before acting on certain requests. We may not be able to respond if we are unable to verify your identity.",
        },
        {
          id: "withdraw",
          title: "Withdraw consent",
          description:
            "You can withdraw your consent to certain collection of information in the Settings on the GYMYG app, by stopping your use of GYMYG services, or by deleting your account.",
        },
        {
          id: "communication",
          title: "Communication preferences",
          description:
            "We endeavor to use the GYMYG app as the primary means of communication with you. This includes push notifications (which you can control by changing the settings on your device). That said, we may need to and will contact you by email, text, mail, Instagram, or phone.",
        },
        {
          id: "security",
          title: "Data security",
          description:
            "We have taken steps to ensure that your information is treated securely and in accordance with this privacy policy. We maintain commercially reasonable administrative, technical, and physical safeguards, which vary, depending on the sensitivity of the personal information.",
        },
      ],
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      icon: Shield,
      content: [
        {
          id: "children",
          title: "Not for children",
          description:
            "GYMYG services are not directed towards, or intended for children. We do not knowingly collect personal information directly from children who do not meet the minimum age requirements in your jurisdiction. If we become aware that we have collected personal data from a child under the minimum age, we will promptly delete the personal data.",
        },
      ],
    },
    {
      id: "contact-us",
      title: "Contact Us",
      icon: Info,
      content: [
        {
          id: "contact",
          title: "Get in touch",
          description:
            "If you have any questions or would like to contact us, you can do so by email at hello@gymyg.fit.",
        },
      ],
    },
  ],
  cta: {
    title: "Have questions about our privacy policy?",
    description: "We're here to help you understand how we protect your data.",
    buttonText: "Contact Support",
    link: "/contact-us",
  },
};

export default policySections;
