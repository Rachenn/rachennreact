import React from "react";
import Photo from './content/rachel.jpeg';

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 >Rachel Moore</h1>
            <h2 class="font-weight-light">Developer, Analyst, Computer Science Student</h2>
            <p>
              Welcome to my playground for React! This is where I learn and to demonstrate my skills.
              This will forever be in beta, but enjoy poking around, finding the multiple bugs that I've made homes for. 
              Current project is to make this a nice resume! <br/>(I don't have professional photos on my own so enjoy this one repeated everywhere).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;