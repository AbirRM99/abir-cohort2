import React from 'react'
import "./dock.scss"

const Dock = () => {
  return (
    <footer className='dock'>
        <div className="icon github"><img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/doc-icons/github.svg" alt="" /></div>
        <div className="icon note"><img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/doc-icons/note.svg" alt="" /></div>
        <div className="icon pdf"><img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/doc-icons/pdf.svg" alt="" /></div>
        <div className="icon calendar"><img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/doc-icons/calender.svg" alt="" /></div>
        <div className="icon spotify"><img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/doc-icons/spotify.svg" alt="" /></div>
        <div className="icon mail"><img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/doc-icons/mail.svg" alt="" /></div>
        <div className="icon link"><img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/doc-icons/link.svg" alt="" /></div>
        <div className="icon cli"><img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/doc-icons/cli.svg" alt="" /></div>
    </footer>
  )
}

export default Dock