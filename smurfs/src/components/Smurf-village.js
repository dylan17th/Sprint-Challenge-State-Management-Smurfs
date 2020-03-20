import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurfs';
import { dataGetter } from '../actions'




const SmurfVillage = props => {
    console.log(props)
    return (
    <div>
        <button onClick={props.dataGetter}>Get the Smurf Village</button>
        <Smurf smurfs={props.smurfs}/>
        
    </div>)
}

const mapStateToProps = state => {
    return{ 
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, {dataGetter})(SmurfVillage);