const BLOB_BASE_URL = 'https://pihovfuuvvf4hivn.public.blob.vercel-storage.com/resized-pics'

const IMAGE_WIDTHS = [360, 640, 960, 1600] as const

export function getImageSources(base: string) {
  return {
    src: `${BLOB_BASE_URL}/${base}-640.webp`,
    srcset: IMAGE_WIDTHS.map((w) => `${BLOB_BASE_URL}/${base}-${w}.webp ${w}w`).join(', '),
  }
}

export type ImageSrcSet = {
  base: string // e.g. "alex-1"
  alt: string
}

export type GalleryImageItem = {
  type: 'image'
  image: ImageSrcSet
}

export type GalleryVideoItem = {
  type: 'video'
  embedUrl: string
  caption?: string
}

export type GalleryItem = GalleryImageItem | GalleryVideoItem

export const galleryItems: GalleryItem[] = [
  {
    type: 'image',
    image: { base: 'matt-3', alt: 'Matt performing' },
  },
  {
    type: 'image',
    image: { base: 'em-1', alt: 'Em performing' },
  },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/KRI24QWpsCA' },

  {
    type: 'image',
    image: { base: 'alex-1', alt: 'Alex performing' },
  },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/XioXXJDDZJU' },

  {
    type: 'image',
    image: { base: 'lotus-1', alt: 'Lotus performing' },
  },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/-OrLMEqLmVk' },

  {
    type: 'image',
    image: { base: 'claire', alt: 'Claire performing' },
  },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/8l2AVK2GV0s' },

  {
    type: 'image',
    image: { base: 'juliette-1', alt: 'Juliette performing' },
  },
  {
    type: 'image',
    image: { base: 'nicole-above-1', alt: 'Nicole performing' },
  },

  { type: 'video', embedUrl: 'https://www.youtube.com/embed/URYFqf_OWe4' },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/Cc5Ka6chVVk' },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/ntJlucSNyyo' },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/ZIkB0N2KNAg' },

  {
    type: 'image',
    image: { base: 'emma-2', alt: 'Emma performing' },
  },

  { type: 'video', embedUrl: 'https://www.youtube.com/embed/t5Usrzg2u-s' },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/-GYgudVl7n4' },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/wDxXaWy9D6k' },

  {
    type: 'image',
    image: { base: 'taylor-1', alt: 'Taylor performing' },
  },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/WvWxCyeChIU' },

  {
    type: 'image',
    image: { base: 'luka-2', alt: 'Luka performing' },
  },
  {
    type: 'image',
    image: { base: 'far-away', alt: 'Far Away' },
  },

  { type: 'video', embedUrl: 'https://www.youtube.com/embed/h8s1evUIOXU' },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/kUuiA4E2wUM' },
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/xlgjo0DOQuo' },

  {
    type: 'image',
    image: { base: 'mikey-1', alt: 'Mikey performing' },
  },
  {
    type: 'image',
    image: { base: 'tallen-1', alt: 'Tallen performing' },
  },
  {
    type: 'image',
    image: { base: 'jan31-cassette-alex', alt: 'Alex performing' },
  },
  {
    type: 'image',
    image: { base: 'jan31-cassette-betty', alt: 'Betty performing' },
  },
  {
    type: 'image',
    image: { base: 'jan31-cassette-leche', alt: 'Leche performing' },
  },
  {
    type: 'image',
    image: { base: 'jan31-cassette-hank', alt: 'Hank performing' },
  },
  {
    type: 'image',
    image: { base: 'jan31-cassette-pat', alt: 'Pat performing' },
  },
  {
    type: 'image',
    image: { base: 'jan31-cassette-jane', alt: 'Jane performing' },
  },
  {
    type: 'image',
    image: { base: 'jan31-cassette-sachi', alt: 'Sachi performing' },
  },
  {
    type: 'image',
    image: { base: 'jan31-cassette-leah-bassist', alt: '' },
  },
  {
    type: 'image',
    image: { base: 'jan31-cassette-sachi-drummer', alt: '' },
  },
  {
    type: 'image',
    image: { base: 'mar7-coco', alt: 'Coco performing' },
  },
  // {
  //   type: 'image',
  //   image: { base: 'mar7-taylor-guitar', alt: 'Taylor performing' },
  // },
  // {
  //   type: 'image',
  //   image: { base: 'mar7-taylor', alt: 'Taylor performing' },
  // },
  // {
  //   type: 'image',
  //   image: { base: 'mar7-jules', alt: 'Jules performing' },
  // },
  {
    type: 'image',
    image: { base: 'mar7-crowd', alt: '' },
  },
]
