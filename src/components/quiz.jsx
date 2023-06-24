import React, { useEffect, useRef, useState } from 'react'
import {decode} from 'html-entities'


export default function Quiz(props){
// console.log("props from quiz " + props.answers)
let checked = props.checked
let correctArr = props.correct


console.log("checked - "+checked)
console.log("correctArr - " + correctArr)


function disp(elementId){
    // Checks wich class should be added to answers buttons
  
if (props.modal) {
  return checked.find(el => el === elementId) && correctArr.find(el => el === elementId)?"single-ans-btn corect": checked.find(el => el === elementId)? "single-ans-btn incorect": "single-ans-btn"  
 } else {
   return checked.find(el => el === elementId)?"single-ans-chosen-btn":"single-ans-btn" 
    }
}



function dane(){ 
    
    let num = 0 
    let a = props.answers
    let q = a.map(item => {

    let elementId = `${props.id}-${num}`
    num++

    return (
    <button type="button" className={disp(elementId)} id={elementId} onClick={props.setclicked}> {decode(item)} </button> 
    ) 
   })


    return (
        <>
    
  <div className="questions"><h2>
 {"#"+(props.id+1)+" "+decode(props.question)}</h2>
 </div>
 <div className="answers">
  {q}
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