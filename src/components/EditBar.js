import React from 'react';
import PickColor from './PickColor'
import EditTitle from './EditTitle'

export default function EditBar(props) {
  const toggleAngle = () => {
    if(props.tickangle === 0){
      props.setTickangle(-45)
    } else {
      props.setTickangle(0)
    }
  }

  return (
    <div className="card edit-panel">
      <div className="card-body">
        <h3 className="card-title" style={{marginBottom: '10px'}}>Graph Options</h3>
        <EditTitle prompt={'title'} title={props.title} setTitle={props.setTitle} />
        <EditTitle prompt={'X axis label'} title={props.xtitle} setTitle={props.setXtitle} />
        <EditTitle prompt={'Y axis label'} title={props.ytitle} setTitle={props.setYtitle} />
        <PickColor color={props.color} setColor={(color) => props.setColor(color)} />
        <div className='row align-items-center'>
          <div className='col'>
            <label>Toggle label angle</label>
          </div>
          <div className='col'>
            <button className='btn btn-primary' onClick={toggleAngle}>Toggle</button>
          </div>
        </div>
      </div>
    </div>
  )
}
