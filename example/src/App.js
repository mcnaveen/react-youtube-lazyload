import React from 'react'
import { YouTube } from 'react-youtube-lazyload'
import 'react-youtube-lazyload/dist/index.css'

const App = () => {
  return (
    <YouTube
      videoId='KcI_xfryMD0'
      privacy={true}
    />
  )
}

export default App
