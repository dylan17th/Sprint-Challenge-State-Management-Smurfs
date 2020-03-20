import {FETCHING_SMURF_START,
FETCHING_SMURF_SUCCESS, 
FETCHING_SMURF_ERROR} from '../actions'

const initialState = {
    isLoading: false,
    smurfs: [],
    error: ''
}


export const reducer = (state = initialState, action ) => {
    switch(action.type){
        case FETCHING_SMURF_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_SMURF_SUCCESS:
            return{
                ...state, 
                isLoading: false,
                smurfs: action.payload
            }
        case FETCHING_SMURF_ERROR:
            return{
                ...state,
                isloading:false,
                smurfs: [],
                error: 'sorry no smurfs in hour village'
            }
        default:
            return state
    }
}