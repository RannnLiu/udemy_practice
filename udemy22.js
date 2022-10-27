import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
   
    
    const [messageShown, setMessageShown] = useState(false);

    useEffect(() => {
        console.log("component update");
    });


    useEffect(() => {
        console.log("specific update");
    }, [messageShown]);

    return (<>
        <Random />
        <button onClick={() => setMessageShown(!messageShown)}>
            Toggle message</button>
        {messageShown && <p>some message</p>}
    </>
    );
}


function Random() {
    const [randomNumber, setRandonNumber] = useState(Math.random());
    useEffect(() => {
        console.log("component mount");
        const intervalId = setInterval(() => {
        setRandonNumber(Math.random())
        console.log("setting new random number");
    }, 1000);
        
    return () => {
        console.log("component unmount");
        clearInterval(intervalId);
    };
    },[]);
   
    return <h1>{randomNumber}</h1>
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);