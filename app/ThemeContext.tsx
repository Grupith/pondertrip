"use client"
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react"

interface ThemeContextProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      // Initialize dark mode from localStorage if available, or default to false
      const savedDarkMode = localStorage.getItem("darkMode")
      return savedDarkMode ? JSON.parse(savedDarkMode) : false
    } else {
      return false // Default to false if localStorage is not available
    }
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Save dark mode preference to localStorage
      localStorage.setItem("darkMode", JSON.stringify(darkMode))
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode: boolean) => !prevDarkMode)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
