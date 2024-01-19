import type { Metadata } from "next"
import { Cormorant } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant({ subsets: ["latin"] })

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
      <body className={cormorant.className}>
        {children}
        <footer className="font-semibold text-md text-center">
          <span>© 2024 Pondertrip. All rights reserved.</span>
        </footer>
      </body>
    </html>
  )
}
