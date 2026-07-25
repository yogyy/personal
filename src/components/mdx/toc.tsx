import { useEffect, useMemo, useState } from 'react'
import type { TocItem } from '@/lib/toc'
import { cn } from '@/lib/utils'

interface TocProps {
  toc: TocItem[]
}

export function DashboardTableOfContents({ toc }: TocProps) {
  const itemIds = useMemo(
    () =>
      toc?.flatMap((item) => item.url.replace('#', '')).filter(Boolean) ?? [],
    [toc],
  )

  const activeHeading = useActiveItem(itemIds)

  if (!toc || toc.length === 0) {
    return null
  }

  return (
    <div className="space-y-2">
      <p className="font-medium text-sm">Table of Contents</p>
      <ul className="m-0 list-none space-y-1 text-sm">
        {toc.map((item) => {
          const isActive = item.url === `#${activeHeading}`

          return (
            <li
              key={item.url}
              // Indentasi otomatis berdasarkan level heading (level 2, 3, dst)
              style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
            >
              <a
                href={item.url}
                className={cn(
                  'inline-block border-transparent border-l-2 pl-2 no-underline transition-colors',
                  isActive
                    ? 'border-primary font-medium text-primary'
                    : 'text-foreground/70 hover:text-foreground',
                )}
              >
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// Hook IntersectionObserver (Tetap sama, hanya lebih bersih)
function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (!itemIds.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` },
    )

    itemIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [itemIds]) // Re-run hanya jika ID list berubah

  return activeId
}
