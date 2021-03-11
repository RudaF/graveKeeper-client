import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import api from "../../apis/api";
import { AuthContext } from "../../contexts/authContext";
import ConfirmationModal from "../../components/ConfirmationModal";

import GraveForm from "./GraveForm";

function NewGrave() {
  const [state, setState] = useState({
    description: "",
    type: "Subterrânea",
    maxCapacity: 0,
    installment: 0,
    identifier: "",
  });

  const [showModal, setShowModal] = useState(false);

  const authContext = useContext(AuthContext);
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
    <div className="m-2">
      <h1>New Grave</h1>
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
