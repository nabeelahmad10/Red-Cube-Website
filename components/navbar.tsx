"use client"

import { useState, useEffect } from "react"
import { Menu, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-full overflow-hidden",
        "before:content-[''] before:absolute before:inset-0 before:bg-linear-to-b before:from-white/8 before:to-transparent before:pointer-events-none",
        scrolled
          ? "bg-black/30 backdrop-blur-md border border-white/10 shadow-md shadow-black/20"
          : "bg-black/20 backdrop-blur-md border border-white/10 shadow-sm shadow-black/20",
      )}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-4">
          {/* Left section - Navigation toggle */}
          <button
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            aria-label="Open navigation"
          >
            <ChevronRight className="w-5 h-5" />
            <ChevronRight className="w-5 h-5 -ml-4" />
          </button>

          {/* Center section - Logo/Indicator */}
          <div className="flex-1 flex justify-center">
            <img
              src="/images/logo-cube.png"
              alt="Red Cube Logo"
              className="w-6 h-6 object-contain"
            />
          </div>

          {/* Right section - Menu */}
          <button className="text-white/80 hover:text-white transition-colors" aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}
