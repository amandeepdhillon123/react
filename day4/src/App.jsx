import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Input from './Input'

function App() {
  const [data, setData] = useState(null)
  const [print, setPrint] = useState(false)
  
  function getData(val){
     console.log(val.target.value)

     setData(val.target.value)
     setPrint(false)
  }

  return (
    <div>
    {
       print?
       <h1>{data}</h1>
       :null
      
    }
      
      <input type='enter the value' onChange={getData}/>
      <button onClick={() => setPrint(true)}>Print</button>
    </div>
  )
}

export default App 
