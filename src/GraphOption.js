import React from 'react'
import './App.css'

function GraphOption(props){
  return (
    <div className="card" style={{'width': '20%'}}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.link} className="btn btn-primary">Create</a>        
      </div>
    </div>
  )
}

export default GraphOption
