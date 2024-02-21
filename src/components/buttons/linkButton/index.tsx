import Link from 'next/link'

export default function LinkButton({
  path,
  text
}: {
  path: string
  text: string
}) {
  return (
    <Link href={path}>
      <div className="rounded-md bg-primary px-4 py-2 font-kanit text-emerald-50 transition duration-500 ease-in-out hover:bg-primary-dark">
        {text}
      </div>
    </Link>
  )
}
