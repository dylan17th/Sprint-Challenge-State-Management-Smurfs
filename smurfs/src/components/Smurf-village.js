import React, { useState } from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurfs';
import { dataGetter, addSmurf } from '../actions'
import '../styles/smurf-village.css'

const SmurfVillage = props => {

    const [ input, setInput ] = useState({
        name: '',
        age: '',
        height: ''
       })

    const changeHandler = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
    <div className='container'>
        <form>
            <label className='labels' htmlFor='name'>Name:</label>
            <input id='name' name='name' type='text' onChange={changeHandler} value={input.name}/>
            <label className='labels' htmlFor='age'>Age:</label>
            <input id='age' name='age' type='text' onChange={changeHandler} value={input.age}/>
            <label className='labels' htmlFor='height'>Height:</label>
            <input id='height' name='height' type='text' onChange={changeHandler} value={input.height}/>
            <button className='add-button' onClick={e => {
                e.preventDefault()
                props.addSmurf(input)
                setInput({
                    name:'',
                    age:'',
                    heigh:''
                })
            }}>Add Smurf</button>
        </form>
        <button className='get-button' onClick={props.dataGetter}>Get The Smurf's</button>
        <div className='map'>
            <Smurf smurfs={props.smurfs}/>
        </div>
    </div>)
}

const mapStateToProps = state => {
    return{ 
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, {dataGetter, addSmurf })(SmurfVillage);