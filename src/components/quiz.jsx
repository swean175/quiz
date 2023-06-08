import { useEffect, useState } from 'react'



export default function Quiz(props){
// console.log(props.quiz)
  
let fill = []  
const [marked, setMarked] = useState(false) 


    for (let i = 0; i < props.quiz.length ; i++){
    let arr = props.quiz
    fill.push(dane(arr[i].question, arr[i].incorrect_answers, marked))
}

// function handleClick(){
// setMarked(old=>{!old})

// }

 function dane(q,b,m){ 
   let a = b.map(item => {
    return (
    <button type="button" className={!m?"single-ans":"single-ans-chosen"} > {item} </button> 
    ) 
   })

    return (
        <>
    
  <div className="questions"><h1>
 {q}</h1>
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
            <h1>Let's begin now</h1>
         
<div className='check-answers'>Check answers</div>
        </div>
    )
}