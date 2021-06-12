import React from 'react';

function User (props) {
    console.log(props);
    const { 
        name, 
        lastName,
        age: peopleAge 
    } = props;
    return (
        <h1>Welcome, {props.firstName} {props.lastName}, you have {peopleAge}y </h1>
    );
}

export default User;