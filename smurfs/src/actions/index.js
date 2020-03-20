import axios from 'axios'

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_ERROR = 'FETCHING_SMURF_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';

export const dataGetter = () => dispatch => {
    dispatch({type: FETCHING_SMURF_START})
    axios.get('http://localhost:3333/smurfs')
    .then(res => dispatch({type:FETCHING_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({type:FETCHING_SMURF_ERROR, payload: err}))
}

export const addSmurf = value => dispatch => {
    axios.post('http://localhost:3333/smurfs', value )
    .then(res => dispatch({type: ADD_SMURF , payload: res.data }))
    .catch(err => console.log())
}

export const removeSmurf = id => dispatch => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SMURF , payload: res.data}))
    .then(err => console.log(err))
}
