import React, { useState } from "react";
import noteContext from "./noteContext";


const NoteState = (props) => {    

    const notesInitial = [
        {
          "_id": "64917e46d011442fbd8729c9",
          "user": "649054a30ae2eea5518235ba",
          "title": "My Title",
          "description": "Please Wake Up Early",
          "tag": "personal",
          "date": "2023-06-20T10:24:06.802Z",
          "__v": 0
        },
        {
          "_id": "64917e88d011442fbd8729cb",
          "user": "649054a30ae2eea5518235ba",
          "title": "My Title",
          "description": "Please Wake Up Early",
          "tag": "personal",
          "date": "2023-06-20T10:25:12.686Z",
          "__v": 0
        },
        {
          "_id": "649187a6c268b8b983c47d2d",
          "user": "649054a30ae2eea5518235ba",
          "title": "My Title",
          "description": "Please Wake Up Early",
          "tag": "personal",
          "date": "2023-06-20T11:04:06.515Z",
          "__v": 0
        },
        {
          "_id": "64918beac268b8b983c47d30",
          "user": "649054a30ae2eea5518235ba",
          "title": "My Title",
          "description": "Please Wake Up Early",
          "tag": "personal",
          "date": "2023-06-20T11:22:18.355Z",
          "__v": 0
        },
        {
          "_id": "64919816c268b8b983c47d3b",
          "user": "649054a30ae2eea5518235ba",
          "title": "New Note",
          "description": "Please Complete The Backend",
          "tag": "professional",
          "date": "2023-06-20T12:14:14.097Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

    return (
        <noteContext.Provider value = {{notes , setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;