import React from 'react'
import MacWindow from './MacWindow'


function Cli() {
  return (
    <MacWindow>
      <div className="cli-wi">
        <Terminal></Terminal>
      </div>
    </MacWindow>
  )
}

export default Cli
