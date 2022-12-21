import { useState } from 'react';
import { Button } from './Button';
import { useEffect } from 'react';
export const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(
        () => {
            console.log("Counter changed");
        }, [counter]
    )

    const increment = () => {
        setCounter(counter + 10);
    };

    const decrement = () => {
        setCounter(counter - 10);
    }

    const setDefault = () => {
        setCounter(10);
    }

    return (
        <div>
            <h2>Counter App</h2>
            <h3>{counter}</h3>
            <Button handler={increment} title="Increment" />
            <Button handler={decrement} title="Decrement" />
            <Button handler={setDefault} title="Set Default" />
        </div>
    )

};
