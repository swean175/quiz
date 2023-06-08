import { useState } from 'react'
import React, {  useEffect } from "react";
import Start from './components/start'
import Quiz from './components/quiz'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [start, setStart] = useState(false)
  const [rounds, setRounds] = useState(0)

 
  let questions = []

 
    fetch ('https://opentdb.com/api.php?amount=10')
    .then ((res)=>res.json())
    .then ((data) => getQuestions(data.results))

  

function getQuestions(data){
  for (let i = 0; i < data.length; i++){
   questions.push(data[i])
   }

   return questions
}
  
console.log(questions)

  return (
      <div className='app'>
      {
        start ?
        <Quiz 
        quiz = {questions}
        setround = {()=>setRound(old=>old + 1)}
        />
        :
       <Start 
       start={start}
        setstart={()=>setStart(true)}
       />
      }
      <p>jajo</p>

    </div>
  )
}

export default App
