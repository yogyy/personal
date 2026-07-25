import type { JSX } from 'react'

export { DrizzleIcon } from './drizzle'
export { FastifyIcon } from './fastify'
export { GitIcon } from './git'
export { GithubIcon } from './github'
export { GmailIcon } from './gmail'
export { GraphqlIcon } from './graphql'
export { HonoIcon } from './hono'
export { JavascriptIcon } from './javascript'
export { LinkedInIcon } from './linkedin'
export { MongodbIcon } from './mongodb'
export { NextjsIcon } from './nextjs'
export { NodejsIcon } from './nodejs'
export { PostgresqlIcon } from './postgresql'
export { RadixuiIcon } from './radixui'
export { ReactIcon } from './react'
export { ReactqueryIcon } from './reactquery'
export { ShadcnuiIcon } from './shadcnui'
export { SpotifyIcon } from './spotify'
export { SqliteIcon } from './sqlite'
export { SvelteIcon } from './svelte'
export { TailwindcssIcon } from './tailwindcss'
export { TypescriptIcon } from './typescript'
export { UpstashIcon } from './upstatsh'
export { XIcon } from './x'

export interface IconTree {
  tag: string
  attr: {
    [key: string]: string
  }
  child: IconTree[]
}
export declare function GenIcon(
  data: IconTree,
): (props: IconBaseProps) => JSX.Element
export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode
  size?: string | number
  color?: string
  title?: string
}
export declare type IconType = (props: IconBaseProps) => JSX.Element
export declare function IconBase(
  props: IconBaseProps & {
    attr?: Record<string, string>
  },
): JSX.Element
