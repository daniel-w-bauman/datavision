import './App.css'
import React from 'react'
import GraphChoices from './GraphChoices'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Scatter from './Scatter'
import Line from './Line'

export default function App(){
  return (
    <div className="container-fluid">
      <h1 align={'center'}>DataVision</h1>
      <Router>
        <Routes>
          <Route exact path='/' element={<GraphChoices />} />
          <Route path='/make-scatter' element={<Scatter />} />
          <Route path='/make-line' element={<Line />} />
        </Routes>
      </Router>
    </div>
  )
}
