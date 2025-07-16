import {
  Briefcase,
  Calendar,
  Clock,
  Dumbbell,
  FileText,
  Info,
  Scale,
  Shield,
  Users,
} from "lucide-react";

export const termsOfServiceData = [
  {
    title: "Members",
    description:
      "Learn about your rights and responsibilities, membership terms, and the rules governing your participation in GYMYG services.",
    icon: Users,
    imageSrc: "/assets/members-privacy.jpeg",
    buttonText: "Members Terms",
    buttonVariant: "primary" as const,
    path: "/terms-of-service/members",
  },
  {
    title: "Trainers",
    description:
      "Understand your professional obligations, service agreements, and the guidelines for offering training services through the GYMYG platform.",
    icon: Dumbbell,
    imageSrc: "/assets/trainers-privacy.jpeg",
    buttonText: "Trainers Terms",
    buttonVariant: "white" as const,
    path: "/terms-of-service/trainers",
  },
];

// Data structure for terms sections
export const termsData = {
  header: {
    title: "GYMYG Terms of Service",
    subtitle: "For Members",
    lastUpdated: "2023-07-01",
    icons: {
      main: FileText,
      clock: Clock,
      calendar: Calendar,
    },
  },
  introduction: {
    paragraphs: [
      'Please read this legal document carefully. GYMYG provides an online fitness community and related products, services, content, and features. By registering as a member, or by visiting, browsing, or using the GYMYG service in any way, you accept and agree to be bound by these terms of service ("Terms"), which forms a binding agreement between you and GYMYG.',
      "If you do not wish to be bound by these terms, you may not access or use the GYMYG service. Certain elements of the GYMYG service may be subject to additional terms and conditions specified from time to time. Your use of those elements is subject to those additional terms and conditions.",
    ],
  },
  sections: [
    {
      id: "eligibility-requirements",
      title: "Eligibility Requirements",
      icon: Shield,
      content: [
        {
          id: "age-requirement",
          title: "Age Requirement",
          description:
            "You must be at least 18 years old to use the GYMYG service.",
        },
        {
          id: "service-discretion",
          title: "Service Discretion",
          description:
            "We may, in our sole discretion, refuse to offer the GYMYG service to any person or entity, and change the eligibility criteria at any time. You are solely responsible for ensuring that these terms are in compliance with all laws, rules and regulations applicable to you, and the right to access and use the GYMYG service is revoked, for these terms where use of the GYMYG service is prohibited or conflicts with any applicable law, rule, or regulation.",
        },
      ],
    },
    {
      id: "license-usage",
      title: "License to Use the Service",
      icon: FileText,
      content: [
        {
          id: "license-grant",
          title: "License Grant",
          description:
            "Subject to your compliance with these terms and solely for so long as you are permitted by us to do so, GYMYG grants a limited, non-transferable, non-exclusive, revocable rights, and license to access and use the GYMYG service for your own personal, non-commercial purpose, a right, which may not be assigned or sub licensed to anyone.",
        },
        {
          id: "license-scope",
          title: "License Scope",
          description:
            "This license includes the right to view content available on the GYMYG service and the right to download one copy of the application to any single device for your personal, non-commercial home use only, provided you keep intact all copyright and other proprietary notices. This license will remain in effect, unless and until you violate these terms, or this license is terminated by you or GYMYG.",
        },
        {
          id: "restrictions",
          title: "Restrictions",
          description:
            "Except as expressly permitted in writing by an authorized representative of GYMYG, you will not reproduce, redistribute, sell, transfer, create derivative works from, decompile, reverse engineer, or disassemble, the GYMYG service, nor will you take any measures to interfere with or damage the GYMYG service. Unless otherwise specified, copying, or modifying any content or using content for any purpose, other than your personal, non-commercial use of the GYMIG service, including use of any such content on any other website or networked computer environment, is strictly prohibited.",
        },
        {
          id: "service-modifications",
          title: "Service Modifications",
          description:
            "GYMYG reserves the right to modify the service, including, but not limited to updating, adding to, enhancing, modifying, removing or altering any content or features of the GYMYG service at any time, and in its sole discretion. You are responsible for providing your own access to the GYMYG service. GYMYG has no obligation to screen or monitor any content and does not guarantee that any content available on the service is suitable for all users, or that it will continue to be available for any length of time.",
        },
        {
          id: "as-is-service",
          title: '"As Is" Service',
          description:
            'GYMYG provides the service on an "as is" and "as available" basis. You therefore use the GYMYG service at your own risk. Other than as expressly provided in writing by GYMYG in connection with your use, to the extent permitted by law GYMYG, expressly disclaims any and all warranties of any kind, whether expressed or implied, including, but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, quiet enjoyment, and any other warranty that might arise under any law.',
        },
      ],
    },
    {
      id: "account-management",
      title: "Privacy & Account Management",
      icon: Shield,
      content: [
        {
          id: "privacy",
          title: "Privacy",
          description:
            "Your use of GYMYG is subject to our PRIVACY POLICY, which will be updated to detail what information we may collect about you, what we use that information for, and with whom we share that information.",
        },
        {
          id: "registration",
          title: "Registration",
          description:
            "To enjoy full access to the GYMYG service, you must register as a member. Any registration information you provide to GYMYG must be complete and accurate. You must notify us if any of your information changes. If you fail to keep your account information up-to-date, we may have to suspend or terminate your subscription.",
        },
        {
          id: "profile-information",
          title: "Profile Information",
          description:
            "You may not use someone else's name, or any name, location, other public profile, information, or image that violates any third-party rights, is against the law, or that is offensive, obscene, or otherwise objectionable in GYMYG's sole discretion.",
        },
        {
          id: "account-security",
          title: "Account Security",
          description:
            "You are responsible for all activity that occurs under your accounts, including any activity by unauthorized users. You may not allow others to use your account. This includes furnishing your user name and password to third-party developed applications to connect to your account for any reason. If you become aware of unauthorized access to your account, change your password, and notify our support team immediately.",
        },
      ],
    },
    {
      id: "termination",
      title: "Termination & Account Deletion",
      icon: Info,
      content: [
        {
          id: "account-termination",
          title: "Account Termination",
          description:
            "GYMYG, may, in our sole discretion, suspend, disable, or delete your account or any part thereof or block or remove any user content that you submitted, for any lawful reason, including if GYMYG determines that you have violated these terms or that your content or user content intends to damage GYMYG's reputation or goodwill.",
        },
        {
          id: "content-deletion",
          title: "Content Deletion",
          description:
            "In the event of account deletion, for any reason, user content may no longer be available, and GYMYG is not responsible for the deletion or loss of content.",
        },
        {
          id: "termination-effects",
          title: "Termination Effects",
          description:
            "Upon termination of these terms, all licenses granted by GYMYG will terminate and GYMYG will have no obligation to provide any services to you. All other aspects of this agreement which are not related to the provision to further services survive.",
        },
      ],
    },
    {
      id: "user-content",
      title: "User Content",
      icon: FileText,
      content: [
        {
          id: "content-definition",
          title: "Content Definition",
          description:
            '"Content" means text, graphics, images, music, software, audio, video, works of authorship of any kind, and information or other materials that are posted, generated, provided, or otherwise made available through the GYMYG service: and "User Content" means any content that users, including you, provide to be made available through the GYMYG service.',
        },
        {
          id: "content-responsibility",
          title: "Content Responsibility",
          description:
            "Any user content, whether publicly posted, or privately transmitted, is the sole responsibility of the person who originated said shared content. You represent that all user content submitted by you, or on behalf of you is accurate, complete, up-to-date, and in compliance with these terms, and with all applicable laws, rules and regulations.",
        },
        {
          id: "content-risk",
          title: "Content Risk",
          description:
            "You acknowledge that all content, including user content, accessed by you using the GYMYG service is at your own risk, and you will be solely responsible for any damage or a loss to you or any other party resulting therefrom. To the full extent permitted by law, we make no representation, warrantees, or guarantees with respect to any content that you access on or through the GYMYG service.",
        },
        {
          id: "content-ownership",
          title: "Content Ownership",
          description:
            "As between you and GYMYG, you represent that you own all user content that you submit to the GYMYG service, and that GYMYG will not need to obtain licenses from any third-party or pay royalties to any third-party in order to use such user content.",
        },
        {
          id: "content-license",
          title: "Content License",
          description:
            "You grant GYMYG a worldwide, perpetual, irrevocable, non-exclusive, sub-license, transferable, royalty free license, and right to use, copy, transmit, distribute, publicly perform and display through all media, now known or later created, edit, modify, and make derivative works from your user content, including without limitation translations for any purpose whatsoever, commercial, or otherwise, without compensation to you.",
        },
      ],
    },
    {
      id: "prohibited-uses",
      title: "Prohibited Uses",
      icon: Shield,
      content: [
        {
          id: "prohibited-activities",
          title: "Prohibited Activities",
          description:
            "You agree not to do any of the following: Infringe, misappropriate, or violate any copyrights, trademark, trade, secret, moral rights, or other intellectual property rights, or right of publicity or privacy; Violate, or encourage any conduct that would violate, any applicable law or regulation, or would give rise to civil liability; Engage in any fraudulent, false, misleading, or deceptive conduct; Engage in any defamatory, obscene, pornographic, vulgar, or offensive conduct; Promote discrimination, bigotry, racism, hatred, harassment, or harm against any individual or group; Engage in or promote violence or actions that are threatening to any person, animal, or entity; Exploit minors; Promote illegal or harmful activities or substances; Violate or circumvent any of GYMYG's published guidelines or policies.",
        },
        {
          id: "monitoring",
          title: "Content Monitoring",
          description:
            "Although we are not obligated to monitor access to or use of the GYMYG service or content, or to review or edit any user content, we have the right to do so for the purpose of operating the GYMYG service, to ensure compliance with these terms, to comply with applicable law or other legal requirements, and to maintain the integrity and reputation of the GYMYG service and GYMYG systems.",
        },
        {
          id: "content-removal",
          title: "Content Removal",
          description:
            "We reserve the right, but are not obligated, to remove or disable access to any user content, at any time and without notice, including, but not limited to, if we, at our sole discretion, consider any user content to be objectionable or in violation of these terms. We have the right to investigate violations of these terms or conduct that affects service. We may also consult and cooperate with law-enforcement authorities.",
        },
      ],
    },
    {
      id: "third-parties",
      title: "Member Interactions & Third Parties",
      icon: Info,
      content: [
        {
          id: "member-interactions",
          title: "Member Interactions",
          description:
            "When interacting with other GYMYG members, you should exercise caution and common sense to protect your personal safety and property, just as you would when interacting with other people you don't know. Your participation, correspondence, or personal business dealings with any third-party found on, or through the GYMYG service, whether regarding payment or delivery of specific goods and services, are solely between you and such third-party.",
        },
        {
          id: "third-party-liability",
          title: "Third-Party Liability",
          description:
            "You agree that GYMYG is not responsible or liable for any loss, damage, injury, or other matters of any sort incurred as a result of such dealings.",
        },
        {
          id: "third-party-links",
          title: "Third-Party Links",
          description:
            "There may be links on the GYMYG service that let you leave the particular service you are accessing in order to access a link that is operated by a third-party. GYMYG neither controls, nor has GYMYG reviewed or approved the content that appears on them. GYMYG is not responsible for the legality, accuracy, or inappropriate nature of any content, advertising, products, or other materials on or available from any such third-party sites.",
        },
      ],
    },
    {
      id: "liability",
      title: "Indemnification & Liability",
      icon: Shield,
      content: [
        {
          id: "indemnification",
          title: "Indemnification",
          description:
            "You agreed to indemnify, defend and hold harmless GYMYG and its directors, officers, employees, and agents, from an against all claims, damages, losses, and costs that arise from or relate to your activities on the GYMYG site, any user content submitted by or on behalf of you, or, your violation of these terms.",
        },
        {
          id: "limitation-liability",
          title: "Limitation of Liability",
          description:
            "To the fullest extent permitted by law, GYMYG shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including but not limited to damages for loss of profits, economic or pure economic losses, goodwill, use, data, service interruption, computer, damage, system, failure, and ability to use the GYMYG service or content, or other intangible losses, even if a limited remedy set forth herein is found to have failed its essential purpose.",
        },
        {
          id: "liability-cap",
          title: "Liability Cap",
          description:
            "GYMYG's total liability to you for all claims, in the aggregate, will not exceed the amount actually paid by you to GYMYG over the 12 months preceding the date your first claim arose.",
        },
      ],
    },
    {
      id: "safety-warnings",
      title: "Safety Warnings",
      icon: Info,
      content: [
        {
          id: "health-disclaimer",
          title: "Health Disclaimer",
          description:
            "The GYMYG service offers health and fitness information and is designed for educational and entertainment purposes only. You should consult your physician or general practitioner before beginning a new fitness program. You should not rely on this information as a substitute for, nor does it replace, professional, medical advice, diagnosis, or treatment.",
        },
        {
          id: "medical-advice",
          title: "Medical Advice",
          description:
            "If you have any concerns or questions about your health, you should always consult with a physician, general practitioner, or other healthcare, professional. Do not disregard, avoid, or delay obtaining medical or health related advice from your healthcare professional because of something you may have read on the GYMYG site or heard on the GYMYG service.",
        },
        {
          id: "risk-acknowledgment",
          title: "Risk Acknowledgment",
          description:
            "The use of information provided through the GYMYG service is solely at your own risk and is not medical or healthcare advice. Nothing stated or posted on the GYMYG site, or available through any GYMYG service is intended to be, and must not be taken to be, the practice of medical or counseling care.",
        },
        {
          id: "health-affirmations",
          title: "Health Affirmations",
          description:
            "When you engage in any GYMYG activity, you affirm the following are true: No physician or general practitioner has ever informed you that you have a heart condition or that you should only do physical activities specifically recommended by a physician or general practitioner; You have never felt chest pain when engaging in physical activity; You have never lost your balance because of dizziness or lost consciousness; You do not have a bone or joint problem that could be made worse by a change in your physical activity; Your physician or general practitioner is not currently prescribing drugs for your blood pressure or heart condition; You do not have a history of high blood pressure, and no one in your immediate family has a history of high blood pressure or heart problems; and You do not know of any reason why you should not exercise.",
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: Shield,
      content: [
        {
          id: "ip-acknowledgment",
          title: "IP Acknowledgment",
          description:
            "You acknowledge that the GYMYG service contains software, and other content that is protected by copyright, patents, trademarks, trade secrets, or other proprietary rights, and that these rights are valid and protected in all forms, media and technologies, existing now or hereafter developed.",
        },
        {
          id: "content-ownership",
          title: "Content Ownership",
          description:
            "All GYMYG generated content, and content provided to GYMYG by its partners and license services, is copyrighted individually and/or as a collective work under the US copyright laws, and all applicable international copyright or equivalent laws in all jurisdictions and protected under other intellectual property laws worldwide; further, as between you and GYMYG, GYMYG owns intellectual property rights in the selection, coordination, arrangement, and enhancement of all content, in the GYMYG service.",
        },
        {
          id: "ip-respect",
          title: "IP Respect",
          description:
            "GYMYG respects the intellectual property of others, and we ask or users to do the same. Each user is responsible for ensuring that their user content does not infringe on any third parties right or other intellectual property rights. If you believe that the GYMYG service or any content contained therein infringes upon or misappropriates your copyrights or other intellectual property rights, or the intellectual property rights of others, please go to the GYMYG intellectual property and DMCA policy for directions on how to report it to us.",
        },
      ],
    },
    {
      id: "dispute-resolution",
      title: "Dispute Resolution",
      icon: FileText,
      content: [
        {
          id: "informal-resolution",
          title: "Informal Resolution",
          description:
            'You agree that before initiating any dispute proceeding, we will attempt to negotiate an informal resolution of any dispute. To begin this process, before initiating any arbitration proceeding, you must send a notice of dispute ("Notice") by certified mail to the attention of GYMYG\'s legal department at the GYMYG address set forth within these terms. In the notice, you must describe the nature and basis of disputes and the relief that you are seeking.',
        },
        {
          id: "formal-proceedings",
          title: "Formal Proceedings",
          description:
            "If we are unable to resolve the dispute within 45 days after GYMYG's receipt of the notice, then you or GYMYG may initiate judicial or arbitration proceedings. The parties agree that any such proceedings will take place in-person or virtually in Los Angeles county, or another venue that is agreed-upon by both parties.",
        },
      ],
    },
    {
      id: "legal-terms",
      title: "Legal Terms",
      icon: Shield,
      content: [
        {
          id: "interpretation",
          title: "Interpretation",
          description:
            "Headings are for convenience only, and shall not be used to construe these terms. If any term of these terms is found, invalid or unenforceable, by any court, that term will be severed from these terms. No failure or delay by GYMYG and exercising any right here under will waive any further exercise of that right.",
        },
        {
          id: "assignment",
          title: "Assignment",
          description:
            "These terms are binding upon and will be to the benefit of both parties, and their respective successors, heirs, executors, administrators, personal representatives, and permitted assigns. You may not assign or transfer these terms without GYMYG's prior written consent. GYMYG may assign its rights, obligations, and/or these terms at any time in its sole discretion without notice to you.",
        },
        {
          id: "notices",
          title: "Notices",
          description:
            "You consent to receive all communications, including notices, agreements, disclosures, or other information from GYMYG electronically. GYMYG may communicate by email, or by posting to the GYMYG service. For support related inquiries you may email support@gymyg.fit.",
        },
        {
          id: "modification",
          title: "Modification",
          description:
            'We may update these terms at any time in our sole discretion. If we do, so, we will let you know by, at a minimum, posting the updated terms, as indicated by revised "last updated" date at the top of this page on the GYMIG app and/or through the GYMYG service. Modifications will be effective on the date that they are posted on the GYMYG app.',
        },
        {
          id: "entire-agreement",
          title: "Entire Agreement",
          description:
            "These terms represent the entire understanding between GYMYG and you regarding the GYMYG service or content, and supersede all prior agreements and understandings regarding the same. If any provision of these terms is held invalid, or unenforceable by an arbitrator, or a court, that provision will be enforced to the maximum extent permissible, and the other provisions of these terms will remain in full force and effect. In the event of a conflict between any policies posted on the GYMYG app and these terms, these terms will control",
        },
      ],
    },
  ],
};

// Data structure for trainer agreement sections
export const trainerData = {
  header: {
    title: "GYMYG Independent Trainer Agreement",
    subtitle: "Terms of Service - Trainers",
    lastUpdated: "2023-07-01",
    icons: {
      main: Briefcase,
      clock: Clock,
      calendar: Calendar,
    },
  },
  introduction: {
    paragraphs: [
      'These terms constitute a legally binding agreement between you and GYMYG Fitness Ventures Inc, a Delaware corporation, and its subsidiaries, representatives, affiliates, officers and directors (collectively, "GYMYG") governing your use of the GYMYG platform and any related content or services, including the GYMYG Trainer App.',
      "By accessing or using GYMYG, you confirm your agreement to be bound by these terms. If you do not agree to these terms, do not access or use GYMYG.",
      "IMPORTANT: PLEASE BE ADVISED THAT THESE TERMS CONTAIN PROVISIONS THAT GOVERN HOW YOU CAN BRING CLAIMS AGAINST GYMYG AND HOW ANY SUCH CLAIMS ARE RESOLVED. REVIEW THE ARBITRATION AGREEMENT IN SECTION 2 CAREFULLY, AS IT REQUIRES YOU TO RESOLVE ALL DISPUTES WITH GYMYG ON AN INDIVIDUAL BASIS AND, WITH LIMITED EXCEPTIONS, THROUGH BINDING ARBITRATION WITH NO RIGHT TO SEEK RELIEF IN A COURT OF LAW OR TO HAVE A JURY TRIAL. BY AGREEING TO THESE TERMS, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD ALL OF THESE TERMS AND HAVE TAKEN TIME TO CONSIDER THE CONSEQUENCES OF THIS IMPORTANT DECISION.",
    ],
  },
  sections: [
    {
      id: "relationship",
      title: "Relationship, Termination, Modification",
      icon: Briefcase,
      content: [
        {
          id: "contractor-relationship",
          title: "Independent Contractor Relationship",
          description:
            "GYMYG is contracting with you to provide group/class/virtual physical fitness training services to GYMYG clients on its platform. These services will be provided on a non-exclusive, short-term, ad hoc basis. You are under no obligation to work any particular hours or to provide any quantum of services. Similarly, GYMYG is under no obligation to provide training sessions or clients and makes no promises or guarantees that you will be used or that any minimum compensation will be earned.",
        },
        {
          id: "service-commitment",
          title: "Service Commitment",
          description:
            "If you affirmatively commit to a particular workout, however, you agree to provide training services for that specified workout, at the specified time, and for the specified compensation (including any applicable surge or bonus payments) which will be paid no later than 7 days after rendering services. You agree to use your best efforts in providing services under the terms of this agreement.",
        },
        {
          id: "contractor-status",
          title: "Independent Contractor Status",
          description:
            "You are being hired as an independent contractor and not as an employee of GYMYG for any purpose. You are not entitled to receive or participate in any medical, retirement, vacation, paid or unpaid leave, or other benefits provided by GYMYG to its employees. You are responsible for all social security, self-employment, and income taxes, disability insurance, workers' compensation insurance, any other statutory benefits otherwise required to be provided to employees, and all fees and licenses, if any, required for the performance of your services hereunder.",
        },
        {
          id: "professional-judgment",
          title: "Professional Judgment",
          description:
            "Although GYMYG will provide a daily workout that clients expect to follow, you will use your professional judgment and training expertise to lead a safe, engaging, welcoming, and healthy workout session. Because GYMYG is contracting with you for your personal services within your area of professional expertise, you shall not delegate or subcontract any portion of the services to be performed hereunder. You are responsible for furnishing, at your expense, all equipment and supplies necessary for the provision of the services and your use of GYMYG.",
        },
        {
          id: "termination",
          title: "Termination",
          description:
            "This agreement may be terminated by either party at any time. GYMYG, in its sole discretion, may immediately terminate these terms, its contractual relationship with you, or any services with respect to you, or generally cease offering or deny access to GYMYG or any portion thereof, at any time for any reason.",
        },
        {
          id: "modification",
          title: "Modification",
          description:
            "GYMYG reserves the right to modify these terms or its policies at any time, effective upon posting of any updated version of these terms on the GYMYG website and/or through a notice in the GYMYG Trainer App. You should regularly review these terms, as your continued use of GYMYG after any such changes constitutes your acceptance.",
        },
      ],
    },
    {
      id: "arbitration",
      title: "Arbitration Agreement",
      icon: Scale,
      content: [
        {
          id: "individual-arbitration",
          title: "Individual Arbitration",
          description:
            "By agreeing to these terms, the parties agree to resolve any claim one may have against the other arising out of or relating to these terms, your use of GYMYG, or the services you provide to GYMYG on an individual basis in arbitration as set forth in this section, and not as a class, collective, coordinated, consolidated, mass and/or representative action. You and GYMYG are each waiving your right to a trial by jury. This agreement and waiver survives after the termination of your relationship with GYMYG.",
        },
        {
          id: "class-action-waiver",
          title: "Class Action Waiver",
          description:
            "The parties further agree that if for any reason a claim does not proceed in arbitration, this class action waiver shall remain in effect. If any portion of this waiver is unenforceable or unlawful for any reason, that portion shall be severed from this agreement and shall have no impact whatsoever on the enforceability, applicability, or validity of the balance of this section or our agreement to arbitrate.",
        },
        {
          id: "arbitrator-authority",
          title: "Arbitrator Authority",
          description:
            "Only an arbitrator, and not any federal, state, or local court or agency, shall have exclusive authority to resolve any dispute arising out of or relating to the interpretation, applicability, enforceability or formation of this arbitration agreement, including any claim that any part of this agreement is void or voidable. An arbitrator shall also have exclusive authority to resolve all threshold arbitrability issues, including issues relating to whether these terms are applicable, unconscionable or illusory or any other defense to arbitration.",
        },
        {
          id: "arbitration-administration",
          title: "Arbitration Administration",
          description:
            'The arbitration will be administered by ADR Services, Inc. ("ADR") in accordance with ADR\'s Arbitration Rules in effect at the time that the claim is brought, unless the parties agree otherwise in writing. The ADR Rules are available at <a class="text-primary hover:text-primary-100 hover:underline" href="https://www.adrservices.com/">www.adrservices.com</a>. The arbitration shall be heard by one arbitrator selected in accordance with the ADR Rules.',
        },
        {
          id: "dispute-resolution-process",
          title: "Dispute Resolution Process",
          description:
            "The parties agree that, before either party demands arbitration against the other, we will personally meet and confer, via telephone or videoconference, in a good-faith effort to resolve any claim. To notify GYMYG that you intend to initiate this process, you may send an email to that effect to legal@gymyg.fit or, alternatively, give written notice to GYMYG by first class mail to our registered agent for service of process, The Corporation Trust Company, 1209 Orange Street, Wilmington, DE 19801.",
        },
        {
          id: "arbitration-conditions",
          title: "Arbitration Conditions",
          description:
            "Engaging in an informal dispute resolution meet-and-confer conference is a condition precedent that must be fulfilled before commencing arbitration, and the Arbitrator shall dismiss any arbitration demand filed before completion of such conference. At the conclusion of the informal dispute resolution process, a party must provide the other with a written demand for arbitration and file the demand with ADR. Such demand must be formally served on our registered agent for service process, identified above. In addition, an electronic copy of the demand must be emailed to legal@gymyg.fit. Unless otherwise agreed, any arbitration will be conducted either in Los Angeles or remotely.",
        },
      ],
    },
    {
      id: "conduct",
      title: "Trainer Conduct & Requirements",
      icon: Shield,
      content: [
        {
          id: "registration",
          title: "Registration",
          description:
            "You must register and be qualified by GYMYG. Any information you provide to GYMYG must be complete and accurate. You must notify us if any of your information changes. If you fail to keep your account information up-to-date, we may have to suspend or terminate your account and services.",
        },
        {
          id: "profile",
          title: "Profile",
          description:
            "You may not use someone else's name, or any name, location, other public profile, information, or image that violates any third-party rights, is against the law, or that is offensive, obscene, or otherwise objectionable in GYMYG's sole discretion.",
        },
        {
          id: "account-security",
          title: "Account Security",
          description:
            "You are responsible for all activity that occurs under your accounts, including any activity by unauthorized users. You may not allow others to use your account. This includes furnishing your user name and password to third-party developed applications to connect to your account for any reason. If you become aware of unauthorized access to your account, change your password, and notify our support team immediately.",
        },
        {
          id: "third-party-dealings",
          title: "Third-Party Dealings",
          description:
            "When interacting with other GYMYG members, trainers, or partners you should exercise caution and common sense to protect your personal safety and property, just as you would when interacting with other people you don't know. Your participation, correspondence, or personal business dealings with any third-party found on, or through the GYMYG service, whether regarding payment or delivery of specific goods and services, are solely between you and such third-party. You agree that GYMYG is not responsible or liable for any loss, damage, injury, or other matters of any sort incurred as a result of such dealings.",
        },
        {
          id: "prohibited-activities",
          title: "Prohibited Activities",
          description:
            "You agree not to: Infringe, misappropriate, or violate any copyrights, trademark, trade, secret, moral rights, or other intellectual property rights, or right of publicity or privacy; Violate, or encourage any conduct that would violate, any applicable law or regulation, or would give rise to civil liability; Engage in any fraudulent, false, misleading, or deceptive conduct; Engage in any defamatory, obscene, pornographic, vulgar, or offensive conduct; Promote discrimination, bigotry, racism, hatred, harassment, or harm against any individual or group; Engage in or promote violence or actions that are threatening to any person, animal, or entity; Exploit minors; Promote illegal or harmful activities or substances; Violate or circumvent any of GYMYG's published guidelines or policies.",
        },
        {
          id: "content-monitoring",
          title: "Content Monitoring",
          description:
            "Although we are not obligated to monitor access to or use of the GYMYG service or content, or to review or edit any user content, we have the right to do so for the purpose of operating the GYMYG service, to ensure compliance with these terms, to comply with applicable law or other legal requirements, and to maintain the integrity and reputation of the GYMYG service and GYMYG systems. We reserve the right, but are not obligated, to remove or disable access to any user content, at any time and without notice, including, but not limited to, if we, at our sole discretion, consider any user content to be objectionable or in violation of these terms.",
        },
        {
          id: "intellectual-property",
          title: "Intellectual Property",
          description:
            'Content" means text, graphics, images, music, software, audio, video, works of authorship of any kind, and information or other materials that are posted, generated, provided, or otherwise made available through the GYMYG service: and "User Content" means any content that users or trainers, including you, provide to be made available through the GYMYG service. You grant GYMYG a worldwide, perpetual, irrevocable, non-exclusive, sub-license, transferable, royalty free license, and right to use, copy, transmit, distribute, publicly perform and display through all media, now known or later created, edit, modify, and make derivative works from your user content, including without limitation translations for any purpose whatsoever, commercial, or otherwise, without compensation to you.',
        },
      ],
    },
    {
      id: "risk",
      title: "Informed Consent & Assumption of Risk",
      icon: Info,
      content: [
        {
          id: "physical-condition",
          title: "Physical Condition",
          description:
            "You certify that you are of adequate physical condition to lead and participate in physical exercise. You will disclose to GYMYG should you lose your training certification or become unable for any reason to lead training classes or provide virtual training services.",
        },
        {
          id: "risk-assumption",
          title: "Risk Assumption",
          description:
            "You assume the risk of physical injury. You will not hold GYMYG liable for any physical injury, whether minor, severe, or otherwise, that results from the services you provide to GYMYG and its members.",
        },
      ],
    },
    {
      id: "liability",
      title: "Disclaimers & Limitation of Liability",
      icon: Shield,
      content: [
        {
          id: "algorithm-disclaimer",
          title: "Algorithm Disclaimer",
          description:
            "GYMYG's use of algorithms in an attempt to provide services or improve the experience of users (both members and trainers) and the security and safety of the services does not constitute a guarantee or warranty of any kind, express or implied.",
        },
        {
          id: "liability-limitation",
          title: "Liability Limitation",
          description:
            "GYMYG shall not be liable for any damages, liability or losses arising out of your use of, reliance on, or inability to use any part of GYMYG, its platform, or its services. GYMYG shall not be liable for delay or failure in performance resulting from causes beyond GYMYG's reasonable control.",
        },
        {
          id: "consequential-damages",
          title: "Consequential Damages",
          description:
            "GYMYG shall not be liable for indirect, incidental, special, exemplary, punitive or consequential damages, including lost profits, lost data, personal injury, or property damage related to, in connection with, or otherwise resulting from any use of GYMYG, regardless of the negligence of GYMYG, even if it has been advised of the possibility of such damages.",
        },
        {
          id: "indemnification",
          title: "Indemnification",
          description:
            "You agree to indemnify and hold GYMYG harmless from and against any and all actions, claims, demands, losses, liabilities, costs, damages, and expenses (including attorneys' fees), arising out of or in connection with (i) your use of GYMYG or services or goods obtained through your use of GYMYG, (ii) your breach or violation of any of these Terms or GYMYG policies, (iii) GYMYG's use of information provided by you, (iv) your violation of the rights of any third party, (v) your violation of law, or (vi) your failure to competently provide the contracted-for training services.",
        },
      ],
    },
    {
      id: "other-provisions",
      title: "Other Provisions",
      icon: FileText,
      content: [
        {
          id: "entire-agreement",
          title: "Entire Agreement",
          description:
            "This document reflects the entire agreement between the parties and supersedes all prior written and oral representations. The contract may not be amended, altered, or supplemented, except in writing, signed by both GYMYG and the trainer.",
        },
        {
          id: "governing-law",
          title: "Governing Law",
          description:
            "These terms shall be construed in accordance with the laws of the state of California, without regard to the choice of conflict of law principles of any jurisdiction. This choice of law applies only to the interpretation of this agreement, and does not extend any state or national law to you if your dispute does not arise in that state or nation. Any dispute, claim or controversy arising out of incidents or accidents resulting in personal injury that you allege occurred in connection with your use of GYMYG shall be governed by the laws of the forum in which the incident or accident occurred.",
        },
        {
          id: "notices",
          title: "Notices",
          description:
            "GYMYG may give notice to you by means of a general notice on the GYMYG Trainer App, electronic mail to the email address associated with your account, telephone or text message to any phone number provided with your account, or by written communication sent by first class mail to the address associated with your account. Such notice shall be deemed to have been given upon the expiration of 48 hours after mailing or at the time of sending (if by email, telephone, or in the GYMYG Trainer App). You may give notice to GYMYG by first class mail to our registered agent for service of process, The Corporation Trust Company, 1209 Orange Street, Wilmington, DE 19801.",
        },
        {
          id: "severability",
          title: "Severability",
          description:
            "If any provision of this contract shall be held to be invalid, or unenforceable for any reason, the remaining provisions shall continue to be valid and enforceable. If the court finds there any provision of this contract is invalid or unenforceable, but that by limiting such provision, it would become valid and enforceable, then such provision shall be deemed to be written, construed, and enforced as so limited.",
        },
        {
          id: "waiver",
          title: "Waiver",
          description:
            "The failure of either party to enforce any provision of this contract shall not be construed as a waiver or a limitation of that parties right to subsequently enforce and compel strict compliance with every provision of this contract.",
        },
      ],
    },
  ],
};
