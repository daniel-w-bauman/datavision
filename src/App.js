import './App.css'
import Plot from 'react-plotly.js'
import * as d3 from 'd3';
import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {x0: [], y0: [], x1: [], y1: []}
  }

  componentDidMount(){
    d3.csv('/example.csv').then(data => {
      var x = []
      var y = []
      for(var i in data){
        x.push(data[i].x)
        y.push(data[i].y)
      }
      this.setState({x0: x, y0: y})
    }).catch(err => {
      console.log(err);
    })

    d3.csv('/scatter1.csv').then(data => {
      var x = []
      var y = []
      for(var i in data){
        x.push(data[i].x)
        y.push(data[i].y)
      }
      this.setState({x1: x, y1: y})
    }).catch(err => {
      console.log(err);
    })
  }

  render(){
    return (
      <div className="App">
        <div className="container-fluid">
          <h1 align={'center'}>DataVision</h1>
          <h2>Supported Types of graphs:</h2>

          <h3>Line Graphs</h3>
          <Plot data = {[{
              x: [-5, -3, -1, 1, 3, 5],
              y: [-5, -3, -1, 1, 3, 5],
              type: 'scatter',
              mode: 'lines',
              marker: {color: 'blue'},
            }]} layout = {{width: 620, height: 440, title: 'y=x'}} />

          <Plot data = {[{
              x: this.state.x0,
              y: this.state.y0,
              type: 'scatter',
              mode: 'lines',
              marker: {color: 'red'},
            }]} layout = {{width: 620, height: 440, title: 'y=x^2'}} />

          <h3>Scatter Plots</h3>
          <Plot data = {[{
            x: this.state.x1,
            y: this.state.y1,
            type: 'scatter',
            mode: 'markers',
            marker: {color: 'green'},
          }]} layout = {{width: 620, height: 440, title: 'Scatter Points'}} />

          <Plot data = {[{
            x: [0, 2, 4, 6],
            y: [4, 2, 4, 0],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'orange'},
          }]} layout = {{width: 620, height: 440, title: 'Scatter Lines'}} />

          <h3>Other formats</h3>
          <Plot data = {[{
            x: [1, 3, 5, 7],
            y: [8, 6, 4, 2],
            type: 'bar',
            marker: {color: 'brown'},
          }]} layout = {{width: 620, height: 440, title: 'Bar Graph'}} />

          <Plot data = {[{
            values: [30, 20, 50],
            labels: ['infrastructure', 'healthcare', 'transportation'],
            type: 'pie',
          }]} layout = {{width: 620, height: 440, title: 'Pie Graph'}} />
        </div>
      </div>
    )
  }
}

export default App;
