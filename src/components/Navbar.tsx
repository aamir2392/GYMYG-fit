"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { mobileNavLinks, navLinks } from "@/constants/navigation";

// Client component for mobile menu
function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className="">
        <div className="bg-black/60 backdrop-blur-lg rounded-b-3xl shadow-2xl -mt-1 relative border-t border-white/5">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="py-6">
            <nav className="flex flex-col items-center space-y-4">
              {mobileNavLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={cn(
                      "text-white hover:text-primary font-medium transition-all duration-300 py-3 w-full rounded-xl hover:bg-white/5 group",
                      "transform transition-transform duration-500 ease-out",
                      isOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0",
                      isActive && "text-primary"
                    )}
                    style={{
                      transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      setTimeout(() => {
                        onClose();
                        window.location.href = link.href;
                      }, 300);
                    }}
                  >
                    <p className="flex items-center justify-center w-full gap-2 group-hover:scale-105 transition-transform duration-200">
                      <link.icon
                        className={cn("h-5 w-5", isActive && "text-primary")}
                      />
                      {link.title}
                    </p>
                  </Link>
                );
              })}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-2" />
              <Button
                className={cn(
                  "bg-primary  hover:bg-primary-100 text-white  py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25",
                  "transform transition-transform duration-500 ease-out",
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                )}
                style={{
                  transitionDelay: isOpen
                    ? `${mobileNavLinks.length * 100}ms`
                    : "0ms",
                }}
                onClick={() => {
                  window.location.href = "/gymyg-for-trainers";
                }}
              >
                GYMYG for TRAINERS
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

// Client component for the navbar content
function NavbarContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const pathname = usePathname();

  // Handle scroll event to show/hide navbar and close mobile menu
  useEffect(() => {
    const controlNavbar = () => {
      const heroSection = document.querySelector("#hero") as HTMLElement;
      const heroBottom = heroSection?.getBoundingClientRect().bottom ?? 0;
      const currentScrollY = window.scrollY;

      // Close mobile menu when scrolling down
      if (currentScrollY > lastScrollY && isMobileMenuOpen) {
        // Add a small delay to make the transition feel more natural
        setTimeout(() => {
          setIsMobileMenuOpen(false);
        }, 100);
      }

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > heroBottom) {
        setIsNavbarVisible(false); // Scroll down
      } else if (currentScrollY < lastScrollY) {
        setIsNavbarVisible(true); // Scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="lg:py-6">
        <div
          className={cn(
            "container mx-auto px-6 bg-black/60 lg:rounded-full  max-w-5xl py-4 transition-all backdrop-blur-lg duration-300"
          )}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-24">
                <div>
                  <Image
                    src="/assets/gymyg-logo.png"
                    height={150}
                    width={200}
                    alt="GYMYG Logo"
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={cn(
                      "font-medium transition-all duration-300 hover:text-primary",
                      isActive ? "text-primary" : "text-white"
                    )}
                  >
                    <p className="flex items-center gap-2">
                      <link.icon
                        className={cn("h-5 w-5", isActive && "text-primary")}
                      />
                      {link.title}
                    </p>
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <Button
                onClick={() => {
                  window.location.href = "/gymyg-for-trainers";
                }}
                className="bg-primary hover:bg-primary-100 py-5 font-semiboldbold  text-white"
              >
                GYMYG for TRAINERS
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "lg:hidden transition-transform duration-300 ease-in-out",
                isMobileMenuOpen && "rotate-180"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
}

// Main server component
export default function Navbar() {
  return <NavbarContent />;
}
