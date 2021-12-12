import React from 'react'
import '../App.css'
import EditAxis from './EditAxis'
import ToggleLineMode from './ToggleLineMode'

export default function EditLine(props){
  return (
    <div className="card edit-panel">
      <div className="card-body">
        <h3 className="card-title" style={{marginBottom: '10px'}}>Graph Options</h3>
        <EditAxis
          editXStart={props.editXStart}
          editXEnd={props.editXEnd}
          editYStart={props.editYStart}
          editYEnd={props.editYEnd}
          />
        <ToggleLineMode toggleMode={props.toggleMode} />
      </div>
    </div>
  )
}
