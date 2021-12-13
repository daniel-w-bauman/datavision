import React from 'react';
import PickColor from './PickColor'
import EditTitle from './EditTitle'

export default function EditBar(props) {
  return (
    <div className="card edit-panel">
      <div className="card-body">
        <h3 className="card-title" style={{marginBottom: '10px'}}>Graph Options</h3>
        <EditTitle title={props.title} setTitle={props.setTitle} />
        <PickColor color={props.color} setColor={(color) => props.setColor(color)} />
      </div>
    </div>
  )
}
