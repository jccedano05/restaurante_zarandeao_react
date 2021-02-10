import { combineReducers} from 'redux'
import { authReducer } from './authReducer'
import { dishReducer } from './dishReducer'
import { sectionReducer } from './sectionReducer'
import { uiReducer } from './uiReducer'



export const rootReducer =  combineReducers({
    
    ui: uiReducer,
    auth: authReducer,
    section: sectionReducer,
    dish: dishReducer,
    
})