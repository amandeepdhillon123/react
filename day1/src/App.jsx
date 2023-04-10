import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Use from './User'

import {Funj,Funk} from './component/Function'

import Fun from './component/Function'

function App() {

  //  functional component 

  function Funo(){

    return(
      <div>I am same file functional component</div>
    )
  }
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1>Hello React world</h1>
     {/* <Use /> */}
     {/* {Use ()} */}

     {/* function  component  */}

     {/* <Fun /> */}

     <Funo />

     <Funj />
     <Funk />

    </div>
  )
}

export default App;
