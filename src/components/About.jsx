import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div>
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div>
            <h1 class="font-weight-light">About</h1>
            <p>
              <div class="justify-content-md-center">
                <p>My name's Rachel and I'm currently working as a developer / analyst for a mining software company. I have had an interest in coding and programming for as long as I can remember (going back to MySpace days and fully customizing my profile!). I've worked in ICT support types roles for about 7 years, while there I did find myself automating some repetitive tasks using Powershell (mostly self-taught with the help of a colleague who introduced me to it). I decided I didn't want to be in ICT support for the rest of my life so I started studying Computer Science at ECU part-time online back in 2017, I expect to finish in 2024-2025.</p>

                <p>In 2020 I was very lucky to be offered a role as a graduate developer for a mining software company while still being able to continue with my studies. I have learnt so much about being a developer which has exposed me to get deeper into more technologies, I enjoy using SQL to automate some of the backend and creating stored procedures and ETL's to help manipulate the data. I've also had the opportunity to have experience with C#, AngularJS and React (which I'm now teaching myself for fun).</p>

                <p>I am making this page because I find it fun and figured it'll be a good portfolio demonstration of what I'm capable of when applying for new roles. Web development is my happy place, I love creating pages and automating as much as possible while keeping it pretty. This is me learning the front-end as I've been more used to working in the backend of applications.</p>
                <ul>
                  <li>I work full-time in developer / analyst working on mining software.</li>
                  <li>I study Computer Science (Software Engineering) online part-time.</li>
                  <li>I love cats.</li>
                </ul>

                <p><b>My skills:</b></p>
                <ul>
                  <li>Python</li>
                  <li>PowerShell</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>NodeJS</li>
                  <li>SQL</li>
                  <li>C#</li>
                  <li>React</li>
                </ul>

                <h3>My Learning Resources</h3>
                <ul>
                  <li><a href="https://www.ecu.edu.au/degrees/courses/bachelor-of-computer-science">Bachelor of Computer Science (Software Engineering)</a><i> in progress</i></li>
                </ul>

                <div id="like_button_container" data-commentid="2"></div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;