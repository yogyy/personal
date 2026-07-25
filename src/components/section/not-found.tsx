import { Link } from '@tanstack/react-router'

export default function NotFoundPage() {
  return (
    <div className="grid min-h-[calc(100svh-82px)] place-content-center font-mono">
      <div className="relative flex gap-5 items-center justify-center">
        <Link to="/" className="text-chart-1">
          <h1 className="text-xl">404</h1>
        </Link>
        |<p className="">page couldn&apos;t be found</p>
      </div>
    </div>
  )
}
