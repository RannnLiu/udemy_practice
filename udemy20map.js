import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
    const snippets = [
        {
            title: "Snippet 1",
        }, 
        {
            title: "Snippet 2",
        },
        {
            title: "Snippet 3",
        },
    ];  

    function renderSnippets() {
        /* const elements = [
            <p key = "0">Hello world</p>,
            <p key = "1">Hi World</p>,
            <p key = "2">Bye world</p>
        ];
        return elements; */
        return snippets.map((snippet, i) => {
            return <Snippet title ={snippet.title} key = {i}/>
        });

    }

    return <h1>{renderSnippets()}</h1>
}

function Snippet(props) {
    return <h1>{props.title}</h1>
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);