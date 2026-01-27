export type GalleryImageItem = {
  type: 'image'
  src: string
  alt: string
}

export type GalleryVideoItem = {
  type: 'video'
  embedUrl: string
  caption?: string
}

export type GalleryItem = GalleryImageItem | GalleryVideoItem

// NOTE: Replace the image URLs below with your actual public internet URLs
export const galleryItems: GalleryItem[] = [
  {
    type: 'image',
    src: 'http://pihovfuuvvf4hivn.public.blob.vercel-storage.com/matt-1.jpg',
    alt: 'Matt performing',
  },
  {
    type: 'image',
    src: 'https://pihovfuuvvf4hivn.public.blob.vercel-storage.com/em-1.jpg',
    alt: 'Em performing',
  },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/KRI24QWpsCA' },
  {
    type: 'image',
    src: 'https://pihovfuuvvf4hivn.public.blob.vercel-storage.com/alex-1.JPEG',
    alt: 'Alex performing',
  },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/XioXXJDDZJU' },
  {
    type: 'image',
    src: 'https://pihovfuuvvf4hivn.public.blob.vercel-storage.com/lotus-1.jpg',
    alt: 'Lotus performing',
  },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/-OrLMEqLmVk' },
  {
    type: 'image',
    src: 'https://pihovfuuvvf4hivn.public.blob.vercel-storage.com/claire-1.JPEG',
    alt: 'Claire performing',
  },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/8l2AVK2GV0s' },
  {
    type: 'image',
    src: 'https://pihovfuuvvf4hivn.public.blob.vercel-storage.com/juliette-1.jpg',
    alt: 'Juliette performing',
  },
  {
    type: 'image',
    src: 'https://pihovfuuvvf4hivn.public.blob.vercel-storage.com/nicole-above-1.jpg',
    alt: 'Nicole performing',
  },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/URYFqf_OWe4' },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/Cc5Ka6chVVk' },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/ntJlucSNyyo' },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/ZIkB0N2KNAg' },
  {
    type: 'image',
    src: 'https://pihovfuuvvf4hivn.public.blob.vercel-storage.com/emma-2.jpg',
    alt: 'Emma performing',
  },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/t5Usrzg2u-s' },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/-GYgudVl7n4' },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/wDxXaWy9D6k' },
  {
    type: 'image',
    src: 'https://pihovfuuvvf4hivn.public.blob.vercel-storage.com/taylor-1.JPEG',
    alt: 'Taylor performing',
  },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/WvWxCyeChIU' },
  {
    type: 'image',
    src: 'https://pihovfuuvvf4hivn.public.blob.vercel-storage.com/emma-1.jpg',
    alt: 'Emma performing',
  },
  {
    type: 'image',
    src: 'https://pihovfuuvvf4hivn.public.blob.vercel-storage.com/luka-1.jpg',
    alt: 'Luka performing',
  },
  {
    type: 'image',
    src: 'https://pihovfuuvvf4hivn.public.blob.vercel-storage.com/far-away.JPEG',
    alt: 'Far Away',
  },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/h8s1evUIOXU' },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/kUuiA4E2wUM' },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/xlgjo0DOQuo' },
  {
    type: 'image',
    src: 'https://pihovfuuvvf4hivn.public.blob.vercel-storage.com/mikey-1.jpg',
    alt: 'Mikey performing',
  },
  {
    type: 'image',
    src: 'https://pihovfuuvvf4hivn.public.blob.vercel-storage.com/tallen-1.jpg',
    alt: 'Tallen performing',
  },
]
