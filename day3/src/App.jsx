import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import Student from './Student'
import Classprops from './Classprops'
// import {useState} from 'react'

import React,{Component} from 'react'

class App extends Component {
 constructor(){
       super();
       this.state={
        name : "anil"
       }
 }
 render(){
  return (
    <div>
   {/* props with functional component  */}
 
     {/* <h1>I am h1 tag</h1> */}
 
     {/* <Student name={name}/> */}
  {/* <button onClick={()=>{setState("ram")}}>update</button> */}
     {/* <Student  name ={"aman"} email="ama@gmail.com"  other={{address:"delhi" ,mobile:"000"}} />
     <Student  name ={"ram"}   email="ama@gmail.com" other={{address:"ncr" ,mobile:"111"}} />
     <Student  name ={"peter"}  email="ama@gmail.com" other={{address:"mumbai" ,mobile:"222"}} /> */}
 

   {/* props with class component  */}
   <Classprops name={this.state.name} email="ama@gmail.com"  other={{address:"delhi" ,mobile:"000"}} />
     <button onClick={() =>{this.setState({name:"ram"})}}>Update</button>
    </div>
   )
 }
  
}

export default App
