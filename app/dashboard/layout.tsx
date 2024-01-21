"use client"
import { useState } from "react"
import { useTheme } from "../ThemeContext"
import Sidebar from "../components/Sidebar"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const { darkMode } = useTheme()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
    console.log("toggleSidebar Clicked", isSidebarOpen)
  }
  return (
    <div className={`${darkMode ? "dark" : ""} fade-in `}>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {children}
    </div>
  )
}
