import '../App.css'
import React, { useState, useEffect } from 'react'
import MyPlot from './MyPlot'
import {csv} from 'd3'


export default function Bar(props){
  const [x, setX] = useState(('x' in props) ? props.x : ['giraffes', 'elephants', 'lions'])
  const [y, setY] = useState(('y' in props) ? props.y : [20, 14, 23])

  useEffect(() => {
		async function readCSV(){
			try {
				let data = await csv('/bar1.csv')
	      let x_ = []
	      let y_ = []
	      for(let item in data){
	        let newX = data[item].x
	        let newY = parseFloat(data[item].y)

	        if(!isNaN(newY)){
            x_.push(newX)
	          y_.push(newY)
	        }
	      }
		    setX(x_)
		    setY(y_)
			} catch(err) {
	      console.log(err);
	    }
		}
		readCSV()
  }, [])

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
