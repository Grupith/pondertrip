"use client"
import React from "react"
import { motion } from "framer-motion"
import { useModal } from "../providers/ModalContext"
import { LuHelpCircle } from "react-icons/lu"

interface ModalProps {
  title: string
  body: React.ReactNode | null
  onCancel: () => void
  onConfirm: () => void
}

const Modal: React.FC<ModalProps> = ({ title, body, onCancel, onConfirm }) => {
  const { isOpen } = useModal()

  if (!isOpen) return null

  const handleBackgroundClick = (e: React.MouseEvent) => {
    e.stopPropagation() // Stop click from closing modal when clicking inside
    onCancel() // Close modal when clicking outside
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black z-50 dark:text-white"
      onClick={handleBackgroundClick} // Close modal on background click
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-100 rounded-lg py-8 px-10 dark:bg-slate-800"
        onClick={(e) => e.stopPropagation()} // Prevent click through
      >
        {title === "Confirm Logout" && (
          <LuHelpCircle className="text-4xl mx-auto mb-2" />
        )}

        <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>
        <div className="text-lg py-2">{body}</div>
        <div className="mt-4 space-x-4 flex justify-center items-center">
          <button onClick={onCancel} className="mr-2 text-md">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-blue-600 hover:bg-blue-500 transition-all text-white font-semibold text-md py-2 px-6 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Logout
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Modal
