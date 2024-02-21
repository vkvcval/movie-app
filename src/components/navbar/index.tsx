import Link from 'next/link'
import Logo from '../logo'
import SearchMovies from '@/components/search'

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-2xl drop-shadow-glow">
      <div className="m-auto flex max-w-screen-xl place-content-between items-center">
        <div className="">
          <Link href="/discover">
            <div className="container mx-auto flex items-end gap-3 p-2">
              <Logo color="#ccd435" className="h-20 w-20" />
              <span className="font-rowdies text-[44px] text-secondary ">Movie finder</span>
            </div>
          </Link>
        </div>
        <SearchMovies />
      </div>
    </nav>
  )
}
