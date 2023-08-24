export const initialState = {
    recipe: []
}

export const RecipeReducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case 'add_recipe':
            return {
                ...state,
                recipe: payload.recipe
            }
        case 'remove_recipe':
            return {
                ...state,
                recipe: payload.recipe

            }
        default:
            console.log("Unknown Recipe type: " + type);
    }
}