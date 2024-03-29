"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuth } from "./providers/FirebaseContext"
import ThemeSwitch from "./components/ThemeSwitch"

export default function Home() {
  const { user } = useAuth()
  const router = useRouter()
  //If user is logged in already, skip landing page and navigate to dashboard
  useEffect(() => {
    if (user) {
      router.push("/dashboard")
    }
  }, [user, router])
  return (
    <main>
      <div className="pt-2 min-h-screen overflow-hidden bg-neutral-100 dark:bg-slate-900 dark:text-white">
        <nav className="px-2 mt-2 flex justify-between sm:justify-around items-center">
          <div className="flex items-center space-x-1 cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
            <span className="text-2xl font-medium">pondertrip</span>
          </div>
          <div className="flex items-center space-x-4">
            {/* Dark Mode Switcher */}
            <ThemeSwitch />
            <Link href="/register">
              <button className="text-md font-medium rounded-md shadow-md bg-blue-600 dark:bg-blue-700 px-4 py-1 hover:scale-105 transition-all text-white">
                Try Beta 1.0
              </button>
            </Link>
          </div>
        </nav>
        {/* Hero Section */}
        <h3 className="text-center text-4xl mt-20 font-medium dark:text-white">
          What we do, is in our name
        </h3>
        <div className="flex justify-evenly mt-16 flex-wrap space-y-8 sm:space-y-0 dark:text-slate-200">
          <div className="w-80 p-6 rounded-lg shadow-lg bg-white dark:bg-slate-800">
            <h2 className="text-3xl font-extrabold mb-2">Ponder</h2>
            <p className="text-lg italic">noun</p>
            <p className="text-lg">To think deeply about something.</p>
          </div>
          <div className="w-80 p-6 rounded-lg shadow-lg bg-white dark:bg-slate-800">
            <h2 className="text-3xl font-extrabold mb-2">Trip</h2>
            <p className="text-lg italic">noun</p>
            <p className="text-lg">
              An act of going to a place and returning; a journey or excursion,
              especially for pleasure.
            </p>
          </div>
        </div>
        <h3 className="text-center text-4xl mt-20 font-medium">
          Organize all your trips with ease
        </h3>
        <div className="flex justify-center mt-10">Screenshots of app here</div>
      </div>
      <footer className="font-semibold text-sm text-center py-2 bg-neutral-100 shadow-md dark:bg-slate-900 dark:text-gray-300">
        <span>© 2024 Pondertrip. All rights reserved.</span>
      </footer>
    </main>
  )
}
