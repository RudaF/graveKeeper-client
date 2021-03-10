import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import api from "../../apis/petgram-api";
import { AuthContext } from "../../contexts/authContext";

import GraveForm from "./GraveForm";

function NewGrave() {
  const [state, setState] = useState({
    description: "",
    type: "",
    maxCapacity: 0,
    installment: 0,
    location: "",
  });

  const history = useHistory();
  const authContext = useContext(AuthContext);

  function handleChange(event) {
    const stateBkp = { ...state };
    stateBkp[event.target.name] = event.target.value;

    setState(stateBkp);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/cemetery", {
        ...state,
      });
      console.log(response);

      history.push("/cemetery");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="m-2">
      <h1>New Grave</h1>
      <GraveForm
        state={state}
        onChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default NewGrave;
