export default function MovieItemSkeleton() {
  return (
    <div className="flex w-full animate-pulse place-content-between items-start gap-6 p-6">
      <div className="h-[144px] w-[256px] flex-shrink-0 rounded bg-gray-700 dark:bg-gray-900"></div>
      <div className="flex grow flex-col items-stretch gap-4">
        <div className="h-4 rounded bg-gray-700 dark:bg-gray-900"></div>
        <div className="h-20 rounded bg-gray-700 dark:bg-gray-900"></div>
      </div>
    </div>
  )
}
