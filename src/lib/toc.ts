export interface TocItem {
  title: string
  url: string
  level: number
}

export function getTableOfContentsSimple(content: string): TocItem[] {
  // 1. Hapus bagian frontmatter (--- ... ---) agar tidak terbaca sebagai heading
  const cleanContent = content.replace(/^---[\s\S]*?---/, '')

  // 2. Cari baris yang diawali #, ##, ###, dst.
  const headingRegex = /^(#{1,6})\s+(.+)$/gm
  const toc: TocItem[] = []

  const matches = cleanContent.matchAll(headingRegex)

  for (const match of matches) {
    const level = match[1].length
    const title = match[2].trim()

    const url = `#${title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')}`

    toc.push({ title, url, level })
  }

  return toc
}
