export interface STATESTORE {
    loading: boolean,
    list: PRODUCTS[],
    newsList: PRODUCTS[]
}

//TYPES ACTIONS
export const Types = {
    CLEAN: 'CLEAN',
    CHANGE: 'CHANGE_PRODUCTS',
    LOAD: 'LOAD_PRODUCTS'
}

export interface PRODUCTS {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category":string,
    "image": string,
    "rating":{
        "rate" :number,
        "count": number
    }
}