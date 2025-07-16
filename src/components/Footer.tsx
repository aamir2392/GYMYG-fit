import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerLinks } from "@/constants/navigation";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-16 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl bg-pink-500/10"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full blur-3xl bg-pink-500/10"></div>

      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand section */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center">
              <Image
                src="/assets/gymyg-logo.png"
                alt="GYMYG"
                width={100}
                height={100}
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The next step in the evolution of virtual fitness. Transforming
              how you experience workouts in the digital age.
            </p>
            <div className="flex space-x-4">
              {footerLinks.socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="bg-gray-800 hover:bg-gray-700 transition-colors p-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-5 w-5 text-primary" />
                  <span className="sr-only">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links sections */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-2  md:grid-cols-3  gap-8">
              {/* First Column */}
              <div className="space-y-4">
                <ul className="space-y-3">
                  {footerLinks.companyLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                        <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Second Column */}
              <div className="space-y-4 ">
                <ul className="space-y-3">
                  {footerLinks.legalLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                        <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4 hidden md:block">
                <h3 className="text-base text-gray-400 font-medium mb-2">
                  Try Out GYMYG
                </h3>
                <div className="space-y-3 md:w-36 lg:w-44">
                  <Link
                    href="https://apps.apple.com/us/app/gymyg-workout/id1660562430"
                    className="flex items-center justify-start gap-3 bg-black hover:bg-gray-900 px-3 py-2.5 text-white rounded-lg border border-gray-600 transition-all duration-200 hover:border-primary/50 group w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaApple className="w-6 h-6 text-white group-hover:scale-110 transition-transform flex-shrink-0" />
                    <div className="flex flex-col items-start min-w-0">
                      <span className="text-[10px] text-gray-300 leading-tight">
                        Download on
                      </span>
                      <span className="text-base font-semibold leading-tight text-white">
                        App Store
                      </span>
                    </div>
                  </Link>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.gymygclient&pcampaignid=web_share&pli=1"
                    className="flex items-center justify-start gap-3 bg-black hover:bg-gray-900 text-white px-3 py-2.5 rounded-lg border border-gray-600 transition-all duration-200 hover:border-primary/50 group w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGooglePlay className="w-5 h-5 text-white group-hover:scale-110 transition-transform flex-shrink-0" />
                    <div className="flex flex-col items-start min-w-0">
                      <span className="text-[10px] text-gray-300 leading-tight">
                        GET IT ON
                      </span>
                      <span className="text-base font-semibold leading-tight text-white">
                        Google Play
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-sm:mt-6 md:hidden">
              <div className="gap-3 w-full flex flex-col">
                <Link
                  href="https://apps.apple.com/us/app/gymyg-workout/id1660562430"
                  className="flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-4 py-3 rounded-xl border border-gray-700 transition-all duration-200 hover:border-primary/50 group h-16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaApple className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-gray-300">
                      Download on the
                    </span>
                    <span className="text-lg font-semibold leading-tight">
                      App Store
                    </span>
                  </div>
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.gymygclient&pcampaignid=web_share&pli=1"
                  className="flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-4 py-3 rounded-xl border border-gray-700 transition-all duration-200 hover:border-primary/50 group h-16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGooglePlay className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-gray-300">GET IT ON</span>
                    <span className="text-lg font-semibold leading-tight">
                      Google Play
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Special Links */}
            {/* <div className="mt-8 space-y-3">
              {footerLinks.specialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div> */}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GYMYG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
