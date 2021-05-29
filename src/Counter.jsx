import React from 'react';

const Counter = () => {
    const [count, setCount] = React.useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    
    const handleDecrement = () => {
        setCount(count - 1);
    }
    return(
        <div>
            <p>The counter is {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;