
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "../../lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Domains", href: "#domains" },
    { name: "Timeline", href: "#timeline" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveSection(href.slice(1));
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed z-50 w-[95%] top-4 rounded-2xl -translate-x-1/2 left-1/2 border-b border-red-900/20 bg-black/50 backdrop-blur-xl shadow-[0_0_20px_rgba(220,38,38,0.1)]",
          "md:top-4 md:left-1/2 md:w-[65%] md:-translate-x-1/2 lg:rounded-full md:border"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <a 
            href="#home" 
            onClick={(e) => handleClick(e, "#home")}
            className="flex items-center gap-1 cursor-pointer group"
          >
            <Image
              src="/hacksync.png"
              alt="Website Logo"
              width={100}
              height={33}
              className="group-hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.3)] transition-all duration-300"
            />
            <div className="flex items-center">
              <span className="text-red-500 text-2xl font-bold drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]">|</span>
              <span className="text-red-500 text-2xl font-bold drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]">|</span>
            </div>
          </a>

          <div className="hidden items-center gap-1 lg:flex ">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={cn(
                  "rounded-full px-4 py-2 text-lg font-medium text-gray-300 transition-all duration-300 hover:text-red-500 hover:bg-red-950/20 cursor-pointer uppercase tracking-wider",
                  activeSection === link.href.slice(1) && "bg-gradient-to-r from-red-950/30 to-red-900/20 text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.2)]"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-300 hover:text-red-500 transition-colors duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative h-5 w-5">
                <span
                  className={cn(
                    "absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out top-1/2 -translate-y-1/2",
                    isOpen ? "rotate-45 bg-red-500" : "-translate-y-1.5"
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out top-1/2 -translate-y-1/2",
                    isOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out top-1/2 -translate-y-1/2",
                    isOpen ? "-rotate-45 bg-red-500" : "translate-y-1.5"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={cn(
          "fixed left-1/2 top-25 z-50 w-[95%] sm:w-[65%] -translate-x-1/2 rounded-2xl border border-red-900/30 bg-black/50 backdrop-blur-xl transition-all duration-300 ease-out lg:hidden shadow-[0_0_30px_rgba(220,38,38,0.2)]",
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        )}
      >
        <div className="p-6">
          <nav className="flex flex-col gap-1 pt-4 ">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={cn(
                  "flex items-center justify-between rounded-lg p-3 text-gray-300 transition-all duration-200 hover:bg-red-950/20 hover:text-red-500 cursor-pointer uppercase tracking-wider border border-transparent hover:border-red-900/30",
                  "transform transition-all duration-200",
                  activeSection === link.href.slice(1) && "bg-gradient-to-r from-red-950/30 to-red-900/20 text-red-500 border-red-900/40 shadow-[0_0_15px_rgba(220,38,38,0.2)]",
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                )}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <span className="font-medium text-lg">{link.name}</span>

                <span
                  className={cn(
                    "h-2 w-2 rounded-full bg-red-500 transition-all duration-200 shadow-[0_0_8px_rgba(220,38,38,0.6)]",
                    activeSection === link.href.slice(1)
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-75"
                  )}
                />
              </a>
            ))}
          </nav>

          <div className="pt-4 mt-4 border-t border-red-900/20">
            <p className="text-xs text-gray-500 text-center">
              <span className="text-red-500">GDG TSEC</span> © 2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;