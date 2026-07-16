'use client'

import { useState } from 'react'

type Link = {
  label: string
  url: string
}

type Props = {
  links: Link[]
}

export default function LinkList({ links }: Props) {
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-3">
      {links.map(link => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setHoveredLabel(link.label)}
          onMouseLeave={() => setHoveredLabel(null)}
          className="flex items-center justify-between p-4 rounded-xl transition-all duration-300"
          style={{
            border: '1px solid var(--muted-content)44',
            backgroundColor: hoveredLabel === link.label ? 'var(--accent-content-dim)' : 'transparent',
            color: hoveredLabel === link.label ? 'var(--accent-content)' : 'inherit',
          }}
        >
          <span className="font-medium text-lg">{link.label}</span>
          <span className="text-lg opacity-40">↗</span>
        </a>
      ))}
    </div>
  )
}