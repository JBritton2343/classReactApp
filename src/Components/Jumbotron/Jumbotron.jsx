import React from "react";

const jumbotron = () => {
  const Jumbotron = (props) => {
    return (
      <div className="jumbotron m-5">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.jumboText}</p>
        <a
          className="btn btn-primary btn-lg"
          href={props.buttonURL}
          role="button"
        >
          {props.buttonLabel}
        </a>
      </div>
    );
  };

  Jumbotron.PropTypes = {
    //proptypes here
    title: PropTypes.string,
    jumboText: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonURL: PropTypes.string,
  };
};

export default jumbotron;
