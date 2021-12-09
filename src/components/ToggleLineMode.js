import '../App.css'
import React from 'react'

export default function ToggleLineMode(props){
  return (
    <div className="row align-items-center" style={{'margin-bottom': '10px'}}>
      <div className="col">
        <label className="form-label">Enable/Disable data point markers:</label>
      </div>
      <div className="col">
        <button className="btn btn-primary" onClick={(e) => props.toggleMode()}>Toggle</button>
      </div>
    </div>
  )
}
