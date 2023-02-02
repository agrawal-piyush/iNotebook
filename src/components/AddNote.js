import React ,{useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'

export default function AddNote() {
    const context = useContext(noteContext)
    const {addNote} = context
  const [note,setNote] =useState({title:"",description:"",tag:""})
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})

  }
  
  const handleClick=(e)=>{
    e.preventDefault()
    addNote(note.title,note.description,note.tag)
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
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={onChange} />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
            
    </div>
  )
}
