import React from 'react'
import EditTitle from './EditTitle'

export default function EditPie(props) {

  const toggleHole = () => {
    if(props.hole === 0) {
      props.setHole(0.4)
    } else {
      props.setHole(0)
    }
  }

  return (
    <div className="card edit-panel">
      <div className="card-body">
        <h3 className="card-title" style={{marginBottom: '10px'}}>Graph Options</h3>
        <EditTitle prompt={'title'} title={props.title} setTitle={props.setTitle} />
        <div className='row align-items-center'>
          <div className='col'>
            <label>Toggle donut pie</label>
          </div>
          <div className='col'>
            <button className='btn btn-primary' onClick={toggleHole}>Toggle</button>
          </div>
        </div>
      </div>
    </div>
  )
}
