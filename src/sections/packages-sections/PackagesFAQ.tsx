"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { productFaqs, clientFaqs, trainerFaqs } from "@/constants/faqData";
import { client } from "@/sanity/lib/client";
import { packagesFAQQuery } from "@/sanity/lib/queries";
import { PackagesFAQData, PackagesFAQCategory } from "@/types/packagesFAQ";

export default function PackagesFAQ() {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("product");
  const [data, setData] = useState<PackagesFAQData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Fallback data if Sanity data is not available
  const fallbackCategories: PackagesFAQCategory[] = [
    { id: "product", label: "Product", faqs: productFaqs },
    { id: "clients", label: "Clients", faqs: clientFaqs },
    { id: "trainers", label: "Trainers", faqs: trainerFaqs },
  ];

  const fallbackData = {
    sectionTitle: "Frequently Asked",
    highlightedWord: "Questions",
    sectionDescription:
      "Everything you need to know about our packages and pricing.",
    faqCategories: fallbackCategories,
  };

  // Always use a new reference for fallbackData to avoid stale state issues
  const [fallback, setFallback] = useState(fallbackData);
  const content = data ? data : fallback;

  // Ensure activeCategory is always valid and update only on category change
  useMemo(() => {
    if (!data) {
      setFallback({
        ...fallbackData,
        faqCategories: fallbackCategories.map((cat) => ({ ...cat })),
      });
    }
  }, [data]);

  useMemo(() => {
    const ids = content.faqCategories.map((cat) => cat.id);
    if (!ids.includes(activeCategory)) {
      setActiveCategory(content.faqCategories[0]?.id || "product");
    }
  }, [content.faqCategories]);

  const getFaqData = () => {
    const activeCategoryData = content.faqCategories.find(
      (cat) => cat.id === activeCategory
    );
    return activeCategoryData?.faqs || content.faqCategories[0]?.faqs || [];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(packagesFAQQuery);
        setData(result);
      } catch (error) {
        console.error("Error fetching packages FAQ data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            observer.disconnect();
            setVisibleItems(["heading", "subheading"]);

            setTimeout(() => {
              setVisibleItems((prev) => [...prev, "categories"]);
            }, 300);

            setTimeout(() => {
              setVisibleItems((prev) => [...prev, "items"]);
            }, 600);
          }
        },
        { threshold: 0.1 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }
  }, [isLoading]);

  useEffect(() => {
    if (window.location.hash === "#FAQs-trainers") {
      setTimeout(() => {
        const element = document.getElementById("FAQs");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      // Try to find "trainers" category, otherwise use first category
      const trainersCategory = content.faqCategories.find(
        (cat) => cat.id === "trainers"
      );
      setActiveCategory(
        trainersCategory
          ? "trainers"
          : content.faqCategories[0]?.id || "product"
      );
    } else {
      // Set the first category as default
      setActiveCategory(content.faqCategories[0]?.id || "product");
    }
  }, [content.faqCategories]);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  if (isLoading) {
    return (
      <section
        id="FAQs"
        className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
      >
        <div className="lg:container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
          <div className="flex justify-center mb-8 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-8 bg-gray-300 rounded-full w-20"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="FAQs"
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      <div className="lg:container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <AnimatePresence>
            {visibleItems.includes("heading") && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight"
              >
                <p>
                  {content.sectionTitle}{" "}
                  <span className="text-primary">
                    {content.highlightedWord}
                  </span>
                </p>
              </motion.h2>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {visibleItems.includes("subheading") && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg"
              >
                {content.sectionDescription}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {visibleItems.includes("categories") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8 gap-4"
            >
              {content.faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={` px-3 py-1 md:px-6 md:py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                    activeCategory === category.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {visibleItems.includes("items") && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6"
            >
              <Accordion type="single" collapsible className="w-full">
                {getFaqData().map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className=" border border-slate-200 rounded-xl mb-4 overflow-hidden hover:text-primary shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                    >
                      <AccordionTrigger className=" px-6 py-5 text-left hover:no-underline data-[state=open]:bg-slate-50 transition-all duration-300">
                        <div className="group flex items-center justify-between w-full">
                          <span className="text-sm md:text-lg font-medium transition-colors duration-200">
                            {item.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm md:text-lg px-6 pb-5 pt-2 text-slate-600 leading-relaxed">
                        <span
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
