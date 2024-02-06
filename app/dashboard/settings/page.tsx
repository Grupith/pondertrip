"use client"
import { useAuth } from "@/app/providers/FirebaseContext"
import React from "react"
import { LuPencil } from "react-icons/lu"

export default function Settings() {
  const { user } = useAuth()
  return (
    <div className="pt-12 sm:ml-64 min-h-screen overflow-hidden bg-white dark:bg-gray-800 dark:text-white">
      {/* All settings page content in main */}
      <main className="mx-2 sm:ml-14">
        <section className="flex justify-between items-center w-4/5">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
              {user?.displayName ? user.displayName : "update name"}
            </h1>
            <h2 className="text-xl font-medium text-gray-600 dark:text-gray-400">
              {user?.email}
            </h2>
          </div>
          <div className="border p-2 rounded-md cursor-pointer text-gray-700 dark:text-gray-300 dark:border-gray-400 shadow-sm">
            <LuPencil className="text-xl" />
          </div>
        </section>
      </main>
    </div>
  )
}
