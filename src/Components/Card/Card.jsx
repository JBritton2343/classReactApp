import React from "react";


const Card = (props) => {
  const cardStyleObj={
    width: "18rem"
  }
  const imgStyleObj={
    height: "325px",
    width: "500px"

  }
  
  return(
  <div className="card" style={cardStyleObj}>;
    <img src={require("../images/greybox.png")} className="card-img-top" alt="greyBox" sytle={imgStyleObj} />;
    <div className="card-body">;
      <h5 className="card-title bg-success text-white">Card title</h5>;
      <p className="card-text">{props.cardText}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>);
}
export default Card;