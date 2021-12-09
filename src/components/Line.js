import '../App.css'
import React, { useState, useEffect } from 'react'
import MyPlot from './MyPlot'
import {csv} from 'd3'
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
    console.log("new yend value: (not NaN) " + Math.max(...y));
    setYaxis({ range: [ yaxis.range[0], Math.max(...y) ] })
  } else {
    console.log("new yend value: " + yend);
    setYaxis({ range: [ yaxis.range[0], yend ] })
  }
}

function toggleMode(mode, setMode){
  setMode((mode === 'lines') ? 'lines+markers' : 'lines')
}

export default function Line(props){
  const [x, setX] = useState(('x' in props) ? props.x : [-4, -2, 0, 2, 4])
  const [y, setY] = useState(('y' in props) ? props.y : [-8, 2, -4, 6, -2])
  const [xaxis, setXaxis] = useState({ range: [ Math.min(...x), Math.max(...x) ] })
  const [yaxis, setYaxis] = useState({ range: [ Math.min(...y), Math.max(...y) ] })
  const [mode, setMode] = useState('lines')

  useEffect(() => {
		async function readCSV(){
			try {
				let data = await csv('/example.csv')
	      let x_ = []
	      let y_ = []
	      for(let item in data){
	        let newX = parseFloat(data[item].x)
	        let newY = parseFloat(data[item].y)
	        if(!isNaN(newX)){
	          x_.push(newX)
	        }
	        if(!isNaN(newY)){
	          y_.push(newY)
	        }
	      }
		    setX(x_)
		    setY(y_)
		    setXaxis({ range: [ Math.min(...x_), Math.max(...x_) ] })
		    setYaxis({ range: [ Math.min(...y_), Math.max(...y_) ] })
			} catch(err) {
	      console.log(err);
	    }
		}
		readCSV()
  }, [])

  return (
    <div className='row'>
      <div className='col'>
        <MyPlot x={x} y={y} xaxis={xaxis} yaxis={yaxis} mode={mode} />
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
