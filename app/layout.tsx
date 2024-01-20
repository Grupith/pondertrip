import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./ThemeContext"
import { AuthProvider } from "./FirebaseContext"

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
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
