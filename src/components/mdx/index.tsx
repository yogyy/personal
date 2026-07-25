import { useMDXComponent } from '@content-collections/mdx/react'
import { cn } from '@/lib/utils'
import TechMdx from './tech-mdx'

// import './mdx.css?url'

const components = {
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  TechMdx,
}

interface MdxProps {
  code: string
}

export function MdxContent({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="content">
      <div className="prose dark:prose-invert in-prose-li:m-0 prose-pre:bg-(--shiki-light-bg) dark:prose-pre:bg-(--shiki-dark-bg)">
        <Component components={components} />
      </div>
    </div>
  )
}
