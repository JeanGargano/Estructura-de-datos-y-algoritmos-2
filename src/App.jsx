import './App.css';
import React from 'react';
import { useState } from 'react'
import {AddCategory } from './components/addCategory'
import {GifGrid } from './components/gifGrid'


export const App = () => {

  const [categories, setCategories] = useState(['Luis Diaz'])

  const onAddCategory = (category) => {
    setCategories(list => [...list, category])
  }

  return (
    <>
    <div className='App'>
      <h1>GifExpert</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {
        categories.map(
          (category, key) =>
      {
              return <GifGrid category={category} key={key} />
            }
      )
      }
    </div>
    </>



  );
}

