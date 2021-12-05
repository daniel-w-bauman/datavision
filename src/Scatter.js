import React, { useState, useEffect } from 'react'
import MyPlot from './MyPlot'
import {csv} from 'd3'

function Scatter(props){
  const [x, setX] = useState(('x' in props) ? props.x : [-4, -2, 0, 2, 4])
  const [y, setY] = useState(('y' in props) ? props.y : [-8, 2, -4, 6, -2])
  const [marker, setMarker] = useState({color: 'green'})

  useEffect(() => {
    csv('/scatter1.csv').then(data => {
      let x_ = []
      let y_ = []
      for(let item in data){
        x_.push(data[item].x)
        y_.push(data[item].y)
      }
    setX(x_)
    setY(y_)
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <MyPlot  x={x} y={y} mode='markers' marker={marker} />
  )
}

export default Scatter