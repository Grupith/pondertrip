"use client"
import { useTheme } from "@/app/ThemeContext"
import React, { ChangeEvent, useState } from "react"

interface CreateFormState {
  title: string
  location: string
  image: string
  description: string
  startDate: string
  endDate: string
  people: string
}

const Create: React.FC = () => {
  const { darkMode } = useTheme()
  const [formData, setFormData] = useState<CreateFormState>({
    title: "",
    location: "",
    image: "",
    description: "",
    startDate: "",
    endDate: "",
    people: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <>
      <main className={`${darkMode ? "dark" : ""} `}>
        <div className="pt-12 sm:pt-1 min-h-screen overflow-hidden bg-gray-200 dark:bg-slate-900 dark:text-white">
          {/* Create Trip Form */}
          <form onSubmit={handleSubmit} className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-slate-900">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex items-center justify-center h-20 w-64 sm:w-fit sm:px-16 rounded-2xl bg-slate-50 dark:bg-gray-800 shadow-sm">
                  <p className="text-2xl font-bold text-black dark:text-gray-300 text-center truncate ">
                    Create a Trip
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-4 h-fit mb-4 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-sm">
                <h2 className="text-lg py-4 font-semibold text-gray-600 dark:text-gray-300">
                  Give us some info on your trip. You can always edit these
                  after.
                </h2>
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-md font-semibold text-gray-600 dark:text-gray-300"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="mt-1 p-2 w-full border rounded-md dark:bg-slate-600 dark:border-slate-600"
                    onChange={handleChange}
                    value={formData.title}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="location"
                    className="block text-md font-semibold text-gray-600 dark:text-gray-300"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="mt-1 p-2 w-full border rounded-md dark:bg-slate-600 dark:border-slate-600"
                    onChange={handleChange}
                    value={formData.location}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-md font-semibold text-gray-600 dark:text-gray-300"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    className="mt-1 p-2 w-full border rounded-md dark:bg-slate-600 dark:border-slate-600 "
                    onChange={handleChange}
                    value={formData.description}
                  />
                </div>
                <section className="flex justify-start space-x-10">
                  <div className="mb-4">
                    <label
                      htmlFor="startDate"
                      className="block text-md font-semibold text-gray-600 dark:text-gray-300"
                    >
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      id="startDate"
                      className="mt-1 p-2 w-full border rounded-md dark:bg-slate-600 dark:border-slate-600 "
                      onChange={handleChange}
                      value={formData.startDate}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="endDate"
                      className="block text-md font-semibold text-gray-600 dark:text-gray-300"
                    >
                      End Date
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      id="endDate"
                      className="mt-1 p-2 w-full border rounded-md dark:bg-slate-600 dark:border-slate-600 "
                      onChange={handleChange}
                      value={formData.endDate}
                    />
                  </div>
                </section>
                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-md font-semibold text-gray-600 dark:text-gray-300"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="mt-1 p-2 w-full border rounded-md dark:bg-slate-600 dark:border-slate-600 "
                    onChange={handleChange}
                    value={formData.image}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center rounded-2xl bg-gray-50 h-28 dark:bg-gray-800 shadow-sm">
                  <div>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-9 py-2 rounded-lg shadow-sm hover:scale-105 transition-all"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
export default Create
