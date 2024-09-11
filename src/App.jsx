import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const GifExpertApp = () =>{

  const [categories, setCategories] = useState(["First Category"])
  const [category, setCategory] = useState("")

  const onAddCategory = () =>{
    setCategories(list => [...list, category])
    setCategory("")
  }

  const onSetCategory = (evt) =>{
    setCategory(evt.target.value)
  }

  return(
    <>
      <h1>GifExpert</h1>
      <input type="text" value={category} onChange={(event) =>onSetCategory(event)} />
      <button onClick={onAddCategory}>Add category</button>
      <ol>
        {
          categories.map(
            (category, key) =>
            {
              return <li key ={key}> {category}</li>
            }
          )
        }
      </ol>
    </>
    
  )

}

export default GifExpertApp;



