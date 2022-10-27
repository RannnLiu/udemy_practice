import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
    
    const [formUsername, setFormUsername] = useState("");
    const [formPassword, setFormPassword] = useState("");

    function sendData(e) {
        e.preventDefault();
        //console.log("sending data");

        //sending data

        setFormUsername("");
        setFormUsername("");
    }

    return (<>
    <form onSubmit={sendData}>
        <input id="form-username" type="text" placeholder="Username" 
        onChange={(e) => setFormUsername(e.target.value)}
        value={formUsername}/>
        <input type="password" placeholder="Password" 
        onChange={(e) => setFormPassword(e.target.value)}
        value={formPassword}/>
        <button type="submit">Log in</button>
    </form>
    </>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);