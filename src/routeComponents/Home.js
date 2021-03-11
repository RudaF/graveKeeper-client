import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <img
        src="https://images.unsplash.com/photo-1416958672086-951aa7064010?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
        alt="Grave over the sun"
        width="1000px"
        className="img-fluid"
      />
      {/* <h1>React IronPlate</h1>
      <p>This is the homepage</p> */}
      <div className="d-flex flex-column align-items-center">
        {/* <Link className="btn btn-lg btn-primary" to="/auth/signup">
          Signup here!
        </Link> */}
      </div>
    </div>
  );
}

export default Home;
