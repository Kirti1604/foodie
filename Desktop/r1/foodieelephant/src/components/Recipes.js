import React from "react";
import Recipeitem from "./Recipeitem";
const Recipes = (props) => {
    const { recipes } = props;
    return(
    <div class="row"> 
    { recipes.map(recipe => (<Recipeitem
            key={Math.random() * 100}
            label={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredientLines={recipe.recipe.ingredientLines}
            url={recipe.recipe.url}
          />
            ))
    }
    </div>


    )
}

export default  Recipes;