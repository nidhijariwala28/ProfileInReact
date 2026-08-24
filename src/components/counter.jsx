import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <h2>Counter</h2>
            <div className="count-value">
                {count}
            </div>
            <div className="counter-buttons">
                <button
                    onClick={() => setCount(count + 1)}
                    className="plus-button">
                    +
                </button>

                <button
                    onClick={() => setCount(count - 1)}
                    className="minus-button">
                    -
                </button>

                <button
                    onClick={() => setCount(0)}
                    className="reset-button">
                    Reset
                </button>
            </div>
        </div>
    );
}
export default Counter;