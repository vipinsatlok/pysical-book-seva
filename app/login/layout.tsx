export const metadata = {
  title: 'Login | Book Seva',
  description: 'Book Seva',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
