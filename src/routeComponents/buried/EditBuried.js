import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

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
  width: "40%",
  fontFamily: "Playfair Display, serif",
  backgroundColor: "white",
};

function EditBuried() {
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
  const { cemetery, grave, id } = useParams();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/buried/${id}`);

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

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

      const response = await api.patch(`/buried/${id}`, {
        ...state,
        picture: uploadImageUrl,
      });
      setShowModal(true);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container">
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
      <div className="container d-flex align-items-center mt-5">
        <div style={divStyle}></div>
        <div
          style={{ ...divStyle, ...form }}
          className="shadow-lg p-3 mb-5 bg-body rounded"
        >
          <h1>Editar Sepultamento</h1>
          <BuriedForm
            state={state}
            onChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <ConfirmationModal
            show={showModal}
            title={`Sepultamento atualizado!`}
            mainMessage="Você está de acordo com a edição?"
            closeModal="Não"
            redirectPageButton="sim"
            handleClose={() => setShowModal(false)}
            action={`/cemetery/${cemetery}/grave/${grave}/buried/${id}`}
          />
        </div>
        <div style={divStyle}></div>
      </div>
    </div>
  );
}

export default EditBuried;
