import { useState } from "react";

import api from "../../apis/api";

import ConfirmationModal from "../../components/ConfirmationModal";
import CemeteryForm from "./CemeteryForm";
const form = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  width: "50%",
  fontFamily: "Playfair Display, serif",
};

function NewCemetery() {
  const [state, setState] = useState({
    name: "",
    address: "",
    maxCapacity: 0,
    employees: 0,
    rows: 0,
    columns: 0,
    picture: "",
  });

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
      const response = await api.post("/cemetery/new-cemetery", {
        ...state,
        picture: uploadImageUrl,
      });
      console.log(response);
      setShowModal(true);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="m-5 d-flex flex-column justify-content-center" style={form}>
      <h1>New Cemetery</h1>
      <CemeteryForm
        state={state}
        onChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ConfirmationModal
        show={showModal}
        title={`${state.name} added!`}
        mainMessage="Do you wish to add another cemetery?"
        closeModal="Add another cemetery"
        redirectPageButton="See cemeteries page"
        handleClose={() => setShowModal(false)}
        action={`/cemetery`}
      />
    </div>
  );
}

export default NewCemetery;
