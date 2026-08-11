import * as m from 'motion/react-m'
import { cn } from '@/lib/utils'
import { GradientHeading } from '../gradient-heading'

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  text?: string
  hr?: boolean
}

export function DocsPageHeader({
  heading,
  text,
  hr = false,
  className,
  ...props
}: DocsPageHeaderProps) {
  return (
    <>
      <div className={cn('space-y-4', className)} {...props}>
        <m.h1 className="inline-block font-heading text-6xl pt-10 font-semibold font-space-grotesk">
          <GradientHeading>{heading}</GradientHeading>
        </m.h1>
        {text && (
          <m.p className="text-base text-foreground/70 md:text-xl">{text}</m.p>
        )}
      </div>
      {hr && <hr className="my-4" />}
    </>
  )
}
