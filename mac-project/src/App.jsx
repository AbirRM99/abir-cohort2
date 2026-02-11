import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/windows/MacWindow'
import Github from './components/windows/Github'
import Note from './components/windows/note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
function App() {

  return (
    <main>
      <Nav />
      <Dock />
      <Github />
      <Note />
      <Resume />
      <Spotify />
    </main>
  )
}

export default App
