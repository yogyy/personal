import { Link } from '@tanstack/react-router'
import { type HTMLMotionProps, m } from 'motion/react'
import { cn } from '#/lib/utils.ts'

const Component = m.create(Link)

type LinkMotionProps = React.ComponentProps<typeof Link> & HTMLMotionProps<'a'>

export function LinkMotion({ children, className, ...props }: LinkMotionProps) {
  return (
    <Component
      whileHover={{
        y: -2,
        x: -2,
        boxShadow: '6px 6px 0 0 var(--color-chart-1)',
        transition: { duration: 0.2 },
        zIndex: 10,
      }}
      whileTap={{
        y: 2,
        x: 2,
        boxShadow: 'none',
        transition: { duration: 0.1 },
      }}
      whileFocus={{
        y: -2,
        x: -2,
        boxShadow: '6px 6px 0 0 var(--color-chart-1)',
        transition: { duration: 0.2 },
        zIndex: 10,
      }}
      className={cn(
        'group flex w-full overflow-hidden rounded-md border bg-card outline-none focus-within:border-chart-1/50 hover:border-chart-1/50',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
