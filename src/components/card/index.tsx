import { getPosterPath } from '@/lib/tmdb'
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline'

interface Props {
  title: string
  image: string
  popularity: number
}

export default function Card({ title, image, popularity }: Props) {
  return (
    <div className="relative shadow-md">
      <img src={getPosterPath(image)} alt={title} className="h-96 object-contain" />
      <div className="absolute bottom-0 z-20 flex items-center   gap-1">
        <ArrowTrendingUpIcon color="green" className="h-10 w-10" />
        <span className="text-2xl bg-stone-800 font-bold text-white">{popularity}</span>
      </div>
    </div>
  )
}
