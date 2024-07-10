import React from 'react'
import { useState } from 'react'

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [score, setScore] = useState(0)

  const [showScore, setShowScore] = useState(false)

  const questions = [
    {
      question:"What is the capital of Canada?",
      options:["Toronto","Ottawa","Montreal"],
      answer:'Ottawa'
    },
    {
      question:"What is the longest river in the world?",
      options:["The Nile River","The Indus River","The Yangtze River"],
      answer:"The Nile River"
    },
    {
      question:"Which desert is the largest in the world?",
      options:["The Sahara Desert","The Gobi Desert","The Kalahari Desert"],
      answer:"The Sahara Desert"
    },
    {
      question:"What country has the most natural lakes?",
      options:["America","Russia","Canada"],
      answer:"Canada"
    },
    {
      question:"What is the capital city of Australia?",
      options:["Canberra","Perth","Malbourne"],
      answer:"Canberra"
    },
  ]


  function handleOptionClick(selectedOption){

    // score
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1)
    }

    // next Question
    const nextQusetion = currentQuestion + 1
    if (nextQusetion < questions.length) {
      setCurrentQuestion(nextQusetion)
    }

    // if currentQuestion is last Question
    else{
      setShowScore(true)
    }

  }

  return (
    <>
    {showScore ? 
    (<div className='main'>
      <div className='score'>
      <h3>You got {score} questions right out of {questions.length}</h3>
    </div>
    </div>)

    :(<div className='main-container'>

      <div className='box'>
       <h1>Quiz App</h1>

    <h2>{questions[currentQuestion].question}</h2>

    {/* option container */}

    <div className='option-container'>
      
    <h2>{questions[currentQuestion].options.map((option,index)=> {

      return <button key={index} onClick={()=>handleOptionClick(option)}>{option}</button>

    })}</h2>

</div>

    </div>

    </div>)}

    </>
  )
}

export default App
