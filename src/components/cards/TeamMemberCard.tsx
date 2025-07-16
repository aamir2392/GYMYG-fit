import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
}

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string | SanityImage;
}

export function TeamMemberCard({
  name,
  role,
  bio,
  image,
}: TeamMemberCardProps) {
  // Determine the image source (Sanity or static)
  const imageSource = typeof image === "string" ? image : urlFor(image).url();
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-700">
      <div className="relative h-[400px] bg-gray-100 flex items-center justify-center">
        <Image
          src={imageSource || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-1 text-gray-900">{name}</h3>
        <p className="text-primary text-sm mb-4">{role}</p>
        <p className="text-gray-700 text-sm md:text-base mb-4">{bio}</p>
      </div>
    </div>
  );
}
