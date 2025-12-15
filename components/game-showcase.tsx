import { GameThumbnail } from "./game-thumbnail"

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
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-balance">
          Committed to
          <br />
          Entertainment.
        </h2>

        {/* First Row */}
        <div className="flex gap-3 mb-3 overflow-x-auto pb-2 scrollbar-hide">
          {games.slice(0, 4).map((game, idx) => (
            <GameThumbnail key={idx} {...game} />
          ))}
        </div>

        {/* Second Row */}
        <div className="flex gap-3 mb-3 overflow-x-auto pb-2 scrollbar-hide">
          {games.slice(4, 8).map((game, idx) => (
            <GameThumbnail key={idx} {...game} />
          ))}
        </div>

        {/* Third Row */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {games.slice(0, 4).map((game, idx) => (
            <GameThumbnail key={idx} {...game} />
          ))}
        </div>
      </div>
    </section>
  )
}
