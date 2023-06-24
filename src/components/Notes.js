import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = (props) => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const { notes, getNotes, editNote } = context;
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default" });

    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }
    
    const handleClick = (e) => {
        editNote(note.id , note.etitle, note.edescription, note.etag);
        refClose.current.click();
        props.showAlert("THe Notes Is Updated" , "success");
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <AddNote showAlert = {props.showAlert}/>

            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" onChange={onChange} value={note.etitle} required minLength={5}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescripiton" name="edescription" onChange={onChange} value={note.edescription} required minLength={5}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" onChange={onChange} value={note.etag} required minLength={3}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled = {note.etitle.length<5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleClick}>Update Notes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3 mx-3">
                <h2>Your Notes</h2>
                <div className="container mx-2">
                {notes.length === 0 && 'No Notes To Display'}
                </div>
                {notes.map((notes) => {
                    return <NoteItem key={notes._id} updateNote={updateNote} showAlert= {props.showAlert} notes={notes} />
                })}
            </div>
        </>
    )
}

export default Notes
