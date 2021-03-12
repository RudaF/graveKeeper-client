import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";

import { AuthContext } from "../../contexts/authContext";

const divStyle = {
  width: "100%",
  height: "600px",
  backgroundSize: "cover",
};

const form = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "black",
  width: "20%",
  fontFamily: "Playfair Display, serif",
  backgroundColor: "white",
};

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
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
      const response = await api.post("/login", state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      props.history.push("/");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className="d-flex align-items-center">
      <div style={divStyle}></div>
      <div
        style={{ ...divStyle, ...form }}
        className="shadow-lg p-3 mb-5 bg-body rounded"
      >
        <h1 className="m-4">Login</h1>
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="m-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email{" "}
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="signupFormEmail"
              value={state.email}
              error={errors.email}
              onChange={handleChange}
            />
          </div>
          <div className="m-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Senha
            </label>
            <input
              type="password"
              name="password"
              id="signupFormPassword"
              value={state.password}
              error={errors.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <button
            type="submit"
            style={{ backgroundColor: "#c8955b" }}
            className="btn m-4"
          >
            Entrar
          </button>
        </form>
        <div>
          <Link to="/auth/signup" className="m-4">
            Não possui uma conta? Clique para criar!
          </Link>
        </div>
      </div>
      <div style={divStyle}></div>
    </div>
  );
}

export default Login;
