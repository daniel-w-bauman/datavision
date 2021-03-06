import './App.css'
import React, { useState } from 'react'
import GraphChoices from './components/GraphChoices'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Scatter from './components/Scatter'
import Line from './components/Line'
import Bar from './components/Bar'
import Pie from './components/Pie'
import Upload from './components/Upload'
import ChooseData from './components/ChooseData'
import Bubble from './components/Bubble'

export default function App(){
  const [data, setData] = useState([])

  return (
    <div className="container-fluid">
      <Router>
        <h1 align={'center'}><Link to='/' style={{textDecoration: 'none', color: 'black'}}>DataVision</Link></h1>
        <Routes>
          <Route exact path='/' element={<GraphChoices />} />
          <Route path='/upload-scatter' element={<Upload link='/choose-data-scatter' setData={setData} />} />
          <Route path='/upload-line' element={<Upload link='/choose-data-line' setData={setData} />} />
          <Route path='/upload-bar' element={<Upload link='/choose-data-bar' setData={setData} />} />
          <Route path='/upload-pie' element={<Upload link='/choose-data-pie' setData={setData} />} />
          <Route path='/upload-map-bubbles' element={<Upload link='/make-map-bubbles' setData={setData} />} />

          <Route path='/choose-data-scatter' element={<ChooseData link='/make-scatter' data={data} setData={setData} />} />
          <Route path='/choose-data-line' element={<ChooseData link='/make-line' data={data} setData={setData} />} />
          <Route path='/choose-data-bar' element={<ChooseData link='/make-bar' data={data} setData={setData} />} />
          <Route path='/choose-data-pie' element={<ChooseData link='/make-pie' data={data} setData={setData} />} />

          <Route path='/make-scatter' element={<Scatter data={data} />} />
          <Route path='/make-line' element={<Line data={data} />} />
          <Route path='/make-bar' element={<Bar data={data} />} />
          <Route path='/make-pie' element={<Pie data={data} />} />

          <Route path='/make-map-bubbles' element={<Bubble data={data} />} />
        </Routes>
      </Router>
    </div>
  )
}
