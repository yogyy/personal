import { cn } from '#/lib/utils.ts'

export const GradientHeading = ({
  className,
  children,
  ...props
}: React.ComponentProps<'span'>) => {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-chart-1 to-chart-1/80 bg-clip-text font-bold text-transparent transition-colors',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
