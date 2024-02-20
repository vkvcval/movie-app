import { getPosterPath } from "@/lib/tmdb";
import ArrowTrendingUpIcon from "@/components/icons/ArrowTrendingUpIcon";

interface Props {
  title: string;
  image: string;
  popularity: number;
}

export default function Card({ title, image, popularity }: Props) {
  return (
    <div className="relative shadow-md">
      <img
        src={getPosterPath(image)}
        alt={title}
        className="object-contain h-96"
      />
      <div className="absolute z-20 bottom-0 flex items-center gap-1">
        <ArrowTrendingUpIcon color="green" className="w-10 h-10" />
        <span className="text-white font-bold text-2xl bg-stone-800">
          {popularity}
        </span>
      </div>
    </div>
  );
}
