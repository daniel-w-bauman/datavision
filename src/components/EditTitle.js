import React from 'react'

export default function EditTitle(props) {
  return (
    <div className="row align-items-center">
      <div className="col">
        <label>Edit {props.prompt}:</label>
      </div>
      <div className="col">
        <input type="text" className="form-control" placeholder={props.prompt} text={props.title} onChange={(e) => {
          props.setTitle(e.target.value)
        }} />
      </div>
    </div>
  )
}
