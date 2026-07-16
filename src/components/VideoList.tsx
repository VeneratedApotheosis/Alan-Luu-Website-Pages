import { videos } from '@/data/alan'

export default function VideoList() {
  return (
    <div className="flex flex-col gap-3">
      {videos.map(video => (
        <a
          key={video.id}
          href={video.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border border-[#2563EB22] hover:border-[#2563EB] transition-all duration-300 group"
          style={{ backgroundColor: 'var(--panel-content)' }}
        >
          <div className="w-20 h-14 rounded-lg bg-gray-300 flex items-center justify-center shrink-0 text-gray-500 text-lg">
            🎬
          </div>
          <div>
            <p className="font-semibold text-lg group-hover:text-[#2563EB] transition-colors">
              {video.title}
            </p>
            <p className="text-base opacity-50 mt-1">{video.description}</p>
          </div>
        </a>
      ))}
    </div>
  )
}