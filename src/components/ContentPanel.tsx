'use client'

import { profile, contentLinks, musicLinks } from '@/data/alan'
import VideoList from '@/components/VideoList'
import TrackList from '@/components/TrackList'
import LinkList from '@/components/LinkList'

type Section = 'about' | 'works' | 'links'

type Props = {
  isMusicMode: boolean
  activeSection: Section
}

export default function ContentPanel({ isMusicMode, activeSection }: Props) {
  return (
    <div className="absolute top-0 left-0 w-[55%] h-[calc(100vh-96px)] p-12 flex flex-col gap-6 overflow-y-auto">

    <h1 className="text-8xl font-bold leading-none tracking-tight">
      {isMusicMode ? (<>ALUUNA</>) : (<>ALAN LUU</>)}
    </h1>

      <p className="text-xl opacity-60">
        {isMusicMode ? profile.tagline.music : profile.tagline.content}
      </p>

      <div key={activeSection} className="mt-4 flex flex-col gap-4 section-fade">

        {activeSection === 'about' && (
          <p className="text-xl opacity-70 leading-relaxed max-w-xl">
            {isMusicMode ? profile.aboutMusic : profile.about}
          </p>
        )}

        {activeSection === 'works' && !isMusicMode && <VideoList />}
        {activeSection === 'works' && isMusicMode && <TrackList />}

        {activeSection === 'links' && (<LinkList
           links={isMusicMode ? musicLinks : contentLinks}
            isMusicMode={isMusicMode}
          />
        )}

      </div>
    </div>
  )
}