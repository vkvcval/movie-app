import MovieItemSkeleton from '@/components/skeletons/movieItemSkeleton'

export default function Loading() {
  return (
    <div className="pt-[168px]">
      <MovieItemSkeleton />
      <MovieItemSkeleton />
      <MovieItemSkeleton />
    </div>
  )
}
