import React from 'react'
import EditTitle from './EditTitle'
import PickColor from './PickColor'

export default function EditBar(props) {
  return (
    <div className="card edit-panel">
      <div className="card-body">
        <h3 className="card-title" style={{marginBottom: '10px'}}>Graph Options</h3>
        <EditTitle prompt={'title'} title={props.title} setTitle={props.setTitle} />
        <div className='row align-items-center'>
          <div className='col'>
            <label>Pick a background color</label>
          </div>
          <div className='col'>
            <PickColor color={props.backgroundColor} setColor={(color) => props.setBackgroundColor(color)} />
          </div>
        </div>
        <div className='row align-items-center'>
          <div className='col'>
            <label>Pick a bubble color</label>
          </div>
          <div className='col'>
            <PickColor color={props.bubbleColor} setColor={(color) => props.setBubbleColor(color)} />
          </div>
        </div>
      </div>
    </div>
  )
}
