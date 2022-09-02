import React from "react";


const Card = (props)=>{
    <div className="card" style={"width: 18rem"}>;
  <img src="https://th.bing.com/th/id/OIP.F7zBfY1x4CQykYQBA5iilgHaHa?w=213&h=212&c=7&r=0&o=5&dpr=1.25&pid=1.7" className="card-img-top" alt="greyBox" sytle={"max-height: 325, max-width: 500"} />;
  <div className="card-body">;
    <h5 className="card-title">Card title</h5>;
    <p className="card-text">{props.cardText}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
}
export default Card;