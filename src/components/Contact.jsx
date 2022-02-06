import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="justify-content-md-center">
            <h1 class="font-weight-light">Contact</h1>
            <p>Please feel free to get in touch with me via LinkedIn or have a look at my Git Repositories below.</p>
            {/* <a href="https://twitter.com/rachenest"><i class="fa fa-twitter fa-2x"></i></a> */}
            <ul>
            <a href="https://github.com/Rachenn"><i class="fa fa-github fa-2x"></i></a></ul>
            <ul><a href="https://www.linkedin.com/in/rachel-moore-70929042/"><i class="fa fa-linkedin fa-2x"></i></a></ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;