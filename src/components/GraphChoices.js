import React from 'react'
import GraphOption from './GraphOption'
import '../App.css'

export default function GraphChoices(props){
    return (
      <div>
        <h3>Which type of graph would you like to create?</h3>
        <div className='row'>
          <div className='col'>
            <GraphOption title='Scatter Points' text='A graph of scattered points' link='/upload-scatter' img="/scatter.png" />
          </div>
          <div className='col'>
            <GraphOption title='Line' text='A graph of a line or lines' link='/upload-line' img='/line.png' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <GraphOption title='Bar Chart' text='A chart with columns representing categories' link='/upload-bar' img='/bar.png' />
          </div>
          <div className='col'>
            <GraphOption title='Pie Chart' text='A circular chart with slices representing portions' link='/upload-pie' img='/pie.png' />
          </div>
          <div className='col'>
            <GraphOption title='Map Bubbles' text='A map with bubbles of different sizes' link='/upload-map-bubbles' img='/map.png' />
          </div>
        </div>
      </div>
    )
}
