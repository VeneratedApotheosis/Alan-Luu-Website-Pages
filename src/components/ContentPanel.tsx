'use client'

import { profile, contentLinks, musicLinks } from '@/data/alan'
import VideoList from '@/components/VideoList'
import TrackList from '@/components/TrackList'
import LinkList from '@/components/LinkList'

type Section = 'about' | 'works' | 'links'

type Props = {
  isMusicMode: boolean
  activeSection: Section
  isMobile: boolean
}

export default function ContentPanel({ isMusicMode, activeSection, isMobile }: Props) {
  return (
    <div key={`${activeSection}-${isMusicMode}`} className="w-full flex flex-col gap-4 section-fade">

      {activeSection === 'about' && (
        <p className={`text-xl opacity-70 leading-relaxed ${isMobile ? '' : 'max-w-2xl'}`}>
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
  )
}