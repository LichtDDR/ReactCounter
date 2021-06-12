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

=======
import React from 'react';

function User (props) {
    console.log(props);
    const { 
        name, 
        lastName,
        age: peopleAge 
    } = props;
    return (
        <h1>Welcome, {props.firstName} {props.lastName} you have {peopleAge} old :)</h1>
    );
}

>>>>>>> 4cb8cec9f484258094e7d3c105c11ce81dc46952
export default User;