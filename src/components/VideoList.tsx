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
          className="flex items-center gap-4 p-4 rounded-xl border border-[#2563EB22] hover:border-[#2563EB] transition-colors duration-300 group"
          style={{
            backgroundColor: 'var(--panel-content)',
            transition: 'background-color 0.8s ease 400ms, border-color 0.3s ease',
          }}
        >
          <div className="w-20 h-14 rounded-lg bg-gray-300 flex items-center justify-center shrink-0 text-gray-500 text-xl">
            🎬
          </div>
          <div>
            <p
              className="font-semibold text-xl group-hover:text-[#2563EB] transition-colors"
              style={{ color: 'var(--text-content)' }}
            >
              {video.title}
            </p>
            <p className="text-lg opacity-50 mt-1" style={{ color: 'var(--text-content)' }}>
              {video.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}