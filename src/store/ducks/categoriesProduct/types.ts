export interface STATECATEGORIESPRODUCT {
    loading: boolean,
    list: string[],
    category?: string
}

//TYPES ACTIONS
export const Types = {
    CLEAN: 'CLEAN',
    CLEAN_CATEGORIES: 'CLEAN_CATEGORIES',
    CHANGE: 'CHANGE_CATEGORIES',
    LOAD: 'LOAD_CATEGORIES'
}

