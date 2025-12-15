"use client"

import { useEffect, useMemo, useState } from "react"
import { GameCard } from "@/components/game-card"

type HeroSlide = {
  title: string
  subtitle: string
  image: string
  logo?: string
}

export function HeroRotator() {
  const slides: HeroSlide[] = useMemo(
    () => [
      {
        title: "Own the Drift",
        subtitle: "BURN POINT",
        image: "/images/hero-drift.png",
        logo: "/images/burn-point-logo.png",
      },
      {
        title: "Urban Warriors",
        subtitle: "TACTICAL ACTION",
        image: "/images/hero3.png",
      },
      {
        title: "Shadow Operations",
        subtitle: "STEALTH SHOOTER",
        image: "/images/sniper.jpeg",
      },
    ],
    [],
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length)
    }, 3200)

    return () => window.clearInterval(id)
  }, [paused, slides.length])

  const active = slides[activeIndex]

  return (
    <GameCard
      title={active.title}
      subtitle={active.subtitle}
      image={active.image}
      logo={active.logo}
      imageClassName="object-cover object-top"
      progress={{ active: activeIndex, total: slides.length }}
      paused={paused}
      onPauseToggle={() => setPaused((p) => !p)}
    />
  )
}
