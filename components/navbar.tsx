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
        "fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-full",
        scrolled ? "bg-white/15 backdrop-blur-md" : "bg-black/60 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4 py-3">
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
