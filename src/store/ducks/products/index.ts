import api, { errorHandling } from "../../../services/api";
import { STATESTORE, Types } from "./types";


//REDUCERS
const INITIAL_STATE: STATESTORE = {
    loading: false,
    list: [],
    newsList: []
}

//STATE CASES
const STATE = (state = INITIAL_STATE, action: any):STATESTORE => {
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
export const getProducts = (category?:string ):any => {
    return async (dispatch: (arg0:any) => any) => {
        dispatch({ type: Types.LOAD, loading: true })
        try {
            const url = category && category !== 'Todos' ? `products/category/${category}` : 'products'
            const { data } = await api.get(url)
            dispatch({ type: Types.CHANGE, payload:  { 
                loading: false, 
                list:  data,
                newsList: data.filter( (d:any,i:number) => i < 5)
            }})
        } catch (e) {
            dispatch({ type: Types.LOAD, loading: false })
            errorHandling(e)
        }
    }

}
export default STATE