import React from 'react'

const person = (props) => {
    return(
        <div>
            <h2>Test {Math.random()} name {props.name} age {props.age}</h2>
            <h2>{props.children}</h2>
        </div>
        )
};

export default person;