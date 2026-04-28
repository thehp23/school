"use client";

import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants/navLink";
import { NavLink } from "@/types";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full shadow-md bg-[#0060aa] text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <div className="w-auto">
          <Image
            src="/intro-images/logo.png"
            alt="Logo"
            width={110}
            height={45}
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link: NavLink) => {
            const isActive = pathname === link.href;

            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {!link.dropdown ? (
                  <Link
                    href={link.href || "#"}
                    className={`text-sm font-semibold uppercase whitespace-nowrap transition-all ${
                      isActive
                        ? "text-yellow-400"
                        : "hover:text-yellow-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <>
                    <button className="flex items-center gap-1 text-sm font-semibold uppercase">
                      {link.name}
                      <ChevronDown size={16} />
                    </button>

                    {openDropdown === link.name && (
                      <div className="absolute top-full mt-2 w-52 bg-white text-black shadow-lg rounded-md z-50">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0060aa] px-6 pb-4 space-y-3">
          {navLinks.map((link: NavLink) => (
            <div key={link.name}>
              {!link.dropdown ? (
                <Link
                  href={link.href || "#"}
                  className="block text-sm font-semibold uppercase py-2 border-b border-white/20"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <>
                  <p className="text-sm font-semibold uppercase py-2">
                    {link.name}
                  </p>
                  <div className="pl-4">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-sm py-1 text-white/80"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;