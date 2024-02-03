"use client"
import React from "react"
import { motion } from "framer-motion"
import { useModal } from "../providers/ModalContext"

interface ModalProps {
  title: string
  body: string
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
        className="bg-gray-100 rounded-lg p-5 dark:bg-slate-800"
        onClick={(e) => e.stopPropagation()} // Prevent click through
      >
        <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
        <div className="text-sm">{body}</div>
        <div className="mt-4 space-x-4 flex justify-center">
          <button onClick={onCancel} className="mr-2 text-sm">
            No, Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-600 transition-all text-white font-semibold text-sm py-2 px-2 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Yes, I'm sure
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Modal
