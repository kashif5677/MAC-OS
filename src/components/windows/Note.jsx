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
    <div>
      
    </div>
  )
}

export default Note
