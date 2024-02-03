import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "./providers/FirebaseContext"
import Provider from "./providers/ThemeContext"
import { AlertProvider } from "./providers/AlertContext"
import Alert from "./components/Alert"
import { ModalProvider } from "./providers/ModalContext"

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
          <AlertProvider>
            <Provider>
              <ModalProvider>
                <Alert />
                {children}
              </ModalProvider>
            </Provider>
          </AlertProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
