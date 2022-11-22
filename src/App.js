import React from 'react'
import './App.css';
import Typewriter from "typewriter-effect"
import Home from "./home"

export default function App(){
  const email = React.useRef()
  const password = React.useRef()
  const getEmail = localStorage.getItem('emailData')
  const getPassword = localStorage.getItem('passwordData')
  const [display, setDisplay] = React.useState()

  const login=()=> {
    if(email.current.value =="fredjoshua@gmail.com"&&password.current.value=="19283746"){
      localStorage.setItem("emailData","fredjoshua@gmail.com")
      localStorage.setItem("passwordData","19283746")
      }
  }
  function fp(){
    setDisplay(<Typewriter 
      onInit={(typewriter) => {
       typewriter.typeString("Sorry you do not have access yet!!!").start()
      }}
      />)
  }
 

    return(
      <div>
         {getEmail&&getPassword?
        <Home />:
        <div className='login-page'>
            <form onSubmit={login}>
            <div className="inputBox inputss inputsss" > <input type="text" required="required" ref ={email} className="input"/> <span className='spans'>Email</span> </div>
            <div className="inputBox inputss" > <input type="text" required="required" ref = {password} className="input"/> <span className='spans'>Password</span> </div>
                <button class=" button login-button">Login</button>
                <h5 className='fp' onClick={fp}>forgotten password?</h5>
                {display}
            </form>
        </div>}
      </div>
        
    )}