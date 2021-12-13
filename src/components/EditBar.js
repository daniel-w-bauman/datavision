import React from 'react';
import PickColor from './PickColor'

export default function EditBar(props) {
  return (
    <div className="card edit-panel">
      <div className="card-body">
        <h3 className="card-title" style={{marginBottom: '10px'}}>Graph Options</h3>
        <PickColor color={props.color} setColor={(color) => props.setColor(color)} />
      </div>
    </div>
  )
}
