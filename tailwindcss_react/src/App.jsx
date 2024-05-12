import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
 let myobj = {
   username :"ujjwal",
   Salary :20
 }

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 p-4 text-black rounded-xl ' >Tailwind test</h1>
      <br />
      < Card username="lana" btnText="click me" />
      <Card username="rhodes" btnText="visit me"/>
      
    </>
  )
}

export default App
