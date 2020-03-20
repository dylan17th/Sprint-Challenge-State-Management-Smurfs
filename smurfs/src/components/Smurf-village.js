import React, { useState } from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurfs';
import { dataGetter, addSmurf } from '../actions'




const SmurfVillage = props => {
    console.log(props)
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
    console.log(input)
    return (
    <div>
        <form>
            <label htmlFor='name'>Name:</label>
            <input id='name' name='name' type='text' onChange={changeHandler} value={input.name}/>
            <label htmlFor='age'>Age:</label>
            <input id='age' name='age' type='text' onChange={changeHandler} value={input.age}/>
            <label htmlFor='height'>Height:</label>
            <input id='height' name='height' type='text' onChange={changeHandler} value={input.height}/>
            <button onClick={e => {
                e.preventDefault()
                props.addSmurf(input)
                setInput({
                    name:'',
                    age:'',
                    heigh:''
                })
            }}>Add Smurf</button>
        </form>
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

export default connect(mapStateToProps, {dataGetter, addSmurf })(SmurfVillage);