import { GithubIcon } from '#/components/icons/simple-icons'

export function Footer() {
  return (
    <footer className="border py-2 font-medium font-mono text-foreground/90">
      <div className="mx-auto grid w-full max-w-7xl">
        <div className="flex items-center justify-between px-4">
          <p className="text-sm">&copy; yogyy 2026</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/yogyy"
              className="p-1.5 text-foreground hover:text-chart-1"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
