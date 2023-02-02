import { upload } from "@testing-library/user-event/dist/upload";
import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
const notesinitial= [
    {
      "_id": "63ce6492f2a939ae8b052732",
      "user": "63ce50e33a0fd1f099edbeb1",
      "title": "MY title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-01-23T10:42:26.552Z",
      "__v": 0
    },
    {
      "_id": "63ce6492f2a939ae8b052734",
      "user": "63ce50e33a0fd1f099edbeb1",
      "title": "MY title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-01-23T10:42:26.694Z",
      "__v": 0
    },
    {
      "_id": "63ce6492f2a939ae8b052736",
      "user": "63ce50e33a0fd1f099edbeb1",
      "title": "MY title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-01-23T10:42:26.869Z",
      "__v": 0
    },
    {
      "_id": "63ce6493f2a939ae8b052738",
      "user": "63ce50e33a0fd1f099edbeb1",
      "title": "MY title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-01-23T10:42:27.039Z",
      "__v": 0
    },
    {
      "_id": "63ce6493f2a939ae8b05273a",
      "user": "63ce50e33a0fd1f099edbeb1",
      "title": "MY title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-01-23T10:42:27.208Z",
      "__v": 0
    },
    {
      "_id": "63ce6493f2a939ae8b05273c",
      "user": "63ce50e33a0fd1f099edbeb1",
      "title": "MY title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-01-23T10:42:27.363Z",
      "__v": 0
    },
    {
      "_id": "63ce6493f2a939ae8b05273e",
      "user": "63ce50e33a0fd1f099edbeb1",
      "title": "MY title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-01-23T10:42:27.524Z",
      "__v": 0
    },
    {
      "_id": "63ce6493f2a939ae8b052740",
      "user": "63ce50e33a0fd1f099edbeb1",
      "title": "MY title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-01-23T10:42:27.657Z",
      "__v": 0
    },
    {
      "_id": "63ce6493f2a939ae8b052742",
      "user": "63ce50e33a0fd1f099edbeb1",
      "title": "MY title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-01-23T10:42:27.782Z",
      "__v": 0
    },
    {
      "_id": "63ce6494f2a939ae8b052744",
      "user": "63ce50e33a0fd1f099edbeb1",
      "title": "MY title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-01-23T10:42:28.023Z",
      "__v": 0
    },
    {
      "_id": "63ce70c8817fe91ff7d2ad53",
      "user": "63ce50e33a0fd1f099edbeb1",
      "title": "MY title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-01-23T11:34:32.312Z",
      "__v": 0
    },
    {
      "_id": "63ce783ee142c3cf201457e2",
      "user": "63ce50e33a0fd1f099edbeb1",
      "title": "MY title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-01-23T12:06:22.338Z",
      "__v": 0
    }
  ]
  const  [notes ,setNotes] = useState(notesinitial)

    return(
    <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>

)



}

export default NoteState