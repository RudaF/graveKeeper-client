import { useState } from "react";

import { useParams } from "react-router-dom";

import api from "../../apis/api";

import ConfirmationModal from "../../components/ConfirmationModal";

import GraveForm from "./GraveForm";

const form = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  width: "50%",
  fontFamily: "Playfair Display, serif",
};

function NewGrave() {
  const [state, setState] = useState({
    description: "",
    type: "Subterrânea",
    maxCapacity: 0,
    installment: 0,
    identifier: "",
  });

  const [showModal, setShowModal] = useState(false);

  const { cemetery } = useParams();

  function handleChange(event) {
    const stateBkp = { ...state };
    stateBkp[event.target.name] = event.target.value;

    setState(stateBkp);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post(`/${cemetery}/grave/new-grave`, {
        ...state,
      });
      console.log(response);
      setShowModal(true);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="m-5 d-flex flex-column justify-content-center" style={form}>
      <h1>Novo Jazigo</h1>
      <GraveForm
        state={state}
        onChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ConfirmationModal
        show={showModal}
        title={`${state.identifier} added!`}
        mainMessage="Do you wish to add another grave?"
        closeModal="Add another grave"
        redirectPageButton="See cemetery page"
        handleClose={() => setShowModal(false)}
        action={`/cemetery/${cemetery}`}
      />
    </div>
  );
}

export default NewGrave;
