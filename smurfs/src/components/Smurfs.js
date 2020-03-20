import React from 'react';
import smurfImg from '../styles/smurf.jpeg';
import '../styles/smurf.css'

const Smurf = props => {
    return (
    <div className='containerss'>
        {props.smurfs.map( smurf => (
            <div key={smurf.id} className='smurf-container'>
                <img className='image' src={smurfImg} alt='smurf picture'/>
                <h4 className='text name' >Name: {smurf.name}</h4>
                <div className='text' >Age: {smurf.age}</div>
                <div className='text'>Height: {smurf.height}</div>
                <button className='remove-button' onClick={()=> props.removeSmurf(smurf.id)}>Remove Smurf</button>
            </div>
        ))}
    </div>)
}

export default Smurf;