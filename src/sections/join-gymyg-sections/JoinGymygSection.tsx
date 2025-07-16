"use client";

import type React from "react";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function JoinGymygSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section ref={ref} className="relative  py-12 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0  bg-[url('/assets/download-join-us.jpg')] md:bg-[url('/assets/personal-training.jpg')] bg-cover bg-center md:bg-fill lg:bg-cover lg:bg-center`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-white space-y-3 md:space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            JOIN TODAY
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium"
          >
            NEW MEMBERS GET{" "}
            <span className="bg-white text-primary px-2 py-1 rounded">
              40% OFF
            </span>{" "}
            OF THEIR FIRST PACKAGE PURCHASE
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className=" pt-2 md:pt-6"
          >
            <div className="  rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">Get Started Now</h3>
                    <p className="text-gray-300">
                      Enter your email to receive your special discount code.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="flex-grow px-6 py-4 rounded-full bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                    <Button
                      type="submit"
                      className="bg-primary h-full hover:bg-primary-100 text-white rounded-full py-4 px-8 text-lg font-medium transition-transform hover:scale-[1.02] whitespace-nowrap"
                    >
                      Claim Discount <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  <p className="text-sm text-center text-gray-400">
                    By submitting, you agree to receive marketing emails from
                    GYMYG. You can unsubscribe at any time.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8 bg-black/50 rounded-2xl">
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="h-16 w-16 text-primary-100" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-300 mb-6">
                    Your discount code has been sent to {email}. Check your
                    inbox to claim your 40% off.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-primary hover:bg-primary-100 text-white rounded-full py-4 px-8 text-lg font-medium"
                  >
                    Send Another Code
                  </Button>
                </div>
              )}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-white/80 max-w-lg mx-auto pt-4"
          >
            Only valid for your first purchase. Not applicable for single
            classes purchased in the app. Cannot be combined with any other
            promotions.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3">Personalized Plans</h3>
            <p className="text-white/80">
              Get a fitness plan tailored to your specific goals, fitness level,
              and preferences.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3">Expert Trainers</h3>
            <p className="text-white/80">
              Connect with certified fitness professionals who will guide you
              every step of the way.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3">Community Support</h3>
            <p className="text-white/80">
              Join a community of like-minded individuals who will motivate and
              inspire you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
