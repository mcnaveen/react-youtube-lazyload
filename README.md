# React YouTube Lazyload

> ⚡ A blazing fast YouTube embed component that supports lazy loading.

[![NPM](https://img.shields.io/npm/v/react-youtube-lazyload.svg)](https://www.npmjs.com/package/react-youtube-lazyload) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![React-YouTube-Lazyload](./images/cover.png)

## :package: Requirements
```
- React 16.8.0 or later
```


## :sparkles: Installation

```bash
npm install --save react-youtube-lazyload

(or)

yarn add react-youtube-lazyload
```

## :bulb: Props

```
- videoId (Required): (string) The YouTube video ID.
- width (Optional): (number) Change the width of the player.
- height (Optional): (number) Change the height of the player.
- privacy (Optional): (boolean) Privacy Enhanced Mode
- playing (Optional): (boolean) Control the play/pause state of the video.
- className (Optional): (string) Additional CSS classname to apply to the YouTube component (Out of the box tailwindcss support).
- onPlayChange (Optional): (function) Callback function to be called when the play state changes. It receives a boolean argument indicating whether the video is playing or not.
```

## :pen: Usage

```jsx
import React from 'react'
import { YouTube } from 'react-youtube-lazyload'
import 'react-youtube-lazyload/dist/index.css'

const App = () => {
  const [playing, setPlaying] = React.useState(false)
  return (
    <YouTube
      videoId='dQw4w9WgXcQ'
      privacy={true} // Privacy Enhanced Mode (optional) - default: false
      onPlayChange={(e) => setPlaying(e)}
      playing={playing}
      className='w-full h-96'
    />
    <button onClick={() => setPlaying(!playing)}>Play/Pause</button>
  )
}

export default App

```

## :green_heart: Message
I hope you find this project useful. If you have any questions, please create an issue.

## License

MIT © [mcnaveen](https://github.com/mcnaveen)
