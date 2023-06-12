import { useState } from 'react'




export default function Quiz(props){

let checked = props.checked


function dane(){ 
   
    let num = 0 
    let a = props.answers
    // let ran = Math.floor(Match.random() * a.length)
    // a.splice(ran,0,props.correct)
    a.map(item => {
        
    let elementId = `${props.id}-${num}`
    num++
    return (
    <button type="button" className={checked.find(el => el == elementId)?"single-ans-chosen":"single-ans"} id={elementId} onClick={props.setclicked}> {item} </button> 
    ) 
   })
 


    return (
        <>
    
  <div className="questions"><h1>
 {props.question}</h1>
 </div>
 <div className="answers">
  {a}
  </div>
  <hr></hr>
  </>
    )
 }



    return (
        <div className='quiz'>
           
       {dane()}

        </div>
    )
}