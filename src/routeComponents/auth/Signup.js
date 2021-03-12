import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";

const form = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  width: "20%",
  fontFamily: "Playfair Display, serif",
};

function Signup(props) {
  const [state, setState] = useState({ name: "", password: "", email: "" });
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
  });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/signup", state);
      console.log(response);
      setErrors({ name: "", password: "", email: "" });
      props.history.push("/auth/login");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <form onSubmit={handleSubmit} style={form}>
      <h1>Signup!</h1>

      <div>
        <label className="mr-2" htmlFor="signupFormName">
          Nome
        </label>
        <input
          type="text"
          name="name"
          id="signupFormName"
          value={state.name}
          error={errors.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="mr-1" htmlFor="signupFormEmail">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="signupFormEmail"
          value={state.email}
          error={errors.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="mr-2" htmlFor="signupFormPassword">
          Senha
        </label>
        <input
          type="password"
          name="password"
          id="signupFormPassword"
          value={state.password}
          error={errors.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <button
          className="btn mt-2 mb-5 "
          style={{ backgroundColor: "#c8955b", color: "white" }}
          type="submit"
        >
          Signup!
        </button>
        <div>
          <Link to="/auth/login" style={{ color: "inherit" }}>
            Already have an account? Click here to login.
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Signup;
