


export default function Start(props){
   ()=>props.setrend
return (
   <div className = "start">
        <h1>Quizicall</h1>
        <h2>Answer 10 questions each round, first marked answer cannot be changed</h2>
        <button className='start-btn' onClick={props.setstart}>Start quiz</button>
    </div>
)
}