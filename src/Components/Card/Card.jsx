import React from "react";


const Card = (props)=>{
    <div className="card" style={"width: 18rem"}>;
  <img src={require("../images/greybox.png")} className="card-img-top" alt="greyBox" sytle={"max-height: 325, max-width: 500"} />;
  <div className="card-body">;
    <h5 className="card-title">Card title</h5>;
    <p className="card-text">{props.cardText}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
}
export default Card;