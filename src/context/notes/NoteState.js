import React, { useState } from "react";
import noteContext from "./noteContext";


const NoteState = (props) => {

  const host = "http://localhost:5000"

  const notesInitial = []

  // SHowing LAertas 



  const [notes, setNotes] = useState(notesInitial);

  // Get All Notes
  const getNotes = async () => {
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
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',

        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MDU0YTMwYWUyZWVhNTUxODIzNWJhIn0sImlhdCI6MTY4NzE4ODg1NX0.t9ztcBfaqJg-KPU1DdOT9KWBBaN0jL2i0BPYd-Dsml8"
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });

    const note = await response.json();
    // let note = {
    //   "_id": "64919816c268b8b983c47d3bw",
    //   "user": "649054a30ae2eea5518235ba",
    //   "title": title,
    //   "description": description,
    //   "tag": tag,
    //   "date": "2023-06-20T12:14:14.097Z",
    //   "__v": 0
    // };
    setNotes(notes.concat(note))
  }

  // Delete A Note
  const deleteNote = async (id) => {

    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',

        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MDU0YTMwYWUyZWVhNTUxODIzNWJhIn0sImlhdCI6MTY4NzE4ODg1NX0.t9ztcBfaqJg-KPU1DdOT9KWBBaN0jL2i0BPYd-Dsml8"
      },
    });
    const json = await response.json();

    const newNotes = notes.filter((deletedNote) => { return deletedNote._id !== id })
    setNotes(newNotes)
  }

  // Edit A Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',

        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MDU0YTMwYWUyZWVhNTUxODIzNWJhIn0sImlhdCI6MTY4NzE4ODg1NX0.t9ztcBfaqJg-KPU1DdOT9KWBBaN0jL2i0BPYd-Dsml8"
      },
      body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
    });
    
    const json = await response.json();


    let newNotes = JSON.parse(JSON.stringify(notes));
    // logic To edit in CLient
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title
        newNotes[index].description = description
        newNotes[index].tag = tag
        break;
      }

    }
    setNotes(newNotes);
  }

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}
export default NoteState;