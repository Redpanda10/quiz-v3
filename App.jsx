import { useState } from "react"
import Modal from "react-modal"
import './App.css'

import {questions} from "./components/questions"
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


Modal.setAppElement('#root')






export default function App()
{

function danger()
{toast.warning("Quiz reseted !!!")}
  
function complete(){
  toast.success("All Question Solved !!!")
}

const [modalIsOpen, setIsOpen] = useState(false)
const[Qindex,setQindex]=useState(0)
const[score,setScore]=useState(0)



let Question=questions[Qindex]

function getscore({props}){
  if(Question.answer===props){
    setScore(score+1)
    toast.success("Correct Answer!!!")
  }
  else{
    toast.error("Wrong Answer!!!")
  }
  setQindex(Qindex+1)
  check()
}


function reset(){
  closeModal()
  if(Qindex==0){
    setQindex(0)
  }
  else{
    setQindex(0)
    danger()
  }
}


function handleclick(){
  setQindex((n)=>n+1)
  check()


}
function check()
{
  if(Qindex===questions.length-1){
    complete()
    setQindex(0)
  }
}
function jumpnext(){
  setQindex(Qindex+1)
  check()
}

function openModal() {
  setIsOpen(true)
}
function closeModal() {
  setIsOpen(false)
}



  return<>
  <div className="main-board">
    <header><h1>Quiz App</h1></header>
    <main>
      <div className="board">
        <h2>{Question.question}</h2>
        <ul>
          {Question.options.map((option,index)=>(
            <button key={index} onClick={handleclick} value={option}>{option}</button>
          ))}
        </ul>
      </div>
    </main>
    <footer>
      <Modal className="modal"
      isOpen={modalIsOpen} 
      style={
        {
          overlay:{
          backgroundColor:'#141414'
          },
          content:{
            backgroundColor:'rgb(42, 41, 41)',
            textAlign:'center',
            borderRadius:'15px',
            padding:'20px',
            height:'50%',
            width:'50%',
            fontFamily:'Arial, sans-serif',
            fontSize:'32px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            cursor:'pointer',
            marginTop:'170px',
            transition:'background-color 0.3s ease',
            '&:hover':{
              backgroundColor:'rgb(32, 32, 32)'
            },
            top:'25%',
            left:'50%',
            transform:'translate(-50%, -50%)',
            position:'absolute',
            boxShadow:'1px 1px white',
          }
        }
      }>
        <h2>Are you sure want to Quit?</h2>
        <button onClick={reset}>Yes</button>
        <button  onClick={closeModal}>No</button>
      </Modal>
    <button className="left" onClick={jumpnext}>Next</button>
    <button className="right" onClick={openModal}>Quit</button>
    </footer>
    <ToastContainer />
  </div>
  
  </>
}