import { PRODUCTS } from "../products/types";
import { ProductCart, STATECART, Types } from "./types";


//REDUCERS
const INITIAL_STATE: STATECART = {
    loading: false,
    list: [],
    total: 0
}

//STATE CASES
const STATE = (state = INITIAL_STATE, action: any):STATECART => {
    switch (action.type) {
        case Types.LOAD:
            return { ...state, loading: action.loading }
        case Types.CHANGE:
            return { ...state, ...action.payload }
        case Types.CLEAN:
        case Types.CLEAN_CART:
            return INITIAL_STATE
        default:
            return state;
    }
}

//Actions Creators
export const cleanCart = ():any => async (dispatch: (arg0:any) => any) => dispatch({ type: Types.CLEAN_CART })

export const changeCartProduct = (type: 'add' | 'rm', cart:ProductCart[], product: PRODUCTS):any => {
    return async (dispatch: (arg0:any) => any) => {
        let list = [...cart]
        let total = 0
        const p = list.find( v => v.id == product.id)
        switch(type){
            case 'add': 
                if(p) {
                    list = list.map( v => v.id == product.id ? { ...v, quantity: v.quantity += 1 } : v)
                } else 
                    list.push({...product, quantity: 1 })

                total = list.length > 0 ? list.map( n => n.price * n.quantity).reduce( (a,b) => a+b) : 0

            break;
            case 'rm':
                if(p?.quantity == 1) 
                    list = list.filter( v => v.id !== product.id)
                else
                    list = list.map( v => v.id == product.id ? { ...v, quantity: v.quantity -= 1 } : v)
            
              
                    
                total = list.length > 0 ? list.map( n => n.price * n.quantity).reduce( (a,b) => a-b) : 0
            break;
        }
        dispatch({ type: Types.CHANGE, payload:  { list, total }})
    }
}

export default STATE