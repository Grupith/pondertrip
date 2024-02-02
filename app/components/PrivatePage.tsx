"use client"
import React, { ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../FirebaseContext"

interface PrivatePageProps {
  children: ReactNode // Define children prop type
}

const PrivatePage: React.FC<PrivatePageProps> = ({ children }) => {
  const { user } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true) // Loading state

  useEffect(() => {
    if (!user) {
      router.push("/")
      console.log("user not logged in")
    }
    setIsLoading(false)
  }, [user, router])

  return (
    <>
      {isLoading ? (
        <main className="min-h-screen overflow-hidden bg-gray-200 dark:bg-slate-900 dark:text-white pt-16">
          <div className="flex justify-center">
            <div
              className="text-blue-500 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        </main>
      ) : (
        children
      )}
    </>
  )
}

export default PrivatePage
