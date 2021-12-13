import React from 'react'

export default function EditTitle(props) {
  return (
    <div className="row align-items-center">
      <div className="col">
        <label>Edit title:</label>
      </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="title" text={props.title} onChange={(e) => {
          console.log('new title: ' + e.target.value)
          props.setTitle(e.target.value)
        }} />
      </div>
    </div>
  )
}
