import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
  import Mid from './component/Mid'
  import Footer from './component/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <Header/>
<Mid/>
<Footer/>


    </div>
     
  )
}

export default App
