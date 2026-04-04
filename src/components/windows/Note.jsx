import React,{useEffect, useState} from 'react'
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
import './note.scss'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function Note() {
    const [markdown,setMarkdown]=useState(null)

    useEffect(()=>{
        fetch('/note.txt')
        .then(res=>res.text())
        .then(text=>setMarkdown(text))
    },[])
    
  return (
    <MacWindow>
        <div className='note-window'>
            {markdown ? <SyntaxHighlighter language="typescript" style={docco}>{markdown}</SyntaxHighlighter>: <p>Loading...</p>}
        </div>
    </MacWindow>
  )
}

export default Note
