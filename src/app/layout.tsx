import Header from "./_partials/Header"
import Footer from "./_partials/Footer"
import type { Metadata } from "next"

// metadata basic
export const metadata: Metadata = {
  title: "Tutorial",
  description: "Tutorial to learn NextJS"
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        
        {children}

        <Footer />
      </body>
    </html>
  )
}