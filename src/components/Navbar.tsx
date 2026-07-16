type Section = 'about' | 'works' | 'links'

type Props = {
  isMusicMode: boolean
  onToggle: () => void
  activeSection: Section
  onSectionChange: (section: Section) => void
}

export default function Navbar({ isMusicMode, onToggle, activeSection, onSectionChange }: Props) {
  const accent = isMusicMode ? '#1D6FA4' : '#2563EB'
  const panel = isMusicMode ? 'var(--panel-music)' : 'var(--panel-content)'
  const muted = isMusicMode ? 'var(--muted-music)' : 'var(--muted-content)'

  return (
    <nav
      className="absolute bottom-0 left-0 right-0 h-24 flex items-center px-8 gap-4"
      style={{ background: panel, borderTop: `1px solid ${muted}44` }}
    >
      {/* Toggle — bottom left */}
      <button
        onClick={onToggle}
        className="w-20 h-20 rounded-full font-bold text-xs tracking-widest shrink-0"
        style={{ backgroundColor: accent, color: '#ffffff' }}
      >
        {isMusicMode ? 'MUSIC' : 'CONTENT'}
      </button>

      {/* Nav buttons */}
      <NavButton
        label="About"
        active={activeSection === 'about'}
        muted={muted}
        accent={accent}
        onClick={() => onSectionChange('about')}
      />
      <NavButton
        label="Works"
        active={activeSection === 'works'}
        muted={muted}
        accent={accent}
        onClick={() => onSectionChange('works')}
      />
      <NavButton
        label="Links"
        active={activeSection === 'links'}
        muted={muted}
        accent={accent}
        onClick={() => onSectionChange('links')}
      />
      <a href="mailto:luua103232@gmail.com"
        className="h-12 px-5 rounded-full text-base font-medium tracking-wide transition-all duration-300 flex items-center ml-auto whitespace-nowrap"
        style={{
          border: `1px solid ${accent}`,
          color: accent,
          backgroundColor: 'transparent',
        }}
      >
        luua103232@gmail.com
      </a>
    </nav>
  )
}

function NavButton({ label, active, muted, accent, onClick }: {
  label: string
  active: boolean
  muted: string
  accent: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="h-12 px-6 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
      style={{
        border: `1px solid ${active ? accent : muted}`,
        color: active ? '#fff' : muted,
        backgroundColor: active ? accent : 'transparent',
      }}
    >
      {label}
    </button>
  )
}