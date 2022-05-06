import { PRODUCTS } from "../products/types"

export interface STATECART {
    loading: boolean,
    list: ProductCart[],
    total: number
}

//TYPES ACTIONS
export const Types = {
    CLEAN: 'CLEAN',
    CLEAN_CART: 'CLEAN_CART',
    CHANGE: 'CHANGE_SHOPPINGCART',
    LOAD: 'LOAD_SHOPPINGCART'
}

export interface ProductCart extends PRODUCTS {
    "quantity": number
}
