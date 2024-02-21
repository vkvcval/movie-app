export default function Movie({ params }: { params: { id: string } }) {
  return <div>Movie ID: {params.id}</div>
}
