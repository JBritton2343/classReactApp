import React from "react";
import ReactDOM from "react-dom";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import Card from "./Components/Card/Card";
import NavBar from "./Components/NavBar/NavBar";

const App=(props)=>{
    <NavBar />;
    <Jumbotron />;
    <div className="container-fluid d-flex">
        <Card cardText="ultricies mi quis hendrerit" />;
        <Card cardText="blandit aliquam etiam erat velit" />;
        <Card cardText="sem viverra aliquet eget sit amet tellus" />;
        <Card cardText="morbi blandit cursus risus at ultrices" />;
    </div>

}


ReactDOM.render(<Jumbotron
    title="Warm Welcome"
    juboText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis at. Viverra vitae congue eu consequat ac felis donec."
    buttonLabel="Go to the official website"
    buttonURL="https://reactjs.org/"
/>,<Card />, <NavBar/>, document.querySelector('#root')
);

export default App;