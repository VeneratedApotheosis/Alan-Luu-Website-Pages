import { appendBasePath } from '@/utils/paths';

export const profile = {
  name: 'Alan Luu',
  tagline: {
    content: 'Content Creator',
    music: 'Artist',
  },
  about: `Hello everyone! My name is Alan, and I’m a music producer and content creator.

I’ve been in love with creative work for over a decade now, and I don’t plan to stop anytime soon! It first began with learning to edit Valorant and Minecraft gameplay videos for YouTube. Then, 2021 marked the year I discovered FL Studio and the world of music production. Ever since starting these two hobbies, my life has changed entirely, and I hope to change the lives of others following me!
`,
  contact: 'email',
}

export const contentLinks = [
  { label: 'YouTube',   url: 'https://www.youtube.com/@alanluuu' },
  { label: 'Instagram', url: 'https://www.instagram.com/alanluuu_/' },
  { label: 'TikTok',    url: 'https://www.tiktok.com/@aluuna__' },
]

export const musicLinks = [
  { label: 'YouTube', url: 'https://www.youtube.com/@Aluunamusic' },
  { label: 'Instagram', url: 'https://www.instagram.com/aluunamusic/' },
  { label: 'Spotify',     url: 'https://open.spotify.com/artist/4MhAs6owaq7efiDkymW7Rs?si=j_iLAEFQSW-bL_oUeNPDgg' },
  { label: 'Apple Music', url: 'https://music.apple.com/us/artist/aluuna/1840067621' },
  { label: 'Kofi', url: 'https://ko-fi.com/alanluu' },
  { label: 'Bandcamp', url: 'https://aluuna.bandcamp.com' },
]

export const videos = [
  {
    id: 1,
    title: 'Video Title One',
    description: 'Short description of the video.',
    url: 'https://youtube.com/watch?v=VIDEO_ID',
    thumbnail: null, // add a URL or local path later
  },
  {
    id: 2,
    title: 'Video Title Two',
    description: 'Short description of the video.',
    url: 'https://youtube.com/watch?v=VIDEO_ID',
    thumbnail: null,
  },
  {
    id: 3,
    title: 'Video Title Three',
    description: 'Short description of the video.',
    url: 'https://youtube.com/watch?v=VIDEO_ID',
    thumbnail: null,
  },
]


const rawTracks = [
  {
    id: 1,
    title: 'Aero Era',
    description: 'Single · 2026',
    src: '/music/AeroEra.mp3',
  },
  {
    id: 2,
    title: 'ONETWO',
    description: 'Single · 2026',
    src: '/music/ONETWO.mp3',
  },
  {
    id: 3,
    title: 'Track Three',
    description: 'EP Title · 2023',
    src: '/music/track-three.mp3',
  },
];

const rawImages = [
  {
    src: "/images/avatar-music.png",
    alt: "Aluuna"
  },
  {
    src: "/images/avatar-content.png",
    alt: "Alan Luu"
  }
];

// Export mapped arrays with prepended base paths
export const tracks = rawTracks.map(track => ({
  ...track,
  src: appendBasePath(track.src)
}));

export const images = rawImages.map(image => ({
  ...image,
  src: appendBasePath(image.src)
}));