export default async function SearchLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="m-auto max-w-screen-xl">
      <div className="bg-black">{children}</div>
    </main>
  )
}
