import React from 'react'
import './dock.scss'
import Note from './windows/Note'

export default function Dock({windowsState, setWindowsState}) {
  return (
  <footer className='dock'>
    <div 
    onClick={()=>{setWindowsState(state=>({...state,github:true}))}}
    className='icon github'><img src="public\doc-icons\icons8-github-48.png" alt="" /></div>
    <div 
     onClick={()=>{setWindowsState(state=>({...state,note:true}))}}
    className='icon note'><img src="public\doc-icons\notes.svg" alt="" /></div>
    <div 
      onClick={()=>{setWindowsState(state=>({...state,resume:true}))}}
    className='icon pdf'><img src="public\doc-icons\pdf.svg" alt="" /></div>
    <div className='icon calender'><img src="public\doc-icons\icons8-github-48.png" alt="" /></div>
    <div
     onClick={()=>{setWindowsState(state=>({...state,spotify:true}))}}
    className='icon'><img src="public\doc-icons\icons8-github-48.png" alt="" /></div>
    <div 
       onClick={()=>{setWindowsState(state=>({...state,cli:true}))}}
    className='icon'><img src="public\doc-icons\github.svg" alt="" /></div>
    <div className='icon'><img src="public\doc-icons\github.svg" alt="" /></div>
    <div className='icon'><img src="public\doc-icons\github.svg" alt="" /></div>
  </footer>
  )
}
