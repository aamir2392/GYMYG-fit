"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { guidelinesData } from "@/constants/community-guidelines";
import { motion, AnimatePresence } from "framer-motion";

type Guideline = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  summary: string;
  content: string[];
};

type GuidelineAccordionProps = {
  guideline: Guideline;
  isOpen: boolean;
  toggleAccordion: () => void;
};

// Accordion component for guidelines
function GuidelineAccordion({
  guideline,
  isOpen,
  toggleAccordion,
}: GuidelineAccordionProps) {
  return (
    <Card className="mb-4 overflow-hidden border-0 shadow-sm transition-all hover:shadow-md">
      <div
        className="flex cursor-pointer items-center justify-between p-4"
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-3">
          <guideline.icon className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold">{guideline.title}</h3>
        </div>
        <div>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <CardContent className="border-t bg-gray-50 px-4 py-4">
              {guideline.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-3 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

export function CommunityGuidelines() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("respect");

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image
            src="/assets/gym-background.jpg"
            alt="Gym interior"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 text-center md:px-6">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {guidelinesData.hero.title}
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/90">
            {guidelinesData.hero.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            {/* Introduction */}
            <div className="mb-12 text-center">
              {guidelinesData.introduction.text.map((paragraph, i) => (
                <p key={i} className="mb-4 text-lg text-gray-700">
                  {paragraph.includes("GYMYG") ? (
                    <>
                      {paragraph.split("GYMYG").map((part, j) => (
                        <span key={j}>
                          {j > 0 && (
                            <span className="font-semibold text-primary">
                              GYMYG
                            </span>
                          )}
                          {part}
                        </span>
                      ))}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>

            {/* Guidelines Tabs for Mobile */}
            <div className="mb-8 md:hidden">
              <Tabs defaultValue="respect" className="w-full ">
                <TabsList className="mb-10 grid grid-cols-2 h-full  w-full  items-center gap-2">
                  {guidelinesData.guidelines.map((guideline) => (
                    <TabsTrigger
                      key={guideline.id}
                      value={guideline.id}
                      className="text-xs text-gray-700 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
                    >
                      {guideline.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {guidelinesData.guidelines.map((guideline) => (
                  <TabsContent
                    key={guideline.id}
                    value={guideline.id}
                    className="mt-4 "
                  >
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <guideline.icon className="h-6 w-6 text-primary" />
                          <h3 className="font-semibold">{guideline.title}</h3>
                        </div>
                        {guideline.content.map((paragraph, i) => (
                          <p key={i} className="mb-3 text-sm text-gray-700">
                            {paragraph}
                          </p>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            {/* Guidelines Accordion for Desktop */}
            <div className="hidden md:block">
              {guidelinesData.guidelines.map((guideline) => (
                <GuidelineAccordion
                  key={guideline.id}
                  guideline={guideline}
                  isOpen={openAccordion === guideline.id}
                  toggleAccordion={() => toggleAccordion(guideline.id)}
                />
              ))}
            </div>

            {/* Important Notice */}
            <div className="mt-12 rounded-lg bg-gray-50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <h3 className="font-semibold">Important Notice</h3>
              </div>
              {guidelinesData.conclusion.text.map((paragraph, i) => (
                <p key={i} className="mb-3 text-gray-700">
                  {paragraph.includes("GYMYG") ? (
                    <>
                      {paragraph.split("GYMYG").map((part, j) => (
                        <span key={j}>
                          {j > 0 && (
                            <span className="font-semibold text-primary">
                              GYMYG
                            </span>
                          )}
                          {part}
                        </span>
                      ))}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
