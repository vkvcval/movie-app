import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="m-auto max-w-screen-xl">
      <div className="m-auto flex flex-col gap-5 p-10 font-kanit text-white">
        <h2 className="text-[28px]">Not Found</h2>
        <p className="text-l">Could not find requested resource</p>
        <Link className="text-m text-secondary hover:underline" href="/">
          Return Home
        </Link>
      </div>
    </main>
  )
}
