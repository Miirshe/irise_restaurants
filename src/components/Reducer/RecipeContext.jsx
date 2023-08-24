import { createContext, useContext, useReducer } from "react"
import { RecipeReducer, initialState } from "./RecipeReducer"
import { toast } from "react-toastify";

const mainRecipeContext = createContext(initialState);

export const RecipeContext = ({ children }) => {
	const [state, dispatch ] = useReducer(RecipeReducer, initialState);

	const add_recipe = (recipe) => {
        const GetRecipe = state.recipe.concat(recipe);
        dispatch({
            type: "add_recipe",
            payload: {
                recipe: GetRecipe
            }
        })

		toast.success('recipe added to the Carts')
    }

	const remove_recipe = (recipe) => {
		const remove_recipe = state.recipe.filter( res =>{
			return res.idCategory !== recipe.idCategory;
		})

		dispatch({
			type: "remove_recipe",
			payload:{
				recipe: remove_recipe
			}
		})
		toast.success('recipe remove to the Carts')
	}

	const values = {
		recipe : state.recipe,
		add_recipe,
		remove_recipe
	}

	return <mainRecipeContext.Provider value={values}>
		{ children }
	</mainRecipeContext.Provider>

}

export const useRecipe = () => {
	const recipe = useContext(mainRecipeContext);

	if(recipe === undefined){

		console.log("recipe is undefined")

	}
	return recipe;

}