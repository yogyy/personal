import { Link } from '@tanstack/react-router'
import {
  HonoIcon,
  MongodbIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  ReactqueryIcon,
  ShadcnuiIcon,
  SqliteIcon,
  SvelteIcon,
  TailwindcssIcon,
  UpstashIcon,
} from '#/components/icons/simple-icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '#/components/ui/tooltip'

export type TechListType = keyof typeof techList

export type TechIconsProps = {
  techs: Array<TechListType>
} & React.ComponentPropsWithoutRef<'ul'>

export default function TechMdx({ techs }: TechIconsProps) {
  return (
    <ul className="flex w-fit flex-wrap gap-2">
      {techs.map((tech) => {
        if (!techList[tech]) return null

        const current = techList[tech]

        return (
          <li className="h-fit w-fit p-2 text-xl" key={current.name}>
            <TooltipProvider delay={300}>
              <Tooltip>
                <TooltipTrigger className="group outline-none">
                  <Link
                    to={current.link}
                    className="outline-none focus:outline-none"
                    target="_blank"
                    tabIndex={-1}
                  >
                    <current.icon className="h-6 w-6 transition-colors duration-200 group-hover:text-chart-1 group-focus:text-chart-1 [&>title]:bg-sky-600" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  sideOffset={8}
                  className="font-mono font-semibold"
                >
                  <p>{current.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        )
      })}
    </ul>
  )
}

const techList = {
  react: {
    icon: ReactIcon,
    name: 'React',
    link: 'https://react.dev/',
  },
  nodejs: {
    icon: NodejsIcon,
    name: 'Node JS',
    link: 'https://nodejs.org/en',
  },
  nextjs: {
    icon: NextjsIcon,
    name: 'Next JS',
    link: 'https://nextjs.org/',
  },
  hono: {
    icon: HonoIcon,
    name: 'Hono',
    link: 'https://hono.dev/',
  },
  sqlite: {
    icon: SqliteIcon,
    name: 'SQLite',
    link: 'https://www.sqlite.org/index.html',
  },
  sveltekit: {
    icon: SvelteIcon,
    name: 'SvelteKit',
    link: 'https://svelte.dev/docs/kit/introduction',
  },
  tailwindcss: {
    icon: TailwindcssIcon,
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
  },
  mongodb: {
    icon: MongodbIcon,
    name: 'MongoDB',
    link: 'https://www.mongodb.com/',
  },
  shadcnui: {
    icon: ShadcnuiIcon,
    name: 'shadcn/ui',
    link: 'https://ui.shadcn.com/',
  },
  reactquery: {
    icon: ReactqueryIcon,
    name: 'React Query',
    link: 'https://tanstack.com/',
  },
  upstash: {
    icon: UpstashIcon,
    name: 'Upstash',
    link: 'https://upstash.com/',
  },
}
