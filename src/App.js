import './App.css'
import React, { useState } from 'react'
import GraphChoices from './components/GraphChoices'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Scatter from './components/Scatter'
import Line from './components/Line'
import Bar from './components/Bar'
import Pie from './components/Pie'
import Upload from './components/Upload'

export default function App(){
  const [data, setData] = useState([])

  return (
    <div className="container-fluid">
      <h1 align={'center'}>DataVision</h1>
      <Router>
        <Routes>
          <Route exact path='/' element={<GraphChoices />} />
          <Route path='/upload-scatter' element={<Upload link='/make-scatter' setData={setData} />} />
          <Route path='/upload-line' element={<Upload link='/make-line' setData={setData} />} />
          <Route path='/upload-bar' element={<Upload link='/make-bar' setData={setData} />} />
          <Route path='/upload-pie' element={<Upload link='/make-pie' setData={setData} />} />
          <Route path='/make-scatter' element={<Scatter data={data} />} />
          <Route path='/make-line' element={<Line data={data} />} />
          <Route path='/make-bar' element={<Bar data={data} />} />
          <Route path='/make-pie' element={<Pie data={data} />} />
        </Routes>
      </Router>
    </div>
  )
}
