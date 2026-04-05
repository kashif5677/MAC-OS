import React from 'react'
import MacWindow from './MacWindow'
import { ReactTerminal } from 'react-terminal'

function Cli() {

  // const commands = {
  //   help: 'Available: help, about, projects',
  //   about: "I'm Kashif, Full Stack Developer 🚀",
  //   projects: 'AI Dashboard, Portfolio, Chat App'
  // }

  return (
    <MacWindow>
      <div className="cli-wi">
        <ReactTerminal
          commands={{}}
          welcomeMessage="Welcome to Md Kashif's Terminal"
          prompt="mdkashifprajpati:~$"
        />
      </div>
    </MacWindow>
  )
}

export default Cli