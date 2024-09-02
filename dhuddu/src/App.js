import React, { useState, useEffect } from 'react';

import './App.css';
import SearchBar from './SearchBar'
import RacipeCard from './ReacipeCard'

const seachapi = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"


function App() {
  const [isLoading, setIsLoading ] = useState(false);
  const [query, setQuery] = useState("");


  const searchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    
    searchRecipes(data.meals);
    setIsLoading(false);
  };
  useEffect(()=>{
    searchRecipes()
  }, []);
  return (
   <div className='Container'>
   <h2> our Recipe name </h2>
   <div className='recipes'>
    {recipes ? recipes.map(recipe => (
      <RacipeCard
      key={recipe.idMeal}
      recipe={recipe}
      />
    )): "No Recipes" }
   </div>


   </div>
  );
}

export default App;
