import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./ThemeContext"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "pondertrip",
  description: "Plan trips with friends",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
