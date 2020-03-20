import React from 'react'



const Smurf = props => {
    console.log('this my the array i need', props)
    return (
    <div>
        {props.smurfs.map( smurf => (
            <div key={smurf.id}>
                <h4>Name: {smurf.name}</h4>
                <div>Age: {smurf.age}</div>
                <div>Height: {smurf.height}</div>
            </div>
        ))}
    </div>)
}

export default Smurf;