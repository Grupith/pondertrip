"use client"
import React, { createContext, useContext, useState } from "react"

interface Alert {
  message: string
  type: "success" | "warning" | "error" | "info"
}

interface AlertContextType {
  alert: Alert | null
  showAlert: (
    message: string,
    type: "success" | "warning" | "error" | "info"
  ) => void
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export const useAlert = () => {
  const context = useContext(AlertContext)
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider")
  }
  return context
}

export const AlertProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [alert, setAlert] = useState<Alert | null>(null)

  const showAlert = (
    message: string,
    type: "success" | "warning" | "error" | "info"
  ) => {
    setAlert({ message, type })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  return (
    <AlertContext.Provider value={{ alert, showAlert }}>
      {children}
    </AlertContext.Provider>
  )
}
