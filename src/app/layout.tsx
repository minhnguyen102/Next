import Header from "./_partials/Header"
import Footer from "./_partials/Footer"
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