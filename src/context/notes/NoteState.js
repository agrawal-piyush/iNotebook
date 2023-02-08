
import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
const host = "http://localhost:5000"
  const notesinitial= []
  const  [notes ,setNotes] = useState(notesinitial)
  //get notes
  //add notes 
  const getNotes=async()=>{
    //console.log("fetching")
    //todo api call
      //API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
       
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        
      });
      const json = await response.json()
   // console.log(json)
    setNotes(json)
  }
  
  
  //add notes
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token'),
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }
    //delete note
  const deleteNote= async(id)=>{
    //console.log("deleting the node with id"+ id)
    //API CALL
  const response =  await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
     
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
    });
    const json = await response.json()
  

    //console.log("deleting the node with id"+ id)
    const newNotes = notes.filter((note)=>{ return note._id!==id})
    setNotes(newNotes)
  }
  //edit note
  const editNote= async (id,title,description,tag)=>{
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
     
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
    });
    const json =  response.json(); // parses JSON response into native JavaScript 
  

    //
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = notes[index];
      if (element._id === id){
        newNotes[index].title = title
        newNotes[index].description = description
        newNotes[index].tag = tag
        break
        }
      
      
    }
    setNotes(newNotes)

  }

    return(
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
        {props.children}
    </NoteContext.Provider>

)



}

export default NoteState