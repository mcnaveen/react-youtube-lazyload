# React YouTube Lazyload

> ⚡ A blazing fast YouTube embed component that supports lazy loading.

[![NPM](https://img.shields.io/npm/v/react-youtube-lazyload.svg)](https://www.npmjs.com/package/react-youtube-lazyload) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![React-YouTube-Lazyload](./images/cover.png)

## :package: Requirements
```
Node.js 12.x LTS or 14.x LTS
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
```

## :pen: Usage

```jsx
import React from 'react'
import { YouTube } from 'react-youtube-lazyload'
import 'react-youtube-lazyload/dist/index.css'

const App = () => {
  return (
    <YouTube
      videoId='KcI_xfryMD0'
      privacy={true} //Privacy Enhanced Mode (optional) - default: false
    />
  )
}

export default App

```

## :green_heart: Message
I hope you find this project useful. If you have any questions, please create an issue.

## License

MIT © [mcnaveen](https://github.com/mcnaveen)
