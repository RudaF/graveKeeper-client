import { useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";

import api from "../../apis/api";
import { AuthContext } from "../../contexts/authContext";

import BuriedForm from "./BuriedForm";

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
  const { grave } = useParams();
  // const history = useHistory();
  const authContext = useContext(AuthContext);

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
      console.log(response);

      // history.push("/graves");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div
      className="m-5 d-flex flex-column justify-content-center"
      style={{ color: "white", width: "100vh" }}
    >
      <h1>New Buried</h1>
      <BuriedForm
        state={state}
        onChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default NewBuried;
