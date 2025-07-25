'use client'

import { cn } from '@/utilities/ui'
import React, { useEffect, useRef } from 'react'


import { getMediaUrl } from '@/utilities/getMediaUrl'
import { MediaType } from '@/types/shared'

const CustomVideo: React.FC<MediaType> = (props) => {
  const { onClick, resource, className } = props

  const videoRef = useRef<HTMLVideoElement>(null)
  // const [showFallback] = useState<boolean>()

  useEffect(() => {
    const { current: video } = videoRef
    if (video) {
      video.addEventListener('suspend', () => {
        // setShowFallback(true);
        // console.warn('Video was suspended, rendering fallback image.')
      })
    }
  }, [])

  if (resource && typeof resource === 'object') {
    const { filename } = resource

    return (
      <video
        autoPlay
        className={cn(className)}
        controls={false}
        loop
        muted
        onClick={onClick}
        playsInline
        ref={videoRef}
      >
        <source src={getMediaUrl(`/media/${filename}`)} />
      </video>
    )
  }

  return null
}
export default CustomVideo;