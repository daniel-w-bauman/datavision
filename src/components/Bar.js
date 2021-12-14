import '../App.css'
import React, { useState } from 'react'
import MyPlot from './MyPlot'
import EditBar from './EditBar'


export default function Bar(props){
  const x = ('x' in props.data) ? props.data.x.filter(i => !(i === undefined)) : ['giraffes', 'elephants', 'lions']
  const y = ('y' in props.data) ? props.data.y.filter(i => !(i === undefined)) : [20, 14, 23]
  const [color, setColor] = useState('blue')
  const [title, setTitle] = useState('Bar')
  const [tickangle, setTickangle] = useState(0)
  const [xtitle, setXtitle] = useState('')
  const [ytitle, setYtitle] = useState('')

  return (
    <div className='row'>
      <div className='col'>
        <MyPlot x={x} y={y} xaxis={{tickangle: tickangle, title: xtitle}} yaxis={{range: [0, Math.max(...y)], title: ytitle}} type='bar' marker={{color: color}} title={title} />
      </div>
      <div className='col'>
        <EditBar
        color={color}
        setColor={setColor}
        title={title}
        setTitle={setTitle}
        tickangle={tickangle}
        setTickangle={setTickangle}
        xtitle={xtitle}
        setXtitle={setXtitle}
        setYtitle={setYtitle}
        ytitle={ytitle} />
      </div>
    </div>
  )
}
