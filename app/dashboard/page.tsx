"use client"
import React from "react"
import { useTheme } from "../ThemeContext"
import { useAuth } from "../FirebaseContext"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const { darkMode } = useTheme()
  const { user, signOut } = useAuth()
  const router = useRouter()
  return (
    <div>
      <main className={`${darkMode ? "dark" : ""} `}>
        <div className="pt-2 min-h-screen overflow-hidden fade-in-0 animate-in animate-out duration-700 bg-neutral-100 dark:bg-slate-900 dark:text-white">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-xl mt-4 font-bold">
              Email: {user && user.email}
            </p>
            <button
              onClick={() => {
                signOut()
                router.push("/")
              }}
              className="mt-4"
            >
              Sign out
            </button>
          </div>
        </div>
        <footer className="font-semibold text-sm text-center py-2 bg-neutral-100 shadow-md dark:bg-slate-900 dark:text-gray-300">
          <span>© 2024 Pondertrip. All rights reserved.</span>
        </footer>
      </main>
    </div>
  )
}
