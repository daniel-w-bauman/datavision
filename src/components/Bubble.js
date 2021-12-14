import React from 'react'
import Map from './Map'
import Plot from 'react-plotly.js'

export default function Bubble(props){
  let unpack = (rows, key) => {
    return rows.map(function(row) { return row[key]; });
  }

  const cityName = unpack(props.data, 'name')
  const cityPop = unpack(props.data, 'pop')
  const cityLat = unpack(props.data, 'lat')
  const cityLon = unpack(props.data, 'lon')
  const color = [,"rgb(255,65,54)","rgb(133,20,75)","rgb(255,133,27)","lightgrey"]
  let citySize = []
  let hoverText = []
  const scale = 50000

  for ( var i = 0 ; i < cityPop.length; i++) {
      var currentSize = cityPop[i] / scale;
      var currentText = cityName[i] + " pop: " + cityPop[i];
      citySize.push(currentSize);
      hoverText.push(currentText);
  }

  var data = [{
      type: 'scattergeo',
      locationmode: 'USA-states',
      lat: cityLat,
      lon: cityLon,
      hoverinfo: 'text',
      text: hoverText,
      marker: {
          size: citySize,
          line: {
              color: 'black',
              width: 2
          },
      }
  }];

  var layout = {
      title: '2014 US City Populations',
      showlegend: false,
      geo: {
          scope: 'usa',
          projection: {
              type: 'albers usa'
          },
          showland: true,
          landcolor: 'rgb(217, 217, 217)',
          subunitwidth: 1,
          countrywidth: 1,
          subunitcolor: 'rgb(255,255,255)',
          countrycolor: 'rgb(255,255,255)'
      },
  };


  return (
    <div>
      <Plot data={data} layout={layout} />
    </div>
  )
}
