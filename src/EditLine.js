import React from 'react'
import './App.css'
import EditAxis from './EditAxis.js'

export default function EditLine(props){
  return (
    <div className="card edit-panel">
      <div className="card-body">
        <h3 className="card-title">Graph Options</h3>
        <EditAxis
          editXStart={props.editXStart}
          editXEnd={props.editXEnd}
          editYStart={props.editYStart}
          editYEnd={props.editYEnd}
          />
      </div>
    </div>
  )
}
