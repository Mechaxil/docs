import { useState } from 'react'

export default function HoverImage({ defaultSrc, hoverSrc, alt, width, height }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{ position: 'relative', width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={defaultSrc} alt={alt} style={{ position: 'absolute', transition: 'opacity 0.3s', opacity: hovered ? 0 : 1 }} />
      <img src={hoverSrc}   alt={alt} style={{ position: 'absolute', transition: 'opacity 0.3s', opacity: hovered ? 1 : 0 }} />
    </div>
  )
}