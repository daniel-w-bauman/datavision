import './App.css'
//import Plot from 'react-plotly.js'
//import * as d3 from 'd3';
import React from 'react'
//import MyPlot from './MyPlot'
import GraphOption from './GraphOption'

function App(){
  return (
    <div className="App">
      <div className="container-fluid">
        <h1 align={'center'}>DataVision</h1>
        <h3>Which type of graph would you like to create?</h3>
        <GraphOption title='Scatter Points' text='A graph of scattered points' link='/make-scatter' />

      </div>
    </div>
  )
}

export default App;
