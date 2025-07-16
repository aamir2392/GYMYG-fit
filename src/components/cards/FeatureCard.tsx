import Image from "next/image";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
}

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl?: string; // For backward compatibility
  image?: SanityImage; // Sanity image object
  imageAlt: string;
  bgColor?: string;
  textColor?: string;
}

export default function FeatureCard({
  title,
  description,
  imageUrl,
  image,
  imageAlt,
  bgColor = "bg-white",
  textColor = "text-gray-800",
}: FeatureCardProps) {
  // Determine the image source (Sanity or static)
  const imageSource = image ? urlFor(image).url() : imageUrl;

  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-[1.02] hover:duration-300",
        textColor
      )}
    >
      <div
        className="relative h-64 lg:h-[450px]
      "
      >
        <Image
          src={imageSource || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className=" object-fill lg:object-cover "
        />
      </div>
      <div className={`p-6 md:p-8 ${bgColor} h-full`}>
        <h3 className="text-xl md:text-xl lg:text-3xl font-bold mb-4">
          {title}
        </h3>
        <p className="text-sm md:text-base opacity-90">{description}</p>
      </div>
    </div>
  );
}
