import { Link } from '@tanstack/react-router'
import { navItems } from '#/lib/constant'
import { cn } from '#/lib/utils.ts'
import { FileDownloadIcon } from '../icons/internal/file-download'

export default function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-30 shadow-[0_1px_0_0_var(--color-border)]">
      <a
        href="#skip-nav"
        className="group absolute top-1 left-4 z-20 -translate-y-16 rounded-sm bg-background p-2 font-medium text-foreground transition focus:translate-y-0 focus:outline-none focus:ring focus:ring-chart-1"
      >
        skip to content
      </a>
      <nav className="mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr] items-center gap-6 bg-[color-mix(in_oklab,var(--color-background)_80%,transparent)] px-3 backdrop-blur-md backdrop-saturate-150 sm:px-5 md:px-10">
        <Link to="/" className="p-3.5 no-underline">
          <span className="inline-flex items-baseline">
            <span className="font-medium text-foreground text-lg tracking-[-0.03em]">
              yg
            </span>
          </span>
        </Link>

        <div className="flex items-center justify-end gap-1 font-mono">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                'px-3.5 py-3.5 font-medium text-sm no-underline transition-colors',
                item.label === 'resume'
                  ? 'flex items-center gap-1 bg-chart-1/80 text-background hover:bg-chart-1'
                  : 'text-foreground/90 hover:text-chart-1',
              )}
            >
              {item.label}
              {item.label === 'resume' && (
                <FileDownloadIcon className="text-base" />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
