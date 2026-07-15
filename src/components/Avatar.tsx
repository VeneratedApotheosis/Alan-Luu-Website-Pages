'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { images } from '@/data/alan'

type Props = {
  isMusicMode: boolean
}

export default function Avatar({ isMusicMode }: Props) {
  return (
    <div className="absolute top-0 right-0 w-[45%] h-[calc(100vh-96px)] flex items-center justify-center overflow-hidden">
      {isMusicMode ? <MusicAvatar /> : <ContentAvatar />}
    </div>
  )
}

// ── Music side: drops down from the top ──────────────────
function MusicAvatar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // small delay so the animation is noticeable on mount
    const timer = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const { src, alt } = images[0];

  return (
    <div
        className="transition-all duration-700 ease-out"
        style={{
            transform: visible ? 'translateY(0)' : 'translateY(-110%)',
            opacity: visible ? 1 : 0,
            transition: 'transform 0.7s ease-out, opacity 0.7s ease-out',
        }}
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={800}
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  )
}

// ── Content side: polaroid that tilts toward mouse ───────
function ContentAvatar() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = containerRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()

    // mouse position relative to center of the element, from -1 to 1
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2

    // max tilt in degrees
    const maxTilt = 10
    setTilt({ x: y * maxTilt, y: x * maxTilt })
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 })
  }
  
  const { src, alt } = images[1];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer"
      style={{ perspective: '800px' }}
    >
      <div
        className="transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${-tilt.x}deg) rotateY(${tilt.y}deg) rotate(-3deg)`,
        }}
      >
        {/* Polaroid frame */}
        <div
          className="bg-white p-3 pb-10 shadow-2xl"
          style={{ boxShadow: '4px 8px 24px rgba(0,0,0,0.18)' }}
        >
          <Image
            src={src}
            alt={alt}
            width={320}
            height={320}
            style={{ objectFit: 'cover', display: 'block' }}
            priority
          />
        </div>
      </div>
    </div>
  )
}