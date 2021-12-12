import React, { useState } from 'react'
import MyPlot from './MyPlot'
import '../App.css'
import EditLine from './EditLine'

function editXStart(xstart, xaxis, setXaxis, x){
  if(isNaN(xstart)){
    setXaxis({ range: [ Math.min(...x), xaxis.range[1] ] })
  } else {
    setXaxis({ range: [ xstart, xaxis.range[1] ] })
  }
}

function editXEnd(xend, xaxis, setXaxis, x){
  if(isNaN(xend)){
    setXaxis({ range: [ xaxis.range[0], Math.max(...x) ] })
  } else {
    setXaxis({ range: [ xaxis.range[0], xend ] })
  }
}

function editYStart(ystart, yaxis, setYaxis, y){
  if(isNaN(ystart)){
    setYaxis({ range: [ Math.min(...y), yaxis.range[1] ] })
  } else {
    setYaxis({ range: [ ystart, yaxis.range[1] ] })
  }
}

function editYEnd(yend, yaxis, setYaxis, y){
  if(isNaN(yend)){
    console.log(y);
    setYaxis({ range: [ yaxis.range[0], Math.max(...y) ] })
  } else {
    setYaxis({ range: [ yaxis.range[0], yend ] })
  }
}

function toggleMode(mode, setMode){
  setMode((mode === 'markers') ? 'lines+markers' : 'markers')
}

export default function Scatter(props){
  const x = ('x' in props.data) ? props.data.x.map(i => parseFloat(i)).filter(i => !isNaN(i)) : [-4, -2, 0, 2, 4]
  const y = ('y' in props.data) ? props.data.y.map(i => parseFloat(i)).filter(i => !isNaN(i)) : [-8, 2, -4, 6, -2]
  const [xaxis, setXaxis] = useState({ range: [ Math.min(...x), Math.max(...x) ] })
  const [yaxis, setYaxis] = useState({ range: [ Math.min(...y), Math.max(...y) ] })
  const [mode, setMode] = useState('markers')

  return (
    <div className='row'>
      <div className='col'>
        <MyPlot  x={x} y={y} xaxis={xaxis} yaxis={yaxis} mode={mode} />
      </div>
      <div className='col'>
        <EditLine
          editXStart={(xstart) => editXStart(xstart, xaxis, setXaxis, x)}
          editXEnd={(xend) => editXEnd(xend, xaxis, setXaxis, x)}
          editYStart={(ystart) => editYStart(ystart, yaxis, setYaxis, y)}
          editYEnd={(yend) => editYEnd(yend, yaxis, setYaxis, y)}
          toggleMode={() => toggleMode(mode, setMode)}
          />
      </div>
    </div>
  )
}
