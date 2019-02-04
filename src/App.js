import React, { Component } from 'react';
import './App.css';

import Search from './components/search'
import Recipes from './components/recipes'


const API_KEY = "6d40d026896f9301538f52e7b888fd77"

class App extends Component {
  state = {
    recipes : []
  }

  getRecipe = async (e) => {
    e.preventDefault()
    const recipeName = e.target.elements.recipeName.value
    
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=6d40d026896f9301538f52e7b888fd77&q=${recipeName}&count=12`)
    const data =await api_call.json()
    
    this.setState({ recipes : data.recipes})
    console.log(this.state.recipes)

}



  render() {
  
      return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        
        <Search getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
       
        
      </div>
    );
  }
}

export default App;
