import { useEffect, useState } from "react";

function Counter({theme}) {
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(false);
    const [decrement, setDecrement] = useState(false);
    const [Gap, setGap] = useState(1);

    let themeBased = {
        backgroundColor: theme === "light" ? "white" : "black",
    };
    let themeBasedDiv = {
        backgroundColor: theme === "light" ? "#F54990" : "#F54990",
    };

    let interval;

    useEffect(() => {
        const savedCount = localStorage.getItem("count");
        const savedGap=localStorage.getItem("gap")

        if (savedCount) {
            setCount(Number(savedCount));
        }
        if (savedGap) {
            setGap(Number(savedGap));
        }
    }, []);

    useEffect(() => {
        if (increment) {
            setDecrement(false);
            clearInterval(interval);
            interval = setInterval(() => {
                setCount((prevCount) => prevCount + Gap);
                localStorage.setItem("count",  count); 
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [increment, Gap]);

    useEffect(() => {
        if (decrement) {
            setIncrement(false);
            clearInterval(interval);
            interval = setInterval(() => {
                setCount((prevCount) => (prevCount > 0 ? prevCount - Gap : 0));
                localStorage.setItem("count", count); 
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [decrement, Gap]);

    useEffect(() => {
        localStorage.setItem("Gap", Gap);
    }, [Gap]);

    return (
        <>
            <h2 style={{ textAlign: "center" }}>Counter</h2>
            <div>
                <h1 style={{ textAlign: "center" }}>Count: {count}</h1>
                <label>Gap: </label>
                <input
                    type="number"
                    value={Gap}
                    onChange={(e) => setGap(Number(e.target.value))}
                    min="1"
                    max="100"
                    style={{
                        margin: "20px",
                        color: "black",
                        fontSize: "18px",
                    }}
                    className="input-gap"
                />
            </div>
            <button className="learn-more" onClick={() => setIncrement(true)}>Increase</button>
            <button className="learn-more" onClick={() => {
                setCount(0);
                setIncrement(false);
                setDecrement(false);
                localStorage.setItem("count", 0); 
            }}>Reset</button>
            <button className="learn-more" onClick={() => setDecrement(true)}>Decrease</button>
        </>
    );
}

export default Counter;
