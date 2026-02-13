import React from 'react'
import "./dock.scss"
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Dock = ({ windowState, setWindowState }) => {
  return (
    <footer className='dock'>
      <div
        onClick={() => { setWindowState(state => ({ ...state, github: true })) }}
        className="icon github"><img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/doc-icons/github.svg" alt="" /></div>
      <div 
        onClick={() => { setWindowState(state => ({ ...state, note: true })) }}
      className="icon note"><img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/doc-icons/note.svg" alt="" /></div>
      <div 
        onClick={() => { setWindowState(state => ({ ...state, resume: true })) }}
      className="icon pdf"><img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/doc-icons/pdf.svg" alt="" /></div>
      <div 
       onClick={()=>(window.open("https://calendar.google.com/","_blank"))}
      className="icon calendar"><img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/doc-icons/calender.svg" alt="" /></div>
      <div 
        onClick={() => { setWindowState(state => ({ ...state, spotify: true })) }}
      className="icon spotify"><img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/doc-icons/spotify.svg" alt="" /></div>
      <div
       onClick={()=>window.open("mailto:abirchakravorty99@gmail.com", "_blank")}
      className="icon mail"><img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/doc-icons/mail.svg" alt="" /></div>
      <div
       onClick={()=>window.open("https://www.linkedin.com/in/abir-chakravorty-06a9aa323/", "_blank")}
      className="icon link"><img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/doc-icons/link.svg" alt="" /></div>
      <div 
        onClick={() => { setWindowState(state => ({ ...state, cli: true })) }}
      className="icon cli"><img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/doc-icons/cli.svg" alt="" /></div>
    </footer>
  )
}

export default Dock