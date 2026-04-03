import React,{useEffect, useState} from 'react'
import Markdown from 'react-markdown'


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
            {markdown ? <Markdown>{markdown}</Markdown>: <p>Loading...</p>}
        </div>
    </MacWindow>
  )
}

export default Note
