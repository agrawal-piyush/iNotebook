import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
export default function Notes() {
    const context = useContext(noteContext)
  const {notes, setNotes} = context
  return (
    <>
    <h1> Your Notes</h1>
    <div className="row my-3">
        
      {notes.map((note)=>{
        return <NoteItem key ={note._id} note ={note}/>

      })}
    </div>
      </>
    
  )
}
