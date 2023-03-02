import Header from '../views/Navbar/Header'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <>
        <title>Thoughtful Artist</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Thoughtful Artist" />
        <link rel="icon" href="/favicon.ico" />
      </>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
