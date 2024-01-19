import Image from "next/image"
import World from "../public/world.png"

export default function Home() {
  return (
    <main className="mt-2 min-h-screen overflow-hidden">
      <nav className="p-2 flex justify-between sm:justify-around items-center">
        <div className="flex items-center space-x-1">
          <Image
            priority
            src={World}
            alt="pondertrip logo"
            className="h-6 w-6 mt-1"
          />
          <span className="text-3xl font-semibold">pondertrip</span>
        </div>
        <button className="text-lg font-bold border border-black/70 px-3 py-1 hover:bg-gray-100">
          Try For Free!
        </button>
      </nav>
    </main>
  )
}
