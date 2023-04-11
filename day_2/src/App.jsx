import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Btn from './Btn'

import Cla from './Class/Cla'

import Jsx from './JSX'

import Update from './State'

import Increment from './Inc'

import Staclass from './Staclass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    {/* <Cla />
  
    <Jsx /> */}

    {/* <Btn /> */}

    {/* <Update /> */}
     
     {/* <Increment /> */}

     <Staclass />
     


    
    </div>
  )
}

export default App
