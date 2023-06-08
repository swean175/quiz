import { useState } from 'react'


export default function Start(props){
   
return (
   <div className = "start">
        <h1>Quizicall</h1>
        <h2>description</h2>
        <button className='start-btn' onClick={props.setstart}>Start quiz</button>
    </div>
)
}