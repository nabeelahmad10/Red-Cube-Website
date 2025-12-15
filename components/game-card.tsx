import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink } from "lucide-react"

interface GameCardProps {
  title: string
  subtitle: string
  image: string
  logo?: string
  showButtons?: boolean
}

export function GameCard({ title, subtitle, image, logo, showButtons = true }: GameCardProps) {
  return (
    <div className="relative w-full aspect-[9/14] overflow-hidden group" style={{ borderRadius: '24px 24px 48px 48px' }}>
      {/* Background Image */}
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        {/* Logo and Title */}
        <div className="space-y-2 mt-auto">
          {logo && (
            <Image src={logo || "/placeholder.svg"} alt={`${title} logo`} width={80} height={80} className="mb-2" />
          )}
          <p className="text-sm text-white/70 font-medium tracking-wide uppercase">{subtitle}</p>
          <h2 className="text-3xl font-bold text-white text-balance leading-tight">{title}</h2>
        </div>

        {/* Action Buttons */}
        {showButtons && (
          <div className="flex flex-col gap-3 mt-6">
            <Button size="lg" className="w-full bg-white text-black hover:bg-white/90 font-semibold rounded-full">
              <Play className="w-4 h-4 mr-2" />
              Watch Trailer
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full bg-transparent border-2 border-primary text-white hover:bg-primary/20 font-semibold rounded-full"
            >
              Learn More
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

        {/* Progress Indicator */}
        {showButtons && (
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-16 h-1 bg-white rounded-full" />
            <div className="w-16 h-1 bg-white/30 rounded-full" />
            <div className="w-16 h-1 bg-white/30 rounded-full" />
          </div>
        )}
      </div>

      {/* Pause Button */}
      {showButtons && (
        <button
          className="absolute bottom-6 right-6 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
          aria-label="Pause"
        >
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-white rounded-full" />
            <div className="w-1 h-4 bg-white rounded-full" />
          </div>
        </button>
      )}
    </div>
  )
}
