import './App.css'
//import Plot from 'react-plotly.js'
//import * as d3 from 'd3';
import MyPlot from './MyPlot'
import React from 'react'
import GraphChoices from './GraphChoices'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App(){
  return (
    <div className="container-fluid">
      <h1 align={'center'}>DataVision</h1>
      <Router>
        <Routes>
          <Route exact path='/' element={<GraphChoices />} />
          <Route path='/make-scatter' element={<MyPlot mode='markers'/>} />
          <Route path='/make-line' element={<MyPlot mode='lines+markers' />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
