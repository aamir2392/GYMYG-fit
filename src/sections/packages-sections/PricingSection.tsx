"use client";

import { motion, useAnimate, useInView } from "framer-motion";
import { CalendarClock, Check, CreditCard, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { pricingPlans } from "@/constants/pricing";
import { client } from "@/sanity/lib/client";
import { packagesPricingQuery } from "@/sanity/lib/queries";
import {
  PackagesPricingData,
  PackagesPricingPlan,
} from "@/types/packagesPricing";

// Type for fallback data that includes popularPlanIndex
interface FallbackPricingData extends PackagesPricingData {
  popularPlanIndex?: number;
}

// Client component for the pricing card
function PricingCard({
  plan,
  index,
}: {
  plan: PackagesPricingPlan;
  index: number;
}) {
  const badgeRef = useRef(null);
  const isInView = useInView(badgeRef, { once: false, amount: 0.5 });
  const [badgeScope, animateBadge] = useAnimate();

  useEffect(() => {
    if (isInView && plan.popular) {
      animateBadge(
        badgeScope.current,
        {
          boxShadow: [
            "0 0 0px rgba(var(--primary-rgb), 0.4)",
            "0 0 15px rgba(var(--primary-rgb), 0.7)",
            "0 0 0px rgba(var(--primary-rgb), 0.4)",
          ],
        },
        { duration: 2, repeat: 3, ease: "easeInOut" }
      );
    }
  }, [isInView, animateBadge, plan.popular]);

  // Determine if this is a subscription plan based on the type field
  const isSubscription = plan.type === "subscription";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        "relative rounded-2xl overflow-hidden",
        "bg-white dark:bg-slate-900",
        "border border-slate-200 dark:border-slate-800",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        "flex flex-col h-full",
        plan.popular && "ring-2 ring-primary"
      )}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0" ref={badgeRef}>
          <motion.div
            ref={badgeScope}
            className="relative overflow-hidden bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg"
            style={
              {
                "--primary-rgb": "var(--primary)",
              } as React.CSSProperties & { "--primary-rgb": string }
            }
          >
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ x: "-100%" }}
              animate={isInView ? { x: "100%" } : { x: "-100%" }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.5,
                repeat: 2,
                repeatDelay: 1,
              }}
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                zIndex: 1,
              }}
            />
            BEST DEAL
          </motion.div>
        </div>
      )}

      {/* Payment type badge */}
      <div className="absolute top-0 left-0 p-2">
        <div
          className={cn(
            "flex items-center rounded-lg px-3 py-1.5 md:mt-5 lg:mt-0 text-xs font-medium",
            isSubscription
              ? "bg-emerald-500 text-white font-semibold dark:bg-emerald-950/40 dark:text-white"
              : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          )}
        >
          {isSubscription ? (
            <>
              <CalendarClock className="w-3 h-3 mr-1.5" />
              Monthly Subscription
            </>
          ) : (
            <>
              <CreditCard className="w-3 h-3 mr-1.5" />
              One-Time Purchase
            </>
          )}
        </div>
      </div>

      <div className="p-6 md:p lg:p-8 flex-grow mt-8">
        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {plan.description}
        </p>

        {plan.pricePerClass && (
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
            ${plan.pricePerClass}/class
          </p>
        )}

        <div className="flex items-end mb-6">
          <span className="text-3xl font-bold">$</span>
          <span className="text-5xl font-bold">{plan.price}</span>
          {plan.priceText && (
            <span className="text-slate-500 dark:text-slate-400 ml-1">
              {plan.priceText}
            </span>
          )}
        </div>

        <ul className="space-y-3 mb-8 md:mb-4">
          {plan.features.map((feature: string, i: number) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              className="flex items-start"
            >
              <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
              <span className="text-slate-700 dark:text-slate-300 text-sm">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="p-6 md:p-2 lg:p-8 pt-0">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "w-full py-3 px-4 rounded-lg font-medium transition-all duration-200",
            "flex items-center justify-center",
            plan.popular
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
          )}
        >
          {plan.popular && <Sparkles className="w-4 h-4 mr-2" />}
          {plan.cta}
        </motion.button>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br opacity-5 pointer-events-none" />
    </motion.div>
  );
}

// Client component for the pricing cards container
function PricingCardsContainer({
  plans,
  popularPlanIndex,
}: {
  plans: PackagesPricingPlan[];
  popularPlanIndex?: number;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {plans.map((plan, index) => {
        // Use the plan's popular field if available, otherwise fall back to popularPlanIndex
        const enhancedPlan = {
          ...plan,
          popular:
            plan.popular !== undefined
              ? plan.popular
              : popularPlanIndex === index,
        };
        return (
          <PricingCard key={plan.name} plan={enhancedPlan} index={index} />
        );
      })}
    </div>
  );
}

// Main server component
export default function PricingSection() {
  const [data, setData] = useState<PackagesPricingData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(packagesPricingQuery);
        setData(result);
      } catch (error) {
        console.error("Error fetching packages pricing data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fallback data only when there's an error
  const fallbackData: FallbackPricingData = {
    sectionTitle:
      "Plans That Move With You\n10 | 20 | Unlimited Monthly Classes",
    sectionDescription:
      "Choose the package that fits your lifestyle. All packages include access to our global community and real-time interaction with certified trainers.",
    popularPlanIndex: 1, // Make the second plan (20 Pack) popular by default
    pricingPlans: pricingPlans,
    isActive: true,
  };

  // Always use fallback data if Sanity data is not available
  const content = data || fallbackData;

  if (isLoading) {
    return (
      <section
        id="pricing-section"
        className="w-full py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
          {/* Loading skeleton for pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-white rounded-2xl p-6 h-96">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-full mb-6"></div>
                  <div className="h-12 bg-gray-300 rounded w-1/2 mb-6"></div>
                  <div className="space-y-2 mb-6">
                    {[1, 2, 3, 4].map((j) => (
                      <div
                        key={j}
                        className="h-4 bg-gray-300 rounded w-full"
                      ></div>
                    ))}
                  </div>
                  <div className="h-10 bg-gray-300 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="pricing-section"
      className="w-full py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold mb-4 whitespace-pre-line">
            {content.sectionTitle}
          </h2>
          <p className="text-sm md:text-base lg:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {content.sectionDescription}
          </p>
        </div>

        {/* Payment type legend */}
        <div className="flex justify-center gap-6 my-6 bg-white rounded-full p-2 max-w-96 mx-auto">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-slate-400 mr-2"></div>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              One-Time Purchase
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Monthly Subscription
            </span>
          </div>
        </div>
        <PricingCardsContainer
          plans={content.pricingPlans}
          popularPlanIndex={
            data ? undefined : (content as FallbackPricingData).popularPlanIndex
          }
        />
      </div>
    </section>
  );
}
