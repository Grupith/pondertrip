import Link from "next/link"
import React from "react"

export default function Terms() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Link href="/">
        <div className="flex items-center justify-center pt-4 space-x-1 cursor-pointer mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
          <span className="text-3xl font-medium">pondertrip</span>
        </div>
      </Link>
      <h1 className="text-xl text-center py-4">Terms and Conditions</h1>
    </div>
  )
}
