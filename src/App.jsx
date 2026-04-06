import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Cli from './components/windows/Cli'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'

function App() {

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    cli: false
  })


  return (
   <main>
    <Navbar/>
    <Dock/>
   { windowsState.github && <Github/>}
    { windowsState.note && <Note/>}
   { windowsState.resume && <Resume/> }
   { windowsState.spotify && <Spotify/>}
   { windowsState.cli && <Cli/>}
   </main>
  )
}

export default App
