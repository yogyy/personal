import { Link } from '@tanstack/react-router'
import { navItems } from '#/lib/constant'

export default function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-30 shadow-[0_1px_0_0_var(--color-border)]">
      <a
        href="#skip-nav"
        className="group absolute top-1 left-12 z-99 -translate-y-16 rounded-sm bg-background p-2 font-medium text-foreground transition focus:translate-y-0 focus:outline-none focus:ring focus:ring-chart-1"
      >
        skip to content
      </a>
      <nav className="mx-auto flex w-full max-w-400 justify-between bg-[color-mix(in_oklab,var(--color-background)_80%,transparent)] font-mono backdrop-blur-md backdrop-saturate-150 md:px-8">
        <div className="relative flex items-center justify-center border-r">
          <Link to="/" className="p-2 px-6">
            <span className="inline-flex items-baseline">
              <span className="font-medium text-foreground text-lg tracking-[-0.03em]">
                yg
              </span>
            </span>
          </Link>
        </div>

        <div className="relative flex items-center gap-2 border-l p-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="p-2 text-foreground/90 text-md hover:text-chart-1"
            >
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
