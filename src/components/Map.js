import Plot from 'react-plotly.js'
import React from 'react'
import '../App.css'

export default function Map(props) {
  const width = ('width' in props) ? props.width : 640
  const height = ('height' in props) ? props.height : 420
  const type = ('type' in props) ? props.type : 'scattergeo'
  const title = ('title' in props) ? props.title : 'Map'
  const locations = ('locations' in props) ? props.locations : ['FRA', 'DEU', 'RUS', 'ESP']
  const name = ('name' in props) ? props.name : 'map'
  const mode = ('mode' in props) ? props.mode : 'markers'
  const geo = ('geo' in props) ? props.geo : {
    'scope': 'europe',
    'resolution': 50
  }
  const marker = ('marker' in props) ? props.marker : {
    size: [20, 30, 15, 10],
    color: [10, 20, 40, 50],
    cmin: 0,
    cmax: 50,
    colorscale: 'Greens',
    colorbar: {
        title: 'Some rate',
        ticksuffix: '%',
        showticksuffix: 'last'
    },
    line: {
        color: 'black'
    }
  }

  return (
    <Plot data = {[{
      type: type,
      mode: mode,
      locations: locations,
      marker: marker,
      name: name,
    }]} layout = {{width: width, height: height, title: title, geo: geo}} />
  )
}
