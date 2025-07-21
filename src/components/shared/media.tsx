import React, { Fragment } from 'react'


import CustomImage from './custom-image'
import CustomVideo from './custom-video'
import { MediaType } from '@/types/shared'

export const Media: React.FC<MediaType> = (props) => {
  const { className, htmlElement = 'div', resource } = props

  const isVideo = typeof resource === 'object' && resource?.mimeType?.includes('video')
  const Tag = htmlElement || Fragment

  return (
    <Tag
      {...(htmlElement !== null
        ? {
          className,
        }
        : {})}
    >
      {isVideo ? <CustomVideo {...props} /> : <CustomImage {...props} />}
    </Tag>
  )
}
