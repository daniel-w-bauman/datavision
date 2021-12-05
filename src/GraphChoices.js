import React from 'react'
import GraphOption from './GraphOption'

function GraphChoices(props){
    return (
      <div>        
        <h3>Which type of graph would you like to create?</h3>
        <div className='row'>
          <div className='col'>
            <GraphOption title='Scatter Points' text='A graph of scattered points' link='/make-scatter' />
          </div>
          <div className='col'>
            <GraphOption title='Line' text='A graph of a line or lines' link='/make-line' />
          </div>
          <div className='col'>
            <GraphOption title='Bubble' text='A graph of bubbles of different sizes' link='/make-bubble' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <GraphOption title='Map Lines' text='A map with lines on it' link='/make-map-lines' />
          </div>
          <div className='col'>
            <GraphOption title='Map Points' text='A map with points of different sizes' link='/make-map-points' />
          </div>
          <div className='col'>
            <GraphOption title='Map Areas' text='A map with differently colored areas' link='/make-map-areas' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <GraphOption title='Histogram Chart' text='A chart with columns representing distribution' link='/make-histogram' />
          </div>
          <div className='col'>
            <GraphOption title='Bar Chart' text='A chart with columns representing categories' link='/make-bar' />
          </div>
          <div className='col'>
            <GraphOption title='Pie Chart' text='A circular chart with slices representing portions' link='/make-pie' />
          </div>
        </div>
      </div>
    )
}

export default GraphChoices
