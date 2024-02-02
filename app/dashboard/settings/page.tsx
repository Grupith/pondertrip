"use client"
import { useAuth } from "@/app/FirebaseContext"
import { useTheme } from "@/app/ThemeContext"
import React from "react"

export default function Settings() {
  const { darkMode } = useTheme()
  const { user } = useAuth()
  return (
    <div>
      <main className={`${darkMode ? "dark" : ""} `}>
        <div className="pt-12 sm:pt-1 min-h-screen overflow-hidden bg-gray-200 dark:bg-slate-900 dark:text-white">
          {/* Settings View */}
          <div className="p-2 sm:p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-slate-900">
              <div className="grid grid-cols-3 gap-4 mb-4">
                {/* Repeat this block as needed */}
                <div className="flex items-center justify-center h-20 w-64 sm:w-fit sm:px-16 rounded-2xl bg-slate-50 dark:bg-gray-800 shadow-sm">
                  <p className="text-2xl font-bold text-black dark:text-gray-300 text-center">
                    Settings
                  </p>
                </div>

                {/* End of repeatable block */}
              </div>
              <div className=" p-4 h-48 mb-4 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border dark:border-gray-800">
                <p className="text-md text-gray-800 dark:text-gray-300 mb-1">
                  Account Email
                </p>
                <p className="font-normal text-xl text-gray-800 dark:text-white">
                  {user && user.email}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Repeat this block as needed */}
                <div className="flex items-center justify-center rounded-2xl bg-gray-50 h-28 dark:bg-gray-800 shadow-sm border dark:border-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg
                      className="w-3.5 h-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </p>
                </div>
                {/* End of repeatable block */}
              </div>
              <div className="flex items-center justify-center h-48 mb-4 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* Repeat this block as needed */}
                <div className="flex items-center justify-center rounded-2xl bg-gray-50 h-28 dark:bg-gray-800 shadow-sm border dark:border-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg
                      className="w-3.5 h-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </p>
                </div>
                {/* End of repeatable block */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
