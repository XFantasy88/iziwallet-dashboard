import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const urbanist = Urbanist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IZI Wallet",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[linear-gradient(193deg,#1D0041_0%,#140028_100%)] overflow-x-hidden ${urbanist.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
