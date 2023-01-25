import { upload } from "@testing-library/user-event/dist/upload";
import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
const s1 = {
    "name":"Piyush",
    "class":"12"
}
const [state,setState] =useState(s1)
const update =()=>{
    setTimeout(()=>{
        setState({
            "name":"Ayush",
            "class":"11"})
    },1000);
    }


    return(
    <NoteContext.Provider value ={{state,update}}>
        {props.children}
    </NoteContext.Provider>

)



}

export default NoteState