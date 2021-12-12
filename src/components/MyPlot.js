import Plot from 'react-plotly.js'
import React from 'react'
import '../App.css'

export default function MyPlot(props) {
  const x = ('x' in props) ? props.x : [-4, -2, 0, 2, 4]
  const y = ('y' in props) ? props.y : [-8, 2, -4, 6, -2]
  const type = ('type' in props) ? props.type : 'scatter'
  const mode = ('mode' in props) ? props.mode : 'lines+markers'
  const marker = ('marker' in props) ? props.marker : {color: 'green'}
  const title = ('title' in props) ? props.title : 'Scatter Lines'
  const width = ('width' in props) ? props.width : 640
  const height = ('height' in props) ? props.height : 420
  const xaxis = ('xaxis' in props) ? props.xaxis : { range: [ Math.min(...x), Math.max(...x) ] }
  const yaxis = ('yaxis' in props) ? props.yaxis : { range: [ Math.min(...y), Math.max(...y) ] }

  if(('labels' in props) && ('values' in props) && (type == 'pie')){
    return (
      <Plot data = {[{
        labels: props.labels,
        values: props.values,
        type: type
      }]} layout = {{width: width, height: height, title: title}} />
    )
  } else {
    return (
      <Plot data = {[{
          x: x,
          y: y,
          type: type,
          mode: mode,
          marker: marker,
        }]} layout = {{width: width, height: height, title: title, xaxis: xaxis, yaxis: yaxis}} />
    )
  }
}
