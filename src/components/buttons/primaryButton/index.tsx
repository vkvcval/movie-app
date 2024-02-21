import React, { MouseEventHandler } from 'react'

export default function PrimaryButton({
  text,
  onClick
}: {
  text: String
  onClick: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      className="rounded bg-primary px-4 py-2 font-kanit text-m font-semibold text-secondary transition duration-200 ease-in-out hover:border-transparent hover:bg-primary-light hover:text-white"
      onClick={onClick}
    >
      {text}
    </button>
  )
}
