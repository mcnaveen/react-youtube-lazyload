import React, { useState, Fragment } from 'react'
import styles from './styles.module.css'

export const YouTube = (props) => {
  const { videoId, width, height, privacy } = props
  const [showVideo, setShowVideo] = useState(false)
  return (
    <Fragment>
      {showVideo ? (
        <iframe
          width={width || '560px'}
          height={height || '315px'}
          src={`https://www.youtube${
            privacy ? '-nocookie' : ''
          }.com/embed/${videoId}?autoplay=1&showinfo=0`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      ) : (
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`})`,
            width,
            height
          }}
          onClick={() => setShowVideo(true)}
        >
          <div className={styles.playButton} />
        </div>
      )}
    </Fragment>
  )
}
