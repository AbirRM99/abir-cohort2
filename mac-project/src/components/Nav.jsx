import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'

const Nav = () => {
    return (
        <nav>
            <div className="left">
                <div className="apple-icon">
                    <img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/navbar-icons/apple.svg" alt="" />
                </div>
                <div className="nav-item">
                    <p>Abir Chakravorty</p>
                </div>
                <div className="nav-item">
                    <p>File</p>
                </div>
                <div className="nav-item">
                    <p>Window</p>
                </div>
                <div className="nav-item">
                    <p>Terminal</p>
                </div>
            </div>
            <div className="right">
                <div className="wifi-icon">
                    <img src="https://raw.githubusercontent.com/ankurdotio/mac-os/8ac7211021508f06721efd855966ad8a74a0f681/public/navbar-icons/wifi.svg" alt="" />
                </div>
                <div className="nav-item">
                    <DateTime />
                </div>
            </div>
        </nav>
    )
}

export default Nav