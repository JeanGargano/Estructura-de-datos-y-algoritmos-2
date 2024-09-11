import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const FirstApp = ({value}) => {

  const [counter, setCounter] = useState(value)

  const handleApp = () =>{
    setCounter(counter + 1)
  }

  const restar = () =>{
    setCounter(counter - 1)
  }

  const reiniciar = () =>{
    setCounter(value)
  }

  return(
    <>
      <h1>Counter</h1>
      <span>{counter}</span>
      <button onClick={() => handleApp()}> +1 </button>
      <button onClick={() => restar()}> -1 </button>
      <button onClick={() => reiniciar()}> Reinicio </button>
    </>
  )
  
}

export default FirstApp
