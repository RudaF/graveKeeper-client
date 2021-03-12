import { useState, useEffect } from "react";

import { useParams, useHistory } from "react-router-dom";

import api from "../../apis/api";

import ConfirmationModal from "../../components/ConfirmationModal";

import GraveForm from "./GraveForm";

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
  width: "40%",
  fontFamily: "Playfair Display, serif",
  backgroundColor: "white",
};

function EditGrave() {
  const [state, setState] = useState({
    description: "",
    type: "Subterrânea",
    maxCapacity: 0,
    installment: 0,
    identifier: "",
  });

  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const { cemetery, grave } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/grave/${grave}`);

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [grave]);

  function handleChange(event) {
    const stateBkp = { ...state };
    stateBkp[event.target.name] = event.target.value;

    setState(stateBkp);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.patch(`/grave/${grave}`, {
        ...state,
      });
      console.log(response);
      setShowModal(true);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="d-flex align-items-center">
      <div>
        <button
          onClick={() => {
            history.go(-1);
          }}
          style={{ backgroundColor: "#191926", border: "none" }}
        >
          <i
            className="mr-5 mt-5 fas fa-angle-left"
            style={{ fontSize: "5em", color: "#c8955b" }}
          ></i>
        </button>
      </div>
      <div style={divStyle}></div>
      <div
        style={{ ...divStyle, ...form }}
        className="shadow-lg p-3 mb-5 bg-body rounded"
      >
        <h1>Editar Jazigo</h1>
        <GraveForm
          state={state}
          onChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <ConfirmationModal
          show={showModal}
          title={`Jazigo atualizado!`}
          mainMessage="Você está de acordo com a edição?"
          closeModal="Não"
          redirectPageButton="Sim"
          handleClose={() => setShowModal(false)}
          action={`/cemetery/${cemetery}`}
        />
      </div>
      <div style={divStyle}></div>
    </div>
  );
}

export default EditGrave;
