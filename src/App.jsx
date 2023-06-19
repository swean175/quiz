import React, { useEffect, useRef, useState } from 'react'
import Start from './components/start'
import Quiz from './components/quiz'
import './App.css'
import { nanoid } from 'nanoid'


let checkedAnswers = []
let rows = []
let correctAnswersIndex = []
let score = []
let modal = false
let res = 0


function App() {


// const [clicked, setClicked] = useState("")
  const [rounds, setRounds] = useState(1)
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
  let rowIndex = -1
  testArr = test.map((item) => {
   rowIndex ++
   let indNum = item.incorrect_answers.length
    let rand = Math.floor(Math.random()*indNum)
    let addCorrect = item.incorrect_answers
    addCorrect.splice(rand,0,item.correct_answer)
    correctAnswersIndex.push(rowIndex+"-"+rand)

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
   key = {que.key}
   id = {questions.indexOf(que)}
   checked={checkedAnswers}
  //  clicked={clicked}
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
console.log(correctAnswersIndex)
}
setRend(old => !old)
}


function handleScore(){
score = []
 
  for (let i = 0; i < 10; i++){
    checkedAnswers.find(element => element == correctAnswersIndex[i])?score.push(true):score.push(false)
  }

  modal = true

score.map((it) => {
  if (it){res+=1}
  else {res+=0}
})

  setRend(old => !old)

 console.log(res)
}




function handleRounds(){
 
  setRounds(old=> old + 1)
  modal = false
  setRend(old => !old)
  res = 0
  checkedAnswers = []
  rows = []
  score = []
}




  return (
  
    <div className='app'>
    <div id="modal" className={modal?"modal":"invisible"}>
      <h2>Results</h2>
<ol>
<li className={score[0]?"corect":"incorect"}>{score[0]?"Correct":"Wrong"}</li>
<li className={score[1]?"corect":"incorect"}>{score[1]?"Correct":"Wrong"}</li>
<li className={score[2]?"corect":"incorect"}>{score[2]?"Correct":"Wrong"}</li>
<li className={score[3]?"corect":"incorect"}>{score[3]?"Correct":"Wrong"}</li>
<li className={score[4]?"corect":"incorect"}>{score[4]?"Correct":"Wrong"}</li>
<li className={score[5]?"corect":"incorect"}>{score[5]?"Correct":"Wrong"}</li>
<li className={score[6]?"corect":"incorect"}>{score[6]?"Correct":"Wrong"}</li>
<li className={score[7]?"corect":"incorect"}>{score[7]?"Correct":"Wrong"}</li>
<li className={score[8]?"corect":"incorect"}>{score[8]?"Correct":"Wrong"}</li>
<li className={score[9]?"corect":"incorect"}>{score[9]?"Correct":"Wrong"}</li>
</ol>
<h3>Your Score {res} / 10 </h3>
<button type='button' onClick={handleRounds}> Next</button>
    </div>

        {start && (<h1 id="begin">Round {rounds} let's begin</h1>)}
     { start && quizData }
       {!start && <Start 
       start={start}
       setrend={()=>setStart(old=>!old)}
       setstart={()=>setStart(true)}
       />}
      
     {start && (<div className='check-answers-btn' onClick={handleScore}>Check answers</div>) }

    </div>
  )
}

export default App
