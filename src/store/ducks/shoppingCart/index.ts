import { STATECART, Types } from "./types";


//REDUCERS
const INITIAL_STATE: STATECART = {
    loading: false,
}

//STATE CASES
const STATE = (state = INITIAL_STATE, action: any):STATECART => {
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

export default STATE