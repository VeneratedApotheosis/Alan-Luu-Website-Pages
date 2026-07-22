'use client'

import { profile } from '@/data/alan'

type Props = {
  isMusicMode: boolean
  isMobile: boolean
}

export default function ProfileHeader({ isMusicMode, isMobile }: Props) {
  return (
    <div className={isMobile ? 'text-center' : ''}>
      <h1
        key={isMusicMode ? 'music' : 'content'}
        className={`font-bold leading-none tracking-tight section-fade ${
          isMobile ? 'text-7xl' : 'text-8xl'
        }`}
      >
        {isMusicMode ? (<>ALUUNA</>) : (<>ALAN LUU</>)}
      </h1>

      <p
        key={isMusicMode ? 'music-tagline' : 'content-tagline'}
        className={`opacity-60 section-fade ${isMobile ? 'text-xl mt-3' : 'text-xl mt-0'}`}
      >
        {isMusicMode ? profile.tagline.music : profile.tagline.content}
      </p>
    </div>
  )
}