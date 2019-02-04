import React, { Component } from 'react';
import { Link } from "react-router-dom"

const API_KEY = "6d40d026896f9301538f52e7b888fd77"

class Recipe extends Component {
    state = { 
        activeRecipe : []
     }

     

     componentDidMount = async() => {
        const title = this.props.location.state.recipe
    
        const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=6d40d026896f9301538f52e7b888fd77&q=${title}`)
        const data = await api_call.json()
        this.setState({ activeRecipe: data.recipes[0]})
        console.log(this.state.activeRecipe)        
    
    }

    render() { 
        console.log(this.props)

        const recipe = this.state.activeRecipe
        return ( 
            <div className="container" className="recipe">
                { this.state.activeRecipe.length !== 0 &&
                <div className="active-recipe">
                <h3 className="active-recipe__title">{recipe.title}</h3>
                <img className="active-recipe__img" src={recipe.image_url} 
                alt={recipe.title} />
                
                <h4 className="active-recipe__publisher">Publisher: <span>{recipe.publisher}</span></h4>
                <p className="active-recipe__website">Website: <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span></p>
                <button className="active-recipe__button">
                <Link to={{ pathname: "/" }}> Go Home </Link>
                </button>

            </div>}

            </div>
         );
    }
}
 
export default Recipe;