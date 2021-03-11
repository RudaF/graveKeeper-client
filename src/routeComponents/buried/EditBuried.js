import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import PetForm from "./PetForm";
import { useEffect } from "react";
import api from "../../apis/petgram-api";

function EditPet() {
  const [state, setState] = useState({
    name: "",
    species: "",
    age: "",
    breed: "",
    color: "",
    likes: "",
    dislikes: "",
    picture: "",
    adopted: false,
  });

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/pet/${id}`);

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

  function handleChange(event) {
    const stateBkp = { ...state };
    stateBkp[event.target.name] = event.target.value;

    setState(stateBkp);
  }

  function handleCheckboxChange(event) {
    setState({ ...state, [event.target.name]: !state[event.target.name] });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.patch(`/pet/${id}`, {
        ...state,
        age: Number(state.age),
      });
      console.log(response);

      history.push("/my-pets");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="m-2">
      <h1>Edit Pet</h1>
      <PetForm
        state={state}
        onChange={handleChange}
        onCheckboxChange={handleCheckboxChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default EditPet;
