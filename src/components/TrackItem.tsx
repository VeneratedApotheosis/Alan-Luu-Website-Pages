import { tracks } from '@/data/alan'

type AudioState = {
  trackId: number
  currentTime: number
  duration: number
}

type TrackItemProps = {
  track: typeof tracks[0]
  isPlaying: boolean
  isExpanded: boolean
  trackAudio: AudioState | null
  onPlay: (track: typeof tracks[0]) => void
  onToggleExpand: (trackId: number) => void
  onSeek: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function TrackItem({
  track,
  isPlaying,
  isExpanded,
  trackAudio,
  onPlay,
  onToggleExpand,
  onSeek,
}: TrackItemProps) {
  const progress = trackAudio && trackAudio.duration > 0
    ? (trackAudio.currentTime / trackAudio.duration) * 100
    : 0

  return (
    <div
      className="flex flex-col gap-3 p-4 rounded-xl border transition-all duration-300"
      style={{
        backgroundColor: 'var(--panel-music)',
        borderColor: isExpanded ? 'var(--accent-music)' : 'var(--muted-music)44',
      }}
    >
      {/* Top row */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => onPlay(track)}
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            backgroundColor: isPlaying ? 'var(--accent-music)' : 'var(--muted-music)44',
            color: 'var(--text-music)',
          }}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>

        <div className="flex-1">
          <p className="font-semibold text-sm" style={{ color: 'var(--text-music)' }}>
            {track.title}
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--muted-music)' }}>
            {track.description}
          </p>
        </div>

        <button
          onClick={() => onToggleExpand(track.id)}
          className="w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 text-xs"
          style={{
            color: isExpanded ? 'var(--accent-music)' : 'var(--muted-music)',
            backgroundColor: isExpanded ? 'var(--accent-music-dim)' : 'transparent',
          }}
          aria-label={isExpanded ? 'Collapse' : 'Expand'}
        >
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>

      {/* Scrubber */}
      {isExpanded && (
        <div className="flex flex-col gap-1 px-1">
          <div className="relative w-full h-5 flex items-center">
            <div
              className="absolute w-full h-[2px] rounded-full"
              style={{ backgroundColor: 'var(--muted-music)' }}
            />
            <div
              className="absolute h-[2px] rounded-full"
              style={{
                width: `${progress}%`,
                backgroundColor: 'var(--accent-music)',
              }}
            />
            <div
              className="absolute w-3 h-3 rounded-full shadow-md"
              style={{
                left: `calc(${progress}% - 6px)`,
                backgroundColor: 'var(--accent-music)',
              }}
            />
            <input
              type="range"
              min={0}
              max={trackAudio?.duration || 0}
              step={0.1}
              value={trackAudio?.currentTime || 0}
              onChange={onSeek}
              className="absolute w-full opacity-0 cursor-pointer h-5"
            />
          </div>

          <div className="flex justify-between text-xs" style={{ color: 'var(--muted-music)' }}>
            <span>{formatTime(trackAudio?.currentTime || 0)}</span>
            <span>{formatTime(trackAudio?.duration || 0)}</span>
          </div>
        </div>
      )}
    </div>
  )
}