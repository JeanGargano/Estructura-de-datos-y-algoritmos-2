import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddCategory } from './addCategory'
import { GifGrid } from './gifGrids'

const GifExpertApp = () =>{

  const [categories, setCategories] = useState(["First Category"])

  const onAddCategory = (category) =>{
    setCategories(list => [...list, category])
  }

  return(
    <>
      <h1>Gif Expert</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {
        categories.map(
          (category, key) =>
          {
            return <GifGrid category={category} key={key} />
          }
        )
      }
    </>
    
  )

}

export default GifExpertApp;



