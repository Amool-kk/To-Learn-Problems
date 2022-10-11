import React from "react";
import "./Articles.css";

const Articles = (props) => {
  return (
    <div class="container">
      <div class="cards">
        <div class="card card-one">
          <h2 class="card-title">Anxieties</h2>
          <p class="date">October 11,2022</p>
          <p class="description">Nothing to worry about</p>
        </div>

        <div class="card card-two">
          <h2 class="card-title">Old News</h2>
          <p class="date">October 10,2022</p>
          <p class="description">Boom boom Becker strikes again.</p>
        </div>

        <div class="card card-three">
          <h2 class="card-title">Heavy</h2>
          <p class="date">October 5,2022</p>
          <p class="description">So how you like it now ?</p>
        </div>

        <div class="card card-four">
          <h2 class="card-title">San Andreas</h2>
          <p class="date">October 12,2022</p>
          <p class="description">Here we go again.</p>
        </div>
      </div>
    </div>
  );
};

export default Articles;
