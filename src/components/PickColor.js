import React, { useState } from 'react'
import ColorPicker from "react-pick-color";

export default function PickColor(props) {
  const [on, setOn] = useState(false)

  return (
    <div className='row'>
      <div className='col'>
        <button className={on ? 'btn btn-secondary' : 'btn btn-primary'} onClick={(e) => {setOn(!on)}}>Edit Color</button>
      </div>
      <div className='col' style={{display: (on ? '' : 'none')}}>
        <ColorPicker color={props.color} onChange={(color) => props.setColor(color.hex)} />
      </div>
    </div>
  )
}
