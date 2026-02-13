import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/windows/MacWindow'
import Github from './components/windows/Github'
import Note from './components/windows/note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
function App() {

  const [windowState, setWindowState] = useState({
    github: false,
  note: false,
  resume: false,
  spotify: false,
  cli: false,

  })

  return (
    <main>
      <Nav />
      <Dock windowState={windowState} setWindowState={setWindowState} />
      {windowState.github && <Github windowName="github" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.note && <Note windowName="note" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.resume && <Resume windowName="resume" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.spotify && <Spotify windowName="spotify" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.cli && <Cli windowName="cli" windowState={windowState} setWindowState={setWindowState} />}
    </main>
  )
}

export default App
