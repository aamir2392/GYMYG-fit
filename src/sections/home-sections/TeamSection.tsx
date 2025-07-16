"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { teamMembers } from "@/constants/team";
import { TeamMemberCard } from "@/components/cards/TeamMemberCard";
import { type TeamSectionData } from "@/types/teamSection";

export default function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamData, setTeamData] = useState<TeamSectionData | null>(null);
  const [loading, setLoading] = useState(true);

  // Static fallback data
  const staticData = {
    sectionTitle: "Meet the Team",
    sectionDescription:
      "The passionate individuals behind GYMYG who are dedicated to revolutionizing the virtual fitness experience.",
    teamMembers: teamMembers.map((member) => ({
      name: member.name,
      role: member.role,
      bio: member.bio,
      image: member.image,
      imageAlt: member.name,
      isCEO: member.isCEO || false,
    })),
  };

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const query = `*[_type == "teamSection" && isActive == true][0]{
          _id,
          sectionTitle,
          sectionDescription,
          teamMembers[] {
            name,
            role,
            bio,
            image {
              asset->{
                _id,
                url
              }
            },
            imageAlt,
            isCEO
          }
        }`;

        const data = await client.fetch(query);
        setTeamData(data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  // Use Sanity data if available, otherwise fall back to static data
  const dataToRender = teamData || staticData;

  if (loading) {
    return (
      <section
        id="team"
        ref={ref}
        className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="lg:container mx-auto">
          <div className="animate-pulse">
            <div className="text-center mb-16">
              <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
            </div>
            <div className="h-96 bg-gray-200 rounded-2xl mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-96 bg-gray-200 rounded-xl"></div>
              <div className="h-96 bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="team"
      ref={ref}
      className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="lg:container mx-auto">
        <div
          className={cn(
            "text-center mb-16 transform transition-all duration-700",
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {dataToRender.sectionTitle.split(" ").map((word, index) =>
              word === "Team" ? (
                <span key={index} className="text-primary">
                  {word}
                </span>
              ) : (
                word + " "
              )
            )}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto">
            {dataToRender.sectionDescription}
          </p>
        </div>

        {/* CEO Featured Card */}
        {dataToRender.teamMembers
          .filter((member) => member.isCEO)
          .map((ceo, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700",
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              )}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-96 lg:h-[500px]">
                  <Image
                    src={
                      teamData && typeof ceo.image === "object"
                        ? urlFor(ceo.image).url()
                        : (ceo.image as string) || "/placeholder.svg"
                    }
                    alt={ceo.name}
                    fill
                    className="object-cover object-right"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-3xl font-bold mb-2 text-gray-900">
                    {ceo.name}
                  </h3>
                  <p className="text-primary text-xl mb-6">{ceo.role}</p>
                  <p className="text-gray-700 mb-8 text-sm md:text-base ">
                    {ceo.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-12">
          {dataToRender.teamMembers
            .filter((member) => !member.isCEO)
            .map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
        </div>
      </div>
    </section>
  );
}
