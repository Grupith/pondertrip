"use client"
import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Modal from "../components/Modal"
import { useModal } from "../providers/ModalContext"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { isOpen, title, body, onConfirm, onCancel } = useModal()

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }
  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {isOpen && (
        <Modal
          title={title}
          body={body}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      )}
      {children}
    </div>
  )
}
