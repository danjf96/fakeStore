import api, { errorHandling } from "../../../services/api";
import { STATECATEGORIESPRODUCT, Types } from "./types";

//REDUCERS
const INITIAL_STATE: STATECATEGORIESPRODUCT = {
    loading: false,
    list: ['Todos'],
    category: 'Todos'
}

//STATE CASES
const STATE = (state = INITIAL_STATE, action: any):STATECATEGORIESPRODUCT => {
    switch (action.type) {
        case Types.LOAD:
            return { ...state, loading: action.loading }
        case Types.CHANGE:
            return { ...state, ...action.payload }
        case Types.CLEAN:
            return INITIAL_STATE
        default:
            return state;
    }
}

//Actions Creators
export const getCategories = () => {
    return async (dispatch: (arg0:any) => any) => {
        dispatch({ type: Types.LOAD, loading: true })
        try {
            const { data } = await api.get('products/categories')
            dispatch({ type: Types.CHANGE, payload:  { 
                loading: false, 
                list:  ['Todos',...data]
            }})
        } catch (e) {
            dispatch({ type: Types.LOAD, loading: false })
            errorHandling(e)
        }
    }

}

export const changeCategoriesCard = (key:string, value:any) => {
    return async (dispatch: (arg0:any) => any) => {
        dispatch({ type: Types.CHANGE, payload: { [key]: value } })
    }
}

export default STATE