import React from 'react'
import {useParams} from "react-router-dom"
function CharOrNum() {
    const {char} =useParams();
    return (
        <>
        {  isNaN(char)?<h3>The Word is {char}</h3> : <h3> The Number is {char}</h3>}
        </>    
    );
}




export default CharOrNum