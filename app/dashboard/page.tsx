"use client"
import React from "react"
import PrivatePage from "../components/PrivatePage"
import { LuPlus } from "react-icons/lu"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const router = useRouter()
  const handleCreateTrip = () => {
    router.push("/dashboard/create")
  }
  return (
    <PrivatePage>
      <div className="pt-12 sm:ml-64 min-h-screen overflow-hidden bg-white dark:bg-gray-800 dark:text-white">
        {/* All dashboard page content in main */}
        <main className="mx-2 sm:ml-14">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1">
            Dashboard
          </h2>
          <p className="text-md text-gray-600 font-medium dark:text-gray-400">
            Create, view and edit all your trips here!
          </p>
          <section className="mt-6">
            <div
              onClick={handleCreateTrip}
              className="bg-green-600/25 border border-green-800/20 h-80 shadow-md rounded-lg p-2 w-64 flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-all"
            >
              <LuPlus className="text-xl text-green-800" />
              <span className="text-lg text-green-800 font-medium">
                Add Trip
              </span>
            </div>
          </section>
        </main>
      </div>
    </PrivatePage>
  )
}
