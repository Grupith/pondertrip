"use client"
import React from "react"
import { useAuth } from "../providers/FirebaseContext"
import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import { useAlert } from "../providers/AlertContext"
import { useModal } from "../providers/ModalContext"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface SidebarProps {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const { signOut, user } = useAuth()
  const { showAlert } = useAlert()
  const { openModal, closeModal } = useModal()
  const router = useRouter()

  const handleSignOut = () => {
    openModal(
      "Confirm Logout",
      <p>Are you sure you want to logout of your account?</p>,
      () => {
        signOut()
        showAlert("User signed out successfully!", "info")
        router.push("/")
        closeModal()
      },
      () => {
        closeModal()
      }
    )
  }

  return (
    <div className={`bg-gray-200 dark:bg-gray-800`}>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        onClick={toggleSidebar}
        type="button"
        className="fixed p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed bg-white dark:bg-gray-800 top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "" : "-translate-x-full"
        } sm:translate-x-0 fade-in-0 animate-in animate-out duration-500`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 m-2 rounded-lg shadow-md flex flex-col justify-between overflow-y-auto border dark:border-gray-700/50 bg-gray-100 dark:bg-gray-900/50">
          <div>
            <section>
              <div className="flex items-center justify-between space-x-1 cursor-pointer mb-4 text-black dark:text-white">
                <div className="flex items-center sm:ml-1">
                  <Image
                    src="favicon.ico"
                    alt="logo"
                    width={20}
                    height={20}
                    className="mr-1"
                    priority
                  />
                  <span className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    pondertrip
                  </span>
                </div>
                <button
                  data-drawer-target="default-sidebar"
                  data-drawer-toggle="default-sidebar"
                  aria-controls="default-sidebar"
                  onClick={toggleSidebar}
                  type="button"
                  className="inline-flex items-center p-1 ml-1 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </button>
              </div>
            </section>
            {/* Sidebar Buttons */}
            <ul className="space-y-2 font-medium">
              <li onClick={toggleSidebar}>
                <Link
                  href="/dashboard"
                  className="flex items-center p-2 text-gray-900 rounded-md dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Dashboard
                  </span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-black bg-yellow-400 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    3
                  </span>
                </Link>
              </li>

              <li onClick={toggleSidebar}>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center p-2 text-gray-900 rounded-md dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Settings
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-md dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap line-through">
                    PonderPro
                  </span>
                </a>
              </li>
              <li onClick={handleSignOut}>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-md dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-around items-center">
            <p className="dark:text-gray-300 text-sm">
              Signed in as{" "}
              <span className="text-blue-500 font-semibold">
                {user ? user.email : "Loading..."}
              </span>
            </p>
            <ThemeSwitch />
          </div>
        </div>
      </aside>
    </div>
  )
}
export default Sidebar
