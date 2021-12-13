import '../App.css'
import React, { useState } from 'react'
import MyPlot from './MyPlot'
import EditBar from './EditBar'


export default function Bar(props){
  const x = ('x' in props.data) ? props.data.x.filter(i => !(i === undefined)) : ['giraffes', 'elephants', 'lions']
  const y = ('y' in props.data) ? props.data.y.filter(i => !(i === undefined)) : [20, 14, 23]
  const [color, setColor] = useState('blue')
  const [title, setTitle] = useState('Bar')

  return (
    <div className='row'>
      <div className='col'>
        <MyPlot x={x} y={y} yaxis={{range: [0, Math.max(...y)]}} type='bar' marker={{color: color}} title={title} />
      </div>
      <div className='col'>
        <EditBar
        color={color}
        setColor={setColor}
        title={title}
        setTitle={setTitle} />
      </div>
    </div>
  )
}
