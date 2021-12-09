import React from 'react'
import '../App.css'
import { Link } from "react-router-dom"

export default function GraphOption(props){
  return (
    <div className="card" style={{'margin': '25px'}}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <Link to={props.link} className="btn btn-primary">Create</Link>
      </div>
    </div>
  )
}
