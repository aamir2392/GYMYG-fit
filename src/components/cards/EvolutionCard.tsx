import Image from "next/image";
import { LucideIcon, Video, Users, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
}

interface EvolutionCardProps {
  title: string;
  description: string;
  imageSrc?: string; // For backward compatibility
  image?: SanityImage; // Sanity image object
  imageAlt: string;
  icon?: LucideIcon; // For backward compatibility
  iconType?: "video" | "users" | "messageCircle"; // For Sanity data
  link?: string;
  delay: number;
  inView: boolean;
}

// Helper function to get icon component from type
const getIconFromType = (iconType: string): LucideIcon => {
  switch (iconType) {
    case "video":
      return Video;
    case "users":
      return Users;
    case "messageCircle":
      return MessageCircle;
    default:
      return Video;
  }
};

export function EvolutionCard({
  title,
  description,
  imageSrc,
  image,
  imageAlt,
  icon,
  iconType,
  delay,
  inView,
}: EvolutionCardProps) {
  // Determine the image source (Sanity or static)
  const imageSource = image ? urlFor(image).url() : imageSrc;

  // Determine the icon component (Sanity or static)
  const IconComponent = iconType ? getIconFromType(iconType) : icon;

  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-700 hover:shadow-xl",
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        `delay-${delay}`
      )}
    >
      <div className="relative h-[300px] border-1 md:h-[450px] lg:aspect-auto  border-gray-200 rounded-2xl">
        <Image
          src={imageSource || ""}
          alt={imageAlt}
          fill
          className="object-cover max-md:object-left lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 bg-primary rounded-full p-3">
          {IconComponent && <IconComponent className="h-6 w-6 text-white" />}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-4">
          {description}
        </p>
      </div>
    </div>
  );
}
