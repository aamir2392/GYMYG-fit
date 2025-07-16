"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { trainerData } from "@/constants/termsOfServiceData";

export default function TrainerTermsOfService() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const isExpanded = (sectionId: string) =>
    expandedSections.includes(sectionId);

  return (
    <div className="container max-w-4xl mx-auto px-4 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-primary rounded-full">
            <trainerData.header.icons.main className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {trainerData.header.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {trainerData.header.subtitle}
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <trainerData.header.icons.clock className="h-4 w-4" />
            <span>Last updated:</span>
            <div className="flex items-center gap-1">
              <trainerData.header.icons.calendar className="h-4 w-4" />
              <time dateTime={trainerData.header.lastUpdated}>
                {new Date(trainerData.header.lastUpdated).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </time>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <Card className="border-none shadow-lg bg-gradient-to-br from-rose-50 to-white">
          <CardContent className="pt-6">
            {trainerData.introduction.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`${index > 0 ? "mt-4" : ""} leading-relaxed`}
              >
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        {/* Mobile View: Accordion */}
        <div className="md:hidden space-y-4">
          {trainerData.sections.map((section) => (
            <Card
              key={section.id}
              className="overflow-hidden border-none shadow-md"
            >
              <CardHeader
                className="p-4 cursor-pointer bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <section.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-sm font-medium">
                      {section.title}
                    </CardTitle>
                  </div>
                  {isExpanded(section.id) ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </CardHeader>
              {isExpanded(section.id) && (
                <CardContent className="p-4 pt-0 bg-gray-50">
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="space-y-4"
                    >
                      {section.content.map((item) => (
                        <div
                          key={item.id}
                          className="space-y-2 border-l-2 border-rose-200 pl-4"
                        >
                          <h3 className="font-medium text-base">
                            {item.title}
                          </h3>
                          <p
                            className="text-sm text-muted-foreground"
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></p>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Desktop View: Tabs */}
        <div className="hidden md:block">
          <Tabs defaultValue="relationship" className="w-full">
            <TabsList className="grid grid-cols-3 gap-1 mb-8 h-full">
              {trainerData.sections.slice(0, 3).map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="text-xs px-3 py-2 bg-white data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {trainerData.sections.slice(0, 3).map((section) => (
              <TabsContent
                key={section.id}
                value={section.id}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <section.icon className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {section.content.map((item) => (
                    <Card
                      key={item.id}
                      className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow"
                    >
                      <CardHeader className="p-4 pb-2 bg-white">
                        <CardTitle className="text-lg font-medium">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <CardDescription
                          className="text-sm text-muted-foreground"
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Additional sections outside tabs */}
          <div className="space-y-8 mt-12">
            {trainerData.sections.slice(3).map((section) => (
              <div key={section.id} className="space-y-6">
                <div className="flex items-center gap-2 border-b pb-2">
                  <section.icon className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {section.content.map((item) => (
                    <div key={item.id} className="space-y-2">
                      <h3 className="font-medium text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
