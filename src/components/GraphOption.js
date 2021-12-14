import React from 'react'
import '../App.css'
import { Link } from "react-router-dom"

export default function GraphOption(props){
  return (
    <div className="card" style={{marginBottom: '25px', marginTop: '25px', maginRight: '10px', marginLeft: '10px'}}>
      {('img' in props) ? (<img src={props.img} className='card-img-top' alt={''} />) : (<div></div>)}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <Link to={props.link} className="btn btn-primary">Create</Link>
      </div>
    </div>
  )
}
