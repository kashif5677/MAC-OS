import React from 'react'
import MacWindow from './MacWindow'

function Spotify() {
  return (
    <MacWindow>
      <div className="spotify-window">
        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO2mZJ0N"></iframe>
      </div>
    </MacWindow>
  )
}

export default Spotify
