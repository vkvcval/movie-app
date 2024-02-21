'use client'

import Link from 'next/link'
import Logo from '../logo'
import SearchInput from '@/components/searchInput'
import { useEffect } from 'react'
import { useAppDispatch } from '@/lib/redux/store'
import { setFavorites } from '@/lib/redux/favorites'

export default function NavBar() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const favorites = localStorage.getItem('favorites')

      if (favorites) {
        dispatch(setFavorites(JSON.parse(favorites)))
      } else {
        localStorage.setItem('favorites', JSON.stringify([]))
      }
    }
  }, [dispatch])

  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-2xl drop-shadow-glow">
      <div className="m-auto flex max-w-screen-xl place-content-between items-center">
        <div className="">
          <Link href="/discover">
            <div className="container mx-auto flex items-end gap-3 p-2">
              <Logo color="#ccd435" className="h-20 w-20" />
              <span className="font-rowdies text-[44px] text-secondary ">
                Movie finder
              </span>
            </div>
          </Link>
        </div>
        <SearchInput />
      </div>
    </nav>
  )
}
