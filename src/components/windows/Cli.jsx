import React from 'react'
import MacWindow from './MacWindow'
import { ReactTerminal } from 'react-terminal'
import './cli.scss'

function Cli() {


  return (
    <MacWindow>
      <div className="cli-window">
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