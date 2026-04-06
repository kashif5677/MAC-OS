import React from 'react'
import MacWindow from './MacWindow'
import { ReactTerminal } from 'react-terminal'
import './cli.scss'

function Cli() {

   const commands = {
    help: () => 'Available: help, about, projects',

    about: () => "I'm Kashif, Full Stack Developer 🚀",

    projects: () => `
- AI Trading Dashboard
- Portfolio Website
- Chat App
    `
  }

  return (
    <MacWindow>
      <div className="cli-window">
        <ReactTerminal
          commands={commands}
          welcomeMessage={"Welcome to Md Kashif's Terminal"}
          prompt={"mdkashifprajpati:~$"}
         promptLabelStyle={{ color: 'green' }}
        />
      </div>
    </MacWindow>
  )
}

export default Cli