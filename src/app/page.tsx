'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import ContentPanel from '@/components/ContentPanel'
import ProfileHeader from '@/components/ProfileHeader'
import Avatar from '@/components/Avatar'
import { useIsMobileLayout } from '@/hooks/useIsMobileLayout'

type Section = 'about' | 'works' | 'links'

export default function Home() {
  const [isMusicMode, setIsMusicMode] = useState(false)
  const [activeSection, setActiveSection] = useState<Section>('about')
  const isMobile = useIsMobileLayout()

  const bgStyle = {
    backgroundColor: isMusicMode ? 'var(--bg-music)' : 'var(--bg-content)',
    color: isMusicMode ? 'var(--text-music)' : 'var(--text-content)',
    transition: 'background-color 0.8s ease 400ms, color 0.8s ease 400ms',
  }

  if (isMobile) {
    return (
      <main
        className="relative w-screen min-h-screen overflow-x-hidden flex flex-col items-center gap-6 px-6 pt-10 pb-28"
        style={bgStyle}
      >
        <ProfileHeader isMusicMode={isMusicMode} isMobile />
        <Avatar isMusicMode={isMusicMode} isMobile />
        <ContentPanel isMusicMode={isMusicMode} activeSection={activeSection} isMobile />

        <Navbar
          isMusicMode={isMusicMode}
          onToggle={() => setIsMusicMode(prev => !prev)}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          isMobile
        />
      </main>
    )
  }

  return (
    <main
      className="relative w-screen h-screen overflow-hidden"
      style={bgStyle}
    >
      <div className="absolute top-0 left-0 w-[55%] h-[calc(100vh-96px)] p-12 flex flex-col gap-6 overflow-y-auto">
        <ProfileHeader isMusicMode={isMusicMode} isMobile={false} />
        <ContentPanel isMusicMode={isMusicMode} activeSection={activeSection} isMobile={false} />
      </div>

      <Avatar isMusicMode={isMusicMode} isMobile={false} />

      <Navbar
        isMusicMode={isMusicMode}
        onToggle={() => setIsMusicMode(prev => !prev)}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isMobile={false}
      />
    </main>
  )
}