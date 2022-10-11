import React from "react";
import "./Articles.css";

const Articles = (props) => {
  return (
    <div className="container">
      <div className="cards">
        <div className="card card-one">
          <h2 className="card-title">Anxieties</h2>
          <p className="date">October 11,2022</p>
          <p className="description">Nothing to worry about</p>
        </div>

        <div className="card card-two">
          <h2 className="card-title">Old News</h2>
          <p className="date">October 10,2022</p>
          <p className="description">Boom boom Becker strikes again.</p>
        </div>

        <div className="card card-three">
          <h2 className="card-title">Heavy</h2>
          <p className="date">October 5,2022</p>
          <p className="description">So how you like it now ?</p>
        </div>

        <div className="card card-four">
          <h2 className="card-title">San Andreas</h2>
          <p className="date">October 12,2022</p>
          <p className="description">Here we go again.</p>
        </div>
      </div>
    </div>
  );
};

export default Articles;
