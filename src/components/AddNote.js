import React ,{useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'

export default function AddNote(props) {
    const context = useContext(noteContext)
    const {addNote} = context
  const [note,setNote] =useState({title:"",description:"",tag:""})
    const onChange=(e)=>{    
        setNote({...note,[e.target.name]:e.target.value})

  }
  
  const handleClick=(e)=>{
    e.preventDefault()
    addNote(note.title,note.description,note.tag)
    setNote({title:"",description:"",tag:""})
    props.showAlert("Note Added successfully","success")
  }

  
    return (
    <div>
      <h1>Add New Note</h1>
      <form action="" className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="title"
            onChange={onChange}
            name="title"
            value = {note.title}
             />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label" >
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            value = {note.description}
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label" >
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            defaultValue="Default"
            onChange={onChange}
            value = {note.tag}
          />
        </div>
       
        <button  disabled ={note.title.length<5 || note.description.length<5}type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
            
    </div>
  )
}
