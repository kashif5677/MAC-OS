import React from 'react'
import MacWindow from './MacWindow'

function Spotify() {
  return (
    <MacWindow>
      <div className="spotify-window">
        <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/album/4jlyYLklV3kTBA6trX3bpj?utm_source=generator"></iframe>
      </div>
    </MacWindow>
  )
}

export default Spotify
