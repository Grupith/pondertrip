"use client"
import React, { createContext, useContext, useState } from "react"

interface ModalContextType {
  isOpen: boolean
  title: string
  body: React.ReactNode | null
  onConfirm: () => void
  onCancel: () => void
  openModal: (
    title: string,
    body: React.ReactNode | null,
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
    body: null as React.ReactNode,
    onConfirm: () => {},
    onCancel: () => {},
  })

  const openModal = (
    title: string,
    body: React.ReactNode | null,
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
