import Image from "next/image"
import World from "../public/world.png"

export default function Home() {
  return (
    <main className="mt-2 min-h-screen overflow-hidden">
      <nav className="px-2 mt-2 flex justify-between sm:justify-around items-center">
        <div className="flex items-center space-x-1">
          <Image
            priority
            src={World}
            alt="pondertrip logo"
            className="h-6 w-6 mt-1"
          />
          <span className="text-3xl font-semibold">pondertrip</span>
        </div>
        <button className="text-lg font-bold border border-black/70 px-4 py-0 hover:bg-gray-200 transition-all">
          Try now!
        </button>
      </nav>
      {/* Hero Section */}
      <h3 className="text-center text-3xl mt-20">
        What we do, is in our name.
      </h3>
      <div className="flex justify-evenly mt-16">
        <div className="border border-black/50 w-80 p-2 hover:bg-gray-100 transition-all">
          <h2 className="text-3xl font-semibold mb-2">Ponder</h2>
          <p className="text-lg italic">noun</p>
          <p className="text-lg">To think deeply about something.</p>
        </div>
        <div className="border border-black/50 w-80 p-2 hover:bg-gray-100 transition-all">
          <h2 className="text-3xl font-semibold mb-2">Trip</h2>
          <p className="text-lg italic">noun</p>
          <p className="text-lg">
            An act of going to a place and returning; a journey or excursion,
            especially for pleasure.
          </p>
        </div>
      </div>
      <h3 className="text-center text-3xl mt-20">
        We make trips easy to plan and share with others.
      </h3>
    </main>
  )
}
