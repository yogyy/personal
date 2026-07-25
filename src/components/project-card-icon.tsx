import {
  HonoIcon,
  MongodbIcon,
  NextjsIcon,
  ReactIcon,
  ReactqueryIcon,
  ShadcnuiIcon,
  SqliteIcon,
  SvelteIcon,
  TailwindcssIcon,
  UpstashIcon,
} from './icons/simple-icons'

const Icons: { [key: string]: React.ComponentType } = {
  NextJS: NextjsIcon,
  Tailwind: TailwindcssIcon,
  ReactJS: ReactIcon,
  ShadcnUI: ShadcnuiIcon,
  Hono: HonoIcon,
  MongoDB: MongodbIcon,
  ReactQuery: ReactqueryIcon,
  Sveltekit: SvelteIcon,
  SQLite: SqliteIcon,
  Upstash: UpstashIcon,
} as const

export type IconName = keyof typeof Icons

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconName | string // allow runtime strings, but prefer IconName
  title?: string
}

const FallbackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" role="img" aria-hidden="true" {...props}>
    <rect width="24" height="24" fill="currentColor" opacity={0.12} />
  </svg>
)

export const Icon = ({ icon, title, ...props }: IconProps) => {
  const IconComponent =
    (
      Icons as Record<
        string,
        React.ComponentType<React.SVGProps<SVGSVGElement>>
      >
    )[icon] ?? FallbackIcon
  if (!Icons[icon as IconName]) {
    console.warn(`[Icon] Unknown icon key "${icon}". Rendering fallback.`)
  }
  return (
    <IconComponent aria-label={title} {...props}>
      {title ? <title>{title}</title> : null}
    </IconComponent>
  )
}
