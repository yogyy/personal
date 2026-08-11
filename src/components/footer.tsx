import { GithubIcon } from '#/components/icons/simple-icons'

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-400 border-t-2">
      <div className="px-4 text-muted-foreground sm:px-5 md:px-10">
        <div className="flex items-center justify-between py-2">
          <p className="text-sm">&copy; 2026 yogyy </p>
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
