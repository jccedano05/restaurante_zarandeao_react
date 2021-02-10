import { types } from "../types/types";

const initSection ={

    sections: [],

    sectionActiveValue: {
        id:'',
        section_name: '',
        description: '',
        urlImage: ''
} } 



export const sectionReducer = ( state = initSection, action ) => {

    switch (action.type) {
        case types.sectionAddNew:{
            return {
                ...state,
                sections: [
                    ...state.sections,
                    action.payload
                ]
                
            }
        }
 
        case types.sectionActive:{
            return {
                ...state,
                sectionActiveValue: action.payload
            }
        }


        case types.sectionLoaded:
            return {
                ...state,
                sections: [...action.payload]
            }
            
    
        default: 
            return state;
    }

} 