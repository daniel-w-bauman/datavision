import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import {csv} from 'd3'
import { useNavigate } from "react-router-dom";

export default function Upload(props) {
  const [file, setFile] = useState()
  const [filename, setFilename] = useState('')
  const navigate = useNavigate()

  const saveFile = (e) => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
  }

  const uploadFile = async (e) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('fileName', filename)
    try {
      const uploadRes = await axios.post('http://localhost:8000/upload', formData)
      if('data' in uploadRes){
        if('filename' in uploadRes.data){
          async function readCSV() {
      			try {
      				let data = await csv('http://localhost:8000/' + uploadRes.data.filename)
      	      return data
      			} catch(err) {
      	      console.log(err);
              return {'error': err}
      	    }
      		}
      		const res = await readCSV()
          if('error' in res){
            alert(res.error)
            console.log(res.error)
          } else {
            props.setData(res)
            navigate(props.link)
          }
        } else {
          console.log('Error: no filename in response');
        }
      } else {
        console.log('Error: no data in response');
      }
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="container">
      <h1>Upload a file</h1>
      <input className="form-control" type="file" onChange={saveFile} style={{marginBottom: '20px'}} />
      <button className="btn btn-primary" onClick={uploadFile}>Upload</button>
    </div>
  )
}
