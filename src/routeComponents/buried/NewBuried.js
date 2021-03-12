import { useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../apis/api";

import ConfirmationModal from "../../components/ConfirmationModal";
import BuriedForm from "./BuriedForm";

const divStyle = {
  width: "100%",

  backgroundSize: "cover",
};

const form = {
  position: "absolute",
  top: "70%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "black",
  width: "20%",
  fontFamily: "Playfair Display, serif",
  backgroundColor: "white",
};

function NewBuried() {
  const [state, setState] = useState({
    name: "",
    dateOfBirth: "",
    dateOfDeath: "",
    deathCertificate: "",
    picture: "",
    burialDate: "",
    burialTime: "",
    funeralHome: "",
    funeralAgent: "",
    authorization: "",
    situation: "",
  });
  const { cemetery, grave } = useParams();

  const [showModal, setShowModal] = useState(false);

  function handleChange(event) {
    if (event.target.files) {
      setState({ ...state, [event.target.name]: event.target.files[0] });
    } else {
      const stateBkp = { ...state };
      stateBkp[event.target.name] = event.target.value;

      setState(stateBkp);
    }
  }

  async function handleFileUpload(file) {
    try {
      const uploadData = new FormData();

      uploadData.append("picture", file);

      const response = await api.post("/upload", uploadData);

      return response.data.fileUrl;
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const uploadImageUrl = await handleFileUpload(state.picture);

      const response = await api.post(`/${grave}/buried/new-buried`, {
        ...state,
        picture: uploadImageUrl,
      });
      setShowModal(true);
      console.log(response);

      // history.push("/graves");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container">
      <div className="container d-flex align-items-center mt-5">
        <div style={divStyle}></div>
        <div
          style={{ ...divStyle, ...form }}
          className="shadow-lg p-3 mb-5 bg-body rounded"
        >
          <h1>Novo Sepultamento</h1>
          <BuriedForm
            state={state}
            onChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <ConfirmationModal
            show={showModal}
            title={`${state.name} added!`}
            mainMessage="Do you wish to add another burial?"
            closeModal="Add another burial"
            redirectPageButton="See grave page"
            handleClose={() => setShowModal(false)}
            action={`/cemetery/${cemetery}/grave/${grave}`}
          />
        </div>
        <div style={divStyle}></div>
      </div>
    </div>
  );
}

export default NewBuried;
