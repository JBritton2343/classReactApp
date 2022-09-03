import React from "react";
import Footer from "./Components/Footer/Footer";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import Card from "./Components/Card/Card";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Jumbotron title="Welcome to React" jumboText="A Warm Welcome"/>
      <div className="container-fluid d-flex hstack gap-3">
        <Card cardText="ultricies mi quis hendrerit" />
        <Card cardText="blandit aliquam etiam erat velit" />
        <Card cardText="sem viverra aliquet eget sit amet" />
        <Card cardText="morbi blandit cursus risus at ultrices" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
