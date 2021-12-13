import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from "react-router-dom";

export default function ChooseData(props) {
  const [instruction, setInstruction] = useState('Choose the independent (horizontal) data column')
  const data = ('data' in props) ? props.data : []
  const [x, setX] = useState([])
  const [choosing, setChoosing] = useState('x')
  const navigate = useNavigate()

  let selectNext = (e, col) => {
    if(choosing === 'x'){
      let x_ = []
      for(let i in data){
        x_.push(data[i][col]);
      }
      setX(x_)
      setChoosing('y')
      e.target.className = "btn btn-outline-secondary"
      setInstruction('Choose the dependent (vertical) data column')
    } else {
      let y_ = []
      for(let i in data){
        y_.push(data[i][col]);
      }
      props.setData({x: x, y: y_})
      navigate(props.link)
    }
  }

  if(data.length === 0){
    return (<div><h1>Error, please re-upload file</h1></div>)
  } else {
    return (
      <div>
        <p>{instruction}</p>
        <table className='table'>
          <thead>
            <tr>
              {Object.keys(data[0]).map((val, key) => {
                return (<th key={key}><button className="btn btn-outline-primary" onClick={(e) => selectNext(e, val)}>{val}</button></th>)
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((row, row_key) => {
              return (<tr key={row_key}>
                {Object.keys(row).map((col, col_key) => {
                  return (<td key={col_key}>{row[col]}</td>)
                })}
                </tr>)
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
