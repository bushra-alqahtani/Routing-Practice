import React from 'react'
import {useParams} from "react-router-dom"
function FullColor() {
    const {char, color, bgc} =useParams();
  return (
    <div className='App'>
        <h1 style={{color:color,backgroundColor:bgc}}> the word id :{char}</h1>
        </div>
  )
}

export default FullColor