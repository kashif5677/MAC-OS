import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'


function Cli() {
  return (
    <MacWindow>
      <div className="cli-wi">
        <Terminal/>
      </div>
    </MacWindow>
  )
}

export default Cli
