import '../App.css'
import React, { useState } from 'react'
import MyPlot from './MyPlot'
import EditPie from './EditPie'

export default function Pie(props){
  const labels = ('x' in props.data) ? props.data.x : ['bank', 'cash', 'stocks']
  const values = ('y' in props.data) ? props.data.y : [50, 20, 30]
  const [title, setTitle] = useState('Pie')
  const [hole, setHole] = useState(0)

  return (
    <div className='row'>
      <div className='col'>
        <MyPlot labels={labels} values={values} type='pie' title={title} hole={hole} />
      </div>
      <div className='col'>
        <EditPie
          title={title}
          setTitle={setTitle}
          hole={hole}
          setHole={setHole}
        />
      </div>
    </div>
  )
}
