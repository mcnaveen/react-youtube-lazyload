import React from 'react'
import { YouTube } from 'react-youtube-lazyload'
import 'react-youtube-lazyload/dist/index.css'

const App = () => {
  const [playing, setPlaying] = React.useState(false)
  return (
    <div>
    <YouTube
      videoId='dQw4w9WgXcQ'
      privacy={true} //Privacy Enhanced Mode (optional) - default: false
      onPlayChange={e => setPlaying(e)}
      playing={playing}
      className='w-full h-96'
    />
    <button onClick={() => setPlaying(!playing)}>Play/Pause</button>
  </div>
  )
}

export default App
