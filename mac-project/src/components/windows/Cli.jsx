import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({windowName, windowState, setWindowState }) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => 'I am Abir Chakravorty — a Full-Stack developer who builds responsive web apps with React, Vite, Node.js, and modern JS.'
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Frontend: React, Vite, Vanilla JS, Sass, HTML/CSS
Backend: Node.js, Express
Databases: MongoDB, PostgreSQL
Tools: Git, Docker, Vite
Cloud: AWS`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. Portfolio Website - React + Vite - https://abir.dev
2. Weather App - React + OpenWeather
3. Task Manager - React + Node.js
4. Realtime Chat - Socket.io`
        },
        experience: {
            description: 'Display work experience',
            usage: 'experience',
            fn: () => `Frontend Developer @ Acme Co (2023 - Present)
  - Built responsive UIs and improved performance
Full Stack Intern @ WebStudio (2021 - 2022)
  - Implemented REST APIs and front-end features`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: abirchakravorty99@gmail.com
Location: Raipur (C.G) / India`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/abirchakravorty', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => {
                window.open('/resume.pdf', '_blank')
                return 'Opening resume (resume.pdf)...'
            }
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `Twitter (X): https://x.com/AbirOps99
LinkedIn: https://www.linkedin.com/in/abir-chakravorty-06a9aa323/
Portfolio: https://abir.dev`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════════════════════╗
║          Hello — welcome to Abir Chakravorty's         ║
║                     Portfolio CLI!                     ║
╚════════════════════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. Explore my work, skills, and experience using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring! 🚀
`

    return (
        <MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState}>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'abirchakravorty:~$'}
                    promptLabelStyle={{ color: '#7ee787' }}
                    inputTextStyle={{ color: '#9ae6b4' }}
                    contentStyle={{
                        color: '#cbd5e1',
                        fontFamily: 'SFMono-Regular, Menlo, Monaco, "Courier New", monospace',
                        whiteSpace: 'pre-wrap'
                    }}
                    style={{
                        backgroundColor: '#071026',
                        borderRadius: 8,
                        boxShadow: '0 8px 24px rgba(2,6,23,0.6)',
                        padding: '10px',
                        minHeight: 320
                    }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli