import React from "react";
import ReactDOM from "react-dom";
import Jumbotron from "./Components/Jumbotron";
import Card from "./Components/Card";
import NavBar from "./Components/NavBar"

const App=(props)=>{
    
    < Card cardText="A simple line of text" />;
    <Card cardText="More simple text" />;
    <Card cardText="So easy even a caveman can do it" />;



}


ReactDOM.render(<Jumbotron
    title="Welcome to react"
    description="React is the most popular rendering library in the world"
    buttonLabel="Go to the official website"
    buttonURL="https://reactjs.org/"
/>,<Card />, <NavBar/>, document.querySelector(#myDiv)
)

export default App;