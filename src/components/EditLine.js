import React from 'react'
import '../App.css'
import EditAxis from './EditAxis'
import ToggleLineMode from './ToggleLineMode'
import PickColor from './PickColor'
import EditTitle from './EditTitle'

export default function EditLine(props){
  return (
    <div className="card edit-panel">
      <div className="card-body">
        <h3 className="card-title" style={{marginBottom: '10px'}}>Graph Options</h3>
        <EditTitle prompt={'title'} title={props.title} setTitle={props.setTitle} />
        <EditTitle prompt={'X axis label'} title={props.xtitle} setTitle={props.setXtitle} />
        <EditTitle prompt={'Y axis label'} title={props.ytitle} setTitle={props.setYtitle} />
        <EditAxis
          editXStart={props.editXStart}
          editXEnd={props.editXEnd}
          editYStart={props.editYStart}
          editYEnd={props.editYEnd}
          />
        <ToggleLineMode toggleMode={props.toggleMode} />
        <PickColor color={props.color} setColor={props.setColor} />
      </div>
    </div>
  )
}
