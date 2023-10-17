'use client'
 
export default function myImageLoader({ src, width, quality }) {
  return `https://blue-archive.imgix.net/${src}?w=${width}&q=${quality || 75}`
}