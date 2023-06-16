import { useState } from 'react'



export default function Quiz(props){
// console.log("props from quiz " + props.answers)
let checked = props.checked


function dane(){ 
    
    let num = 0 
    let a = props.answers
    let q = a.map(item => {

    let elementId = `${props.id}-${num}`
    num++
    return (
    <button type="button" className={checked.find(el => el === elementId)?"single-ans-chosen-btn":"single-ans-btn"} id={elementId} onClick={props.setclicked}> {item} </button> 
    ) 
   })


    return (
        <>
    
  <div className="questions"><h1>
 {"#"+(props.id+1)+" "+props.question}</h1>
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