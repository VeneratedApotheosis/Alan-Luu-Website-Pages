'use client'

import { useState } from 'react'

type Section = 'about' | 'works' | 'links'

type Props = {
  isMusicMode: boolean
  onToggle: () => void
  activeSection: Section
  onSectionChange: (section: Section) => void
}

export default function Navbar({ isMusicMode, onToggle, activeSection, onSectionChange }: Props) {
  const accent = isMusicMode ? 'var(--accent-music)' : 'var(--accent-content)'
  const onAccent = isMusicMode ? 'var(--on-accent-music)' : 'var(--on-accent-content)'
  const panel = isMusicMode ? 'var(--panel-music)' : 'var(--panel-content)'
  const muted = isMusicMode ? 'var(--muted-music)' : 'var(--muted-content)'

  const [toggleHovered, setToggleHovered] = useState(false)
  const [contactHovered, setContactHovered] = useState(false)

  return (
    <nav
      className="absolute bottom-0 left-0 right-0 h-24 flex items-center px-8 gap-4"
      style={{
        background: panel,
        borderTop: `1px solid ${muted}44`,
        transition: 'background-color 0.8s ease 400ms, border-color 0.8s ease 400ms',
      }}
    >
      {/* Toggle — bottom left */}
      <button
        onClick={onToggle}
        onMouseEnter={() => setToggleHovered(true)}
        onMouseLeave={() => setToggleHovered(false)}
        className="w-20 h-20 rounded-full font-bold text-xs tracking-widest shrink-0 transition-transform duration-200"
        style={{
          backgroundColor: accent,
          color: onAccent,
          transform: toggleHovered ? 'scale(1.06)' : 'scale(1)',
          boxShadow: toggleHovered ? `0 6px 20px ${isMusicMode ? 'rgba(34,211,238,0.4)' : 'rgba(37,99,235,0.35)'}` : 'none',
        }}
      >
        {isMusicMode ? 'MUSIC' : 'CONTENT'}
      </button>

      {/* Nav buttons */}
      <NavButton
        label="About"
        active={activeSection === 'about'}
        muted={muted}
        accent={accent}
        onAccent={onAccent}
        isMusicMode={isMusicMode}
        onClick={() => onSectionChange('about')}
      />
      <NavButton
        label="Works"
        active={activeSection === 'works'}
        muted={muted}
        accent={accent}
        onAccent={onAccent}
        isMusicMode={isMusicMode}
        onClick={() => onSectionChange('works')}
      />
      <NavButton
        label="Links"
        active={activeSection === 'links'}
        muted={muted}
        accent={accent}
        onAccent={onAccent}
        isMusicMode={isMusicMode}
        onClick={() => onSectionChange('links')}
      />

      {/* Contact — separate from Links, always visible, pinned to right edge */}
      <a
        href="mailto:luua103232@gmail.com"
        onMouseEnter={() => setContactHovered(true)}
        onMouseLeave={() => setContactHovered(false)}
        className="h-12 px-5 rounded-full text-base font-medium tracking-wide transition-all duration-300 flex items-center ml-auto whitespace-nowrap"
        style={{
          border: `1px solid ${accent}`,
          color: contactHovered ? onAccent : accent,
          backgroundColor: contactHovered ? accent : 'transparent',
          transform: contactHovered ? 'translateY(-2px)' : 'translateY(0)',
          boxShadow: contactHovered
            ? `0 6px 20px ${isMusicMode ? 'rgba(34,211,238,0.35)' : 'rgba(37,99,235,0.3)'}`
            : 'none',
        }}
      >
        luua103232@gmail.com
      </a>
    </nav>
  )
}

function NavButton({ label, active, muted, accent, onAccent, isMusicMode, onClick }: {
  label: string
  active: boolean
  muted: string
  accent: string
  onAccent: string
  isMusicMode: boolean
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)
  const filled = active || hovered

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-12 px-6 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
      style={{
        border: `1px solid ${filled ? accent : muted}`,
        color: filled ? onAccent : muted,
        backgroundColor: filled ? accent : 'transparent',
        transform: hovered && !active ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered && !active
          ? `0 6px 16px ${isMusicMode ? 'rgba(34,211,238,0.3)' : 'rgba(37,99,235,0.25)'}`
          : 'none',
      }}
    >
      {label}
    </button>
  )
}