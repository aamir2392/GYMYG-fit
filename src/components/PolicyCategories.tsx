import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type CategoryCardProps = {
  title: string;
  description?: string;
  icon: React.ComponentType<{ className?: string }>;
  imageSrc: string;
  buttonText: string;
  buttonVariant: "primary" | "white";
  path: string;
};

const CategoryCard = ({
  title,
  description,
  icon: Icon,
  imageSrc,
  buttonText,
  path,
}: CategoryCardProps) => {
  return (
    <div className="group relative lg:overflow-hidden rounded-xl">
      <div className="absolute  inset-0 z-0">
        <Image
          src={imageSrc}
          alt={`${title} category image`}
          fill
          className="max-sm:rounded-xl object-cover  transition-transform duration-500 group-hover:scale-105"
        />
        <div className="max-sm:rounded-xl absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-end p-8 text-white">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Icon className="h-5 w-5" />
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <p className="text-white/80">{description}</p>
          <Link href={path}>
            <Button
              className={`w-full sm:w-auto mt-4  bg-primary hover:bg-primary-100`}
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const PolicyCategories = ({
  title,
  description,
  data,
}: {
  title: string;
  description?: string;
  data: CategoryCardProps[];
}) => {
  return (
    <section className="border-t">
      <div className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>

        <div className="grid h-96 grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((category: CategoryCardProps) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicyCategories;
