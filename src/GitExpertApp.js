import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(['Hola']);
  return (
    <div>
      <h2>Git expert app</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr/>
      <ol>
        { 
            categories.map( (category) => (
              <GifGrid 
                category={category}
                key={category}
              /> 
            ))
        }
      </ol>
    </div>
  )
}
