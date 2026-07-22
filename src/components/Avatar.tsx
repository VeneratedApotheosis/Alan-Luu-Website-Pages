'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { images } from '@/data/alan'

type Props = {
  isMusicMode: boolean
  isMobile: boolean
}

const EXIT_DURATION = 900

export default function Avatar({ isMusicMode, isMobile }: Props) {
  const [renderMode, setRenderMode] = useState<'music' | 'content'>(isMusicMode ? 'music' : 'content')
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const target = isMusicMode ? 'music' : 'content'
    if (target === renderMode) return

    setExiting(true)
    const timer = setTimeout(() => {
      setRenderMode(target)
      setExiting(false)
    }, EXIT_DURATION)

    return () => clearTimeout(timer)
  }, [isMusicMode, renderMode])

  const wrapperClass = isMobile
    ? 'relative w-full flex items-center justify-center overflow-hidden shrink-0'
    : 'absolute top-0 right-0 w-[45%] h-[calc(100vh-96px)] flex items-center justify-center overflow-hidden'

  return (
    <div className={wrapperClass} style={isMobile ? { minHeight: 380 } : undefined}>
      {renderMode === 'music' ? (
        <MusicAvatar exiting={exiting} isMobile={isMobile} />
      ) : (
        <ContentAvatar exiting={exiting} isMobile={isMobile} />
      )}
    </div>
  )
}

function MusicAvatar({ exiting, isMobile }: { exiting: boolean; isMobile: boolean }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const { src, alt } = images[0];
  const size = isMobile ? 420 : 800

  const isUp = !visible || exiting

  return (
    <div
      className="relative"
      style={{
        transform: isUp ? 'translateY(-115%)' : 'translateY(0)',
        opacity: isUp ? 0 : 1,
        transition: exiting
          ? 'transform 0.8s cubic-bezier(0.55, 0, 0.85, 0.35), opacity 0.7s ease-in'
          : 'transform 0.7s ease-out, opacity 0.7s ease-out',
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        style={{ objectFit: 'contain' }}
        priority
      />
      <span
        className="absolute bottom-6 right-4 px-4 py-1.5 rounded-full text-base whitespace-nowrap"
        style={{
          backgroundColor: 'var(--panel-music)',
          color: 'var(--muted-music)',
          border: '1px solid var(--muted-music)44',
        }}
      >
        Art by @megshrooom
      </span>
    </div>
  )
}

function ContentAvatar({ exiting, isMobile }: { exiting: boolean; isMobile: boolean }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = containerRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2

    const maxTilt = isMobile ? 0 : 10
    setTilt({ x: y * maxTilt, y: x * maxTilt })
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 })
  }

  const { src, alt } = images[1];
  const size = isMobile ? 340 : 400

  let transform: string
  if (exiting) {
    transform = 'scale(0.25) translateX(110px) rotate(12deg)'
  } else if (!visible) {
    transform = 'scale(0.55) translateY(-50px) rotate(-10deg)'
  } else {
    transform = 'scale(1) translateX(0) rotate(0deg)'
  }

  const hidden = exiting || !visible

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer"
      style={{
        perspective: '800px',
        transform,
        opacity: hidden ? 0 : 1,
        transition: exiting
          ? 'transform 0.75s ease-in, opacity 0.65s ease-in'
          : 'transform 0.6s ease-out, opacity 0.6s ease-out',
      }}
    >
      <div
        className="transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${-tilt.x}deg) rotateY(${tilt.y}deg) rotate(-3deg)`,
        }}
      >
        <div
          className="bg-white p-3 pb-10 shadow-2xl"
          style={{ boxShadow: '4px 8px 24px rgba(0,0,0,0.18)' }}
        >
          <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            style={{ objectFit: 'cover', display: 'block' }}
            priority
          />
        </div>
      </div>
    </div>
  )
}