import { useState } from "react"
import './App.css'

import {questions} from "./components/questions"
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'









export default function App()
{

const notify = () => {toast("All Question Solved !")}
  
const[Qindex,setQindex]=useState(0)


function handleclick(){
  setQindex((n)=>n+1)
  if(Qindex===questions.length-1){
    alert("Questions completed")
    setQindex(0)
  }
}

let Question=questions[Qindex]


  return<>
  <div className="main-board">
    <header><h1>Quiz App</h1></header>
    <main>
      <div className="board">
        <h2>{Question.question}</h2>
        <ul>
          {Question.options.map((option,index)=>(
            <button key={index} onClick={notify}>{option}</button>
          ))}
        </ul>
        <button onClick={notify}> toast me !!</button>
        <button>Quit</button>
        <ToastContainer/>
      </div>
    </main>

  </div>
  </>
}