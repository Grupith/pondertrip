import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "./FirebaseContext"
import Provider from "./ThemeContext"

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={nunito.className}>
        <AuthProvider>
          <Provider>{children}</Provider>
        </AuthProvider>
      </body>
    </html>
  )
}
