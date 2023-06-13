import React, { useEffect, useRef, useState } from 'react'
import Start from './components/start'
import Quiz from './components/quiz'
import './App.css'
import { nanoid } from 'nanoid'


let checkedAnswers = []
let rows = []


function App() {


const [clicked, setClicked] = useState("")
  const [rounds, setRounds] = useState(0)
  const [rend, setRend] = useState(false)
   const [start, setStart] = useState(false)
   const [questions, setQuestions] = useState([])


  let quizData
// let pytania = useRef([{qestion:"pyt1", incorrect_answers:["cos1", "cos2", "cos3"], id:"1", isHeld:false},{qestion:"pyt2", incorrect_answers:["cos1", "cos2", "cos3"], id:"2", isHeld:false},{qestion:"pyt3", incorrect_answers:["cos1", "cos2", "cos3"], id:"3", isHeld:false},{qestion:"pyt4", incorrect_answers:["cos1", "cos2", "cos3"], id:"4", isHeld:false},{qestion:"pyt5", incorrect_answers:["cos1", "cos2", "cos3"], id:"5", isHeld:false}])



 useEffect(()=>{
 fetch ('https://opentdb.com/api.php?amount=10')
    .then ((res)=>res.json())
    .then ((data) => setQuestions(sortQuestions(data.results)))
  return ()=>{
    setQuestions([])
  }
}, [rounds])
   


function sortQuestions(data){
  let testArr = []
  let test = []
  test = data
  testArr = test.map((item) => {
    let rand = Math.floor(Math.random()*item.incorrect_answers.length)-1
    let addCorrect = item.incorrect_answers
    addCorrect.splice(rand,0,item.correct_answer)
    // console.log("addcorrect " + addCorrect)
    return {
      ...item,
    incorrect_answers: addCorrect,
  }
})
return testArr
}




quizData = questions.map(que => 
  (
   <Quiz 
   question = {que.question}
   answers = {que.incorrect_answers}
   correct = {que.correct_answer}
   key = {que.key}
   id = {questions.indexOf(que)}
   // isHeld={que.isHeld}
   checked={checkedAnswers}
   clicked={clicked}
   setclicked={(e)=>handleClick(e)}
   />
 )) 




function handleClick(e){
  let checked = e.target.id
  let r = checked.charAt(0)
 
  if (rows.find(it => it === r)){  
    console.log('not found')
 
} else {  
   rows.push(r)
  checkedAnswers.push(checked)
}
 
setRend(old => !old)
  
}


function handleRounds(){
  setRounds((old)=>old + 1)
}



  return (
      <div className='app'>
        {start && (<h1 id="begin">Let's begin</h1>)}
     { start && quizData }
       {!start && <Start 
       start={start}
       setrend={()=>setStart(old=>!old)}
       setstart={()=>setStart(true)}
       />}
      
     {start && (<div className='check-answers-btn' onClick={handleRounds}>Check answers</div>) }

    </div>
  )
}

export default App
