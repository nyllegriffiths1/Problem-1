import React, { useState, useEffect } from 'react';

function CountdownTimer({ initialCount }) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        //Base case: stop the timer when count reaches 0

        if(count === 0) {
            console.log("Countdown finished");
            return;
        }

        //Recursive case: descrease count by 1 after 1 second

        const timerId = setTimeout(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000);

        //Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timerId);
    }, [count]); // Re-run effect when count changes

    return (
        <div>
            <h1>Countdown Timer</h1>
            <p>Time remaining: {count} seconds</p>
        </div>
    );
}

export default CountdownTimer;