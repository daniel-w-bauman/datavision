import '../App.css'
import React from 'react'
import MyPlot from './MyPlot'


export default function Bar(props){
  const x = ('x' in props.data) ? props.data.x : ['giraffes', 'elephants', 'lions']
  const y = ('y' in props.data) ? props.data.y : [20, 14, 23]

  return (
    <div className='row'>
      <div className='col'>
        <MyPlot x={x} y={y} yaxis={{range: [0, Math.max(...y)]}} type='bar' />
      </div>
      <div className='col'>

      </div>
    </div>
  )
}
