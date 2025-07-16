import { Dumbbell, Users } from "lucide-react";

export const categoriesData = [
  {
    title: "Members",
    description:
      "Learn how we protect your personal information, fitness data, and payment details.",
    icon: Users,
    imageSrc: "/assets/members-privacy.jpeg",
    buttonText: "Members Privacy",
    buttonVariant: "primary" as const,
    path: "/privacy-policy/members",
  },
  {
    title: "Trainers",
    description:
      "Understand how we handle your professional information, client data, and payment processing.",
    icon: Dumbbell,
    imageSrc: "/assets/trainers-privacy.jpeg",
    buttonText: "Trainers Privacy",
    buttonVariant: "white" as const,
    path: "/privacy-policy/trainers",
  },
];
