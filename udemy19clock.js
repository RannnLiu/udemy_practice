import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
    
    return (
        <div>
            <Clock />
            <Clock />
            <Hello />
        </div>
    );
}

function Clock() {
    const[time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
            console.log("updating");
        }, 1000);
    }, []);

    return <p>It is currently {time}</p>
}

function Hello() {
    return <h1>hello world</h1>
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);