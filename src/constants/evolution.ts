import { Video, Users, MessageCircle } from "lucide-react";

export const evolutionCards = [
  {
    title: "Personal Training",
    description:
      "Get personalized attention and form correction from certified trainers who can see you and provide real-time feedback during your workout.",
    imageSrc: "/assets/personal-training.jpg",
    imageAlt: "Personal training session",
    icon: Video,
    delay: 200,
  },
  {
    title: "Group Energy",
    description:
      "Experience the motivation and energy of working out with others in a virtual environment that brings the best aspects of group fitness to your home.",
    imageSrc: "/assets/group-fitness.jpg",
    imageAlt: "Group fitness class",
    icon: Users,
    delay: 300,
  },
  {
    title: "Live Interaction",
    description:
      "Connect with trainers and other members in real-time, creating a supportive community that helps you stay motivated and accountable.",
    imageSrc: "/assets/community-interaction.jpg",
    imageAlt: "Community interaction",
    icon: MessageCircle,
    delay: 400,
  },
];
