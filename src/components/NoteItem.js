import React from 'react'

const NoteItem = (props) => {

    return (
        <div className='col-md-3 '>
            <div className="card my-3" style={{"width": "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{props.notes.title}</h5>
                        <p className="card-text">{props.notes.description}</p>
                    </div>
            </div>
        </div>
    )
}

export default NoteItem
