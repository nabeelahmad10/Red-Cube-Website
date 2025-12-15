import Image from "next/image"

interface GameThumbnailProps {
  image: string
  title: string
}

export function GameThumbnail({ image, title }: GameThumbnailProps) {
  return (
    <div className="relative w-24 h-32 rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
    </div>
  )
}
