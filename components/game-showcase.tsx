import { GameThumbnail } from "@/components/game-thumbnail"

const games = [
  { title: "Game 1", image: "/action-game-cover-1.jpg" },
  { title: "Game 2", image: "/racing-game-cover.png" },
  { title: "Game 3", image: "/fps-game-cover.jpg" },
  { title: "Game 4", image: "/adventure-game-cover.jpg" },
  { title: "Game 5", image: "/rpg-game-cover.png" },
  { title: "Game 6", image: "/strategy-game-cover.jpg" },
  { title: "Game 7", image: "/sports-game-cover.jpg" },
  { title: "Game 8", image: "/horror-game-cover.jpg" },
]

export function GameShowcase() {
  const collage = [...games, ...games, ...games]

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-md">
        <div className="flex items-start justify-between gap-6 min-w-0">
          <h2 className="text-3xl font-bold text-white text-balance leading-tight flex-1 min-w-0">
            Committed to
            <br />
            Entertainment.
          </h2>

          <div className="shrink-0 w-48">
            <div className="flex flex-col gap-2 items-end">
              <div className="flex gap-2 justify-end">
                {collage.slice(0, 4).map((game, idx) => (
                  <GameThumbnail key={`r1-${idx}`} image={game.image} title={game.title} className="w-8 h-8 rounded-md" />
                ))}
              </div>
              <div className="flex gap-2 justify-end">
                {collage.slice(4, 10).map((game, idx) => (
                  <GameThumbnail
                    key={`r2-${idx}`}
                    image={game.image}
                    title={game.title}
                    className="w-8 h-8 rounded-md"
                  />
                ))}
              </div>
              <div className="flex gap-2 justify-end">
                {collage.slice(10, 14).map((game, idx) => (
                  <GameThumbnail
                    key={`r3-${idx}`}
                    image={game.image}
                    title={game.title}
                    className="w-8 h-8 rounded-md"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
