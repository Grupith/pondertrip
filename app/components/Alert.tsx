"use client"
import React from "react"
import { motion } from "framer-motion"
import { useAlert } from "../providers/AlertContext"

const Alert: React.FC = () => {
  const { alert } = useAlert()

  return (
    alert && (
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className={`fixed top-0 left-0 right-0 p-4 mx-4 mt-4 rounded-lg shadow-md text-white md:mx-auto md:max-w-md z-10 ${
          alert.type === "success"
            ? "bg-green-500"
            : alert.type === "warning"
            ? "bg-yellow-500"
            : alert.type === "error"
            ? "bg-red-500"
            : "bg-blue-500"
        }`}
      >
        {alert.message}
      </motion.div>
    )
  )
}

export default Alert
