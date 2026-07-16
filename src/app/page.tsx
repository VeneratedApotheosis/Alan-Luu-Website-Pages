'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import ContentPanel from '@/components/ContentPanel'
import Avatar from '@/components/Avatar'

type Section = 'about' | 'works' | 'links'

export default function Home() {
  const [isMusicMode, setIsMusicMode] = useState(false)
  const [activeSection, setActiveSection] = useState<Section>('about')

  return (
    <main
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundColor: isMusicMode ? 'var(--bg-music)' : 'var(--bg-content)',
        color: isMusicMode ? 'var(--text-music)' : 'var(--text-content)',
        transition: 'background-color 0.8s ease 400ms, color 0.8s ease 400ms',
      }}
    >
      <ContentPanel isMusicMode={isMusicMode} activeSection={activeSection} />

      <Avatar isMusicMode={isMusicMode} />

      <Navbar
        isMusicMode={isMusicMode}
        onToggle={() => setIsMusicMode(prev => !prev)}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
    </main>
  )
}