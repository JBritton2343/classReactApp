import React from "react";

import Jumbotron from "./Components/Jumbotron/Jumbotron";
import Card from "./Components/Card/Card";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Jumbotron title="Welcome to React" jumboText="A Warm Welcome"/>
      <div className="container-fluid d-flex">
        <Card cardText="ultricies mi quis hendrerit" />
        <Card cardText="blandit aliquam etiam erat velit" />
        <Card cardText="sem viverra aliquet eget sit amet tellus" />
        <Card cardText="morbi blandit cursus risus at ultrices" />
      </div>
    </div>
  );
}

export default App;
