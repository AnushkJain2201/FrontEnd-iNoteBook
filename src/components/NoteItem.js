import React from 'react'

const NoteItem = (props) => {

    return (
        <div className='col-md-3 '>
            <div className="card my-3" style={{"width": "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{props.notes.title}</h5>
                        <p className="card-text">{props.notes.description}</p>
                        <i className="fa-solid fa-trash-can mr-2"></i>
                        <i className="fa-solid fa-pen-to-square mx-2"></i>
                    </div>
            </div>
        </div>
    )
}

export default NoteItem
