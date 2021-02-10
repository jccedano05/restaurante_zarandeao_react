import { types } from "../types/types";


const initState = {

    dishes: [],
    
    dishActiveValue: {
        id:'',
        dish_name: '',
        section: '',
        description: '',
        price: '',
        urlImage: ''
    }
}


export const dishReducer = ( state = initState, action ) => {

    switch (action.type) {
        case types.dishAddNew:{
            return {
                ...state,
                dishes: [
                    ...state.dishes,
                    action.payload
                ]
                
            }
        }

        case types.dishActive:{
            return {
                ...state,
                dishActiveValue: action.payload
            }
        }


        case types.dishLoaded:
            return {
                ...state,
                dishes: [...action.payload]
            }
            
            
    
        default: 
            return state;
    }

}