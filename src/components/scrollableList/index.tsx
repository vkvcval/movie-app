'use client'

import styles from './styles.module.css'
import { useHorizontalScroll } from '@/lib/helpers/useHorizontalScroll'
import { ReactNode } from 'react'

export default function ScrollableList({ children }: { children: ReactNode }) {
  const scrollRef = useHorizontalScroll()
  return (
    <div ref={scrollRef} className={styles.scrollableList}>
      {children}
    </div>
  )
}
