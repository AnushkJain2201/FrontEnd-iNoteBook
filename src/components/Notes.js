import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const { notes, addNote } = context;
    return (
        <>
            <AddNote />
            <div className="row my-3 mx-3">
                <h2>Your Notes</h2>
                {notes.map((notes) => {
                    return <NoteItem key={notes._id} notes={notes} />
                })}
            </div>
        </>
    )
}

export default Notes
