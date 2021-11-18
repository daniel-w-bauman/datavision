import './App.css'
import Plot from 'react-plotly.js'
import {csv} from 'd3';
import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {data: []}
  }

  componentDidMount(){
    csv('example.csv').then(data => {
      console.log("before");
      console.log(data);
      console.log("after");
    }).catch(err => {
      console.log(err);
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>DataVision</h1>
          <Plot
          data={[
            {
              x: [0, 1, 2, 3, 4, 5],
              y: [0, 2, 4, 6, 8, 10],
              type: 'scatter',
              mode: 'lines',
              marker: {color: 'red'},
            },
          ]}
          layout={{width: 620, height: 440, title: 'Example'}} />
        </header>
      </div>
    )
  }
}

export default App;
