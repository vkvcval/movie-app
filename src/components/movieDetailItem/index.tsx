export default function MovieDetailItem({
  title,
  text
}: {
  title: string
  text: string | number
}) {
  return (
    <div className="text-left">
      <p className="text-m font-bold">{title}:</p>
      <p className="text-m">{text}</p>
    </div>
  )
}
