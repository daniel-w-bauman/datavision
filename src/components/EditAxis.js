import React from 'react'
import '../App.css'

export default function EditAxis(props) {
  return (
    <div>
      <div className="row align-items-center">
        <div className="col">
          <label className="form-label">X axis starting value:</label>
        </div>
        <div className="col">
          <input type="text" className="form-control num-input" placeholder="X start" onChange={(e) => props.editXStart(parseFloat(e.target.value))} />
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col">
          <label className="form-label">X axis ending value:</label>
        </div>
        <div className="col">
          <input type="text" className="form-control num-input" placeholder="X end" onChange={(e) => props.editXEnd(parseFloat(e.target.value))} />
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col">
          <label className="form-label">Y axis starting value:</label>
        </div>
        <div className="col">
          <input type="text" className="form-control num-input" placeholder="Y start" onChange={(e) => props.editYStart(parseFloat(e.target.value))} />
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col">
          <label className="form-label">Y axis ending value:</label>
        </div>
        <div className="col">
          <input type="text" className="form-control num-input" placeholder="Y end" onChange={(e) => props.editYEnd(parseFloat(e.target.value))} />
        </div>
      </div>
    </div>
  )
}
