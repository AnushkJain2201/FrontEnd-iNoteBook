import React, { useState } from "react";
import noteContext from "./noteContext";


const NoteState = (props) => {

  const host = "http://localhost:5000"

  const notesInitial = []

  // SHowing LAertas 



  const [notes, setNotes] = useState(notesInitial);
 
    // Get All Notes
    const getNotes = async() => {
      // API Call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
  
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MDU0YTMwYWUyZWVhNTUxODIzNWJhIn0sImlhdCI6MTY4NzE4ODg1NX0.t9ztcBfaqJg-KPU1DdOT9KWBBaN0jL2i0BPYd-Dsml8"
        },
      });
      const json = await response.json();
      setNotes(json);
  }

  // Add A Note
  const addNote = async(title, description, tag) => {
      // API Call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
  
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MDU0YTMwYWUyZWVhNTUxODIzNWJhIn0sImlhdCI6MTY4NzE4ODg1NX0.t9ztcBfaqJg-KPU1DdOT9KWBBaN0jL2i0BPYd-Dsml8"
        },
        body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
      });
  
      const json = response.json();
    let note = {
      "_id": "64919816c268b8b983c47d3bw",
      "user": "649054a30ae2eea5518235ba",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-06-20T12:14:14.097Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }

  // Delete A Note
  const deleteNote = (id) => {
    console.log("deleting The note with id" + id);
    const newNotes = notes.filter((deletedNote) => { return deletedNote._id !== id })
    setNotes(newNotes)
  }

  // Edit A Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',

        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MDU0YTMwYWUyZWVhNTUxODIzNWJhIn0sImlhdCI6MTY4NzE4ODg1NX0.t9ztcBfaqJg-KPU1DdOT9KWBBaN0jL2i0BPYd-Dsml8"
      },
      body: JSON.stringify(title, description, tag), // body data type must match "Content-Type" header
    });

    // logic To edit in CLient
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title
        element.description = description
        element.tag = tag
      }

    }
    setNotes()
  }

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}
export default NoteState;