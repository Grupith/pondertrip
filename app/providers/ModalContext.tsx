"use client"
// ModalContext.tsx
import React, { createContext, useContext, useState } from "react"

interface ModalContextType {
  isOpen: boolean
  title: string
  body: string
  onConfirm: () => void
  onCancel: () => void
  openModal: (
    title: string,
    body: string,
    onConfirm: () => void,
    onCancel: () => void
  ) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}

export const ModalProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    body: "",
    onConfirm: () => {},
    onCancel: () => {},
  })

  const openModal = (
    title: string,
    body: string,
    onConfirm: () => void,
    onCancel: () => void
  ) => {
    setModalState({ isOpen: true, title, body, onConfirm, onCancel })
  }

  const closeModal = () => {
    setModalState((prevState) => ({ ...prevState, isOpen: false }))
  }

  return (
    <ModalContext.Provider value={{ ...modalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}
