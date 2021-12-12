import '../App.css'
import React, { useState, useEffect } from 'react'
import MyPlot from './MyPlot'
import {csv} from 'd3'


export default function Pie(props){
  const [labels, setLabels] = useState(('labels' in props) ? props.labels : ['bank', 'cash', 'stocks'])
  const [values, setValues] = useState(('values' in props) ? props.values : [50, 20, 30])

  useEffect(() => {
		async function readCSV(){
			try {
				let data = await csv('/pie1.csv')
	      let labels_ = []
	      let values_ = []
	      for(let item in data){
	        let newLabel = data[item].label
	        let newValue = parseFloat(data[item].value)

	        if(!isNaN(newValue)){
            labels_.push(newLabel)
	          values_.push(newValue)
	        }
	      }
		    setLabels(labels_)
		    setValues(values_)
			} catch(err) {
	      console.log(err);
	    }
		}
		readCSV()
  }, [])

  return (
    <div className='row'>
      <div className='col'>
        <MyPlot labels={labels} values={values} type='pie' />
      </div>
      <div className='col'>

      </div>
    </div>
  )
}
