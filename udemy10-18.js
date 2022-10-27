
//normal javascript

//const el = document.createElement("h1");
//el.innerText = "Hello world";

//document.body.prepend(el);

//React dom
import ReactDOM from "react-dom";
import React, {useState, useEffect} from "react";

/*
const name = "John Doe";

const el = (
    <div className = "red">
        <h1 style = {{
            background: "orange"
        }}>
            hello {name}</h1>
        <p>hello there</p>
    </div>
);
*/
/*
function clock() {
    const el = (
    <div>
        <h1>clock</h1>
        <p>It is {new Date().toLocaleTimeString()}</p>
        <input />
    </div>
    );
    ReactDOM.render(el, document.getElementById("root"));
}

setInterval(clock, 1000);

function helloMessage() {
    return <h1>hello there!!!!</h1>
}

ReactDOM.render(helloMessage(), document.getElementById("root"))

*/

function App() {
    //props, useStates, useEffects
    //let message = "this is an awesome website";
    
    /* const [message, setMessage] = useState("Hello world");
    
    useEffect(() => {
        setTimeout(() => {
            //setMessage("Hi there!");
            setMessage(Math.random().toString());
            console.log("updating");
        }, 2000);
    }, []);
     */
    
    
    //console.log(message);

    /*
    setTimeout(() => {
        message = "Hello";
        console.log(message);
    }, 2000);
    */
    
    //useEvent
    //const[clicks, setClicks] = useState(0);
    const[showMessage, setShowMessage] = useState(false);

    function onClick() {
        //setClicks(clicks + 1);
        //console.log("Click");
        setShowMessage(!showMessage);
    }

    /* let message;
    if(!showMessage)
        message = <Message />;
 */
    return (
        <div>
            {/* <Welcome user={name} message={message} />
            <Welcome user="Jane Doe" message={message} />
            <Welcome user="Peter Doe" message={message} /> */}
            
            {/* <p>Clicks: {clicks}</p> */}
            <button onClick={onClick}>click me</button>
            {showMessage ? (
                <Message message = "Toggle on" />
                ) : (
                <Message message = "Toggle off"/>
            )}
        </div>
    );
}



function Message(props) {
    return <p>Some message: {props.message}</p>
}
 
//function Welcome(props) {
    //return (
//        <div>
//            <h1>Welcome {props.user} to this site.</h1>
//            <p>{props.message}</p>
//            /*props read only, cannot be change*/
//        </div>
//    );
//}  


//const name = "John Doe"
/*
class WelcomeMessage extends React.Component {
    name = "Jane Doe"
    render() {
        return<h1>Hello {this.name}</h1>
    }
}
*/
/*
const el = (
    <div>
        <Welcome user={name}/>
        <Welcome user="Jane Doe"/>
        <Welcome user="Peter Doe"/>
    </div>
);
*/
ReactDOM.render(<App />, document.getElementById("root"));
