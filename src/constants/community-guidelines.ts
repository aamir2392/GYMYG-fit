import { Heart, Users, Shield, MessageSquare } from "lucide-react";

export const guidelinesData = {
  hero: {
    title: "Community Guidelines",
    description:
      "Creating a safe, respectful, and positive environment for everyone",
  },
  introduction: {
    text: [
      "Our guidelines were created to ensure that all members and trainers of GYMYG feel safe, respected, and have a great time while using our platform.",
      "We ask that anyone who uses the GYMYG platform follow these guidelines.",
    ],
  },
  guidelines: [
    {
      id: "respect",
      title: "Respect & Inclusivity",
      icon: Heart,
      summary: "Be courteous, kind, and respectful at all times",
      content: [
        "While GYMYG is a platform where we encourage our users to be social with one another, we ask that you be courteous, kind, and respectful at all times.",
        "Hateful, offensive, or obscene speech is strictly prohibited at GYMYG. Please respect personal differences and keep judgments to yourself.",
        "Any User Content (spoken words, usernames, photos, etc.) that promotes, relates to, or condones lack of respect, discrimination or violence based on age, disability status, gender reassignment/identity/expression, marriage and civil partnership, pregnancy and maternity, race, culture, nationality, immigration status, religion or belief, sex, sexual orientation, physical ability, body shape, socio-economic status, or political affiliation is not allowed on our platform.",
      ],
    },
    {
      id: "behavior",
      title: "Positive Behavior",
      icon: Users,
      summary: "No bullying, harassment, or offensive behavior",
      content: [
        "There's just no need for it. Please do not make any other GYMYG member's experience a negative one by bullying, harassing, or offending them.",
        "We strictly prohibit abusive behavior towards all members and trainers, including but not limited to excessive contact, intimidation, harassment, harmful or hurtful language, and any other inappropriate communication.",
      ],
    },
    {
      id: "privacy",
      title: "Member Privacy",
      icon: Shield,
      summary: "Respect personal boundaries and privacy",
      content: [
        "One of our favorite things about GYMYG is the social aspect. We wanted to bring the social experience of going to a gym into our homes so that we could interact and workout with our friends from all over the world.",
        "That said, we all know what it's like when someone at the gym is a little too nosy. No one likes that guy, and no one should be that guy on our platform.",
        "Please respect personal boundaries and exercise caution and common sense when interacting with other members and trainers of GYMYG, just as you would at a real gym or interacting with strangers in real life.",
      ],
    },
    {
      id: "photos",
      title: "Photos & Content",
      icon: MessageSquare,
      summary: "Use accurate profile information and respect others' content",
      content: [
        "All photos on the app are of public images found on Instagram. Please use an accurate name and profile photo from your own Instagram page.",
        "If your photo or profile is being used by someone that is not you or you notice that a member doesn't match their profile, please <a target='_blank' rel='noopener noreferrer' href='/contact-us' class='text-primary hover:text-primary-100 hover:underline'>contact us</a>.",
        "Should you choose to engage, communicate, and/or deal with any members or trainers outside of our platform, GYMYG is not responsible or liable for any loss, damages, injuries, or other matters of any sort incurred as the result of such dealings.",
      ],
    },
  ],
  conclusion: {
    text: [
      "Some of these guidelines won't work for everyone. We get it. But behavior that contradicts our guidelines aren't welcome at GYMYG.",
      "Failure to take these guidelines and our Terms of Services seriously may result in being removed from your class or from accessing the GYMYG platform permanently.",
    ],
  },
  cta: {
    title: "Ready to join our community?",
    description: "Experience workouts with friends from all over the world.",
    buttonText: "Join GYMYG Today",
    buttonLink: "/join",
  },
};
