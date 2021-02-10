import { types } from "../types/types";


const initialState = {
    openDualScreenVenta: false,
    openModalSection: true,
    OpenModalDish: false

}
 

export const uiReducer = ( state = initialState, action ) => {


    switch (action.type) {
       
        case types.uiOpenDualScreenVenta: {
            return {
                ...state,
                openDualScreenVenta: true
            }
        }
            

        case types.uiCloseDualScreenVenta: {
            return {
                ...state,
                openDualScreenVenta: false
            }
        }
    
        default:
            return state;
    }

}