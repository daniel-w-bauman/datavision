import '../App.css'
import React from 'react'
import MyPlot from './MyPlot'


export default function Pie(props){
  const labels = ('x' in props.data) ? props.data.x : ['bank', 'cash', 'stocks']
  const values = ('y' in props.data) ? props.data.y : [50, 20, 30]

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
