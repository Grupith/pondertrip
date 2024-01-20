"use client"
import { useTheme } from "@/app/ThemeContext"
import Sidebar from "@/app/components/Sidebar"
import React from "react"

export default function Settings() {
  const { darkMode } = useTheme()
  return (
    <div>
      <Sidebar />
      <main className={`${darkMode ? "dark" : ""} `}>
        <div className="pt-2 min-h-screen overflow-hidden fade-in-0 animate-in animate-out duration-700 bg-gray-200 dark:bg-slate-900 dark:text-white">
          {/* Settings View */}
          <h1 className="ml-64">Settings</h1>
        </div>
      </main>
    </div>
  )
}
