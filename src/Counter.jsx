<<<<<<< HEAD
import React, {useEffect} from 'react';

const Counter = () => {
    const [count, setCount] = React.useState(0);
    useEffect (() => {
        return (
            <h1>Teste</h1>
        );
    }, [count])

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

=======
import React, {useEffect} from 'react';

const Counter = () => {
    const [count, setCount] = React.useState(0);
    useEffect (() => {
        return (
            <h1>Teste</h1>
        );
    }, [count])

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

>>>>>>> 4cb8cec9f484258094e7d3c105c11ce81dc46952
export default Counter;