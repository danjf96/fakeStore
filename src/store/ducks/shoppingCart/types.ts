import { PRODUCTS } from "../products/types"

export interface STATECART {
    loading: boolean,
    list: ProductCart[],
    total: number
}

//TYPES ACTIONS
export const Types = {
    CLEAN: 'CLEAN',
    CHANGE: 'CHANGE_SHOPPINGCART',
    LOAD: 'LOAD_SHOPPINGCART'
}

export interface ProductCart extends PRODUCTS {
    "quantity": number
}
