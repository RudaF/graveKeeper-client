import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";

import api from "../../apis/api";

import "../../assets/styles/cemetaryDetail.css";

const divStyle = {
  width: "100%",
  height: "600px",
  backgroundSize: "cover",
};

const centeredText = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#c8955b",
  fontFamily: "Playfair Display, serif",
};

function BuriedDetail() {
  const authContext = useContext(AuthContext);
  const { cemetery, grave, id } = useParams();
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

  const history = useHistory();

  useEffect(() => {
    async function fetchGrave() {
      try {
        console.log("oi");
        const response = await api.get(`/buried/${id}`);
        console.log(response);
        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchGrave();
  }, []);

  function formatDate(date) {
    return date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
  }

  return (
    <div style={divStyle} className="d-flex align-items-center">
      <button
        onClick={() => {
          history.go(-1);
        }}
        style={{ backgroundColor: "#191926", border: "none" }}
      >
        <i
          className="mb-3 fas fa-angle-left"
          style={{ fontSize: "5em", color: "#c8955b" }}
        ></i>
      </button>
      {/* div primária */}
      <div
        style={divStyle}
        className="col d-flex flex-column align-items-center"
      >
        <div
          style={centeredText}
          className="d-flex flex-column align-items-center"
        >
          <h1 style={{ fontSize: "2em" }}>{state.name}</h1>
          <img src={state.picture} alt={state.name} style={{ width: "100%" }} />
        </div>
      </div>

      {/* div central */}
      <div
        style={divStyle}
        className="col d-flex flex-column align-items-center"
      >
        <div
          style={{ ...centeredText, width: "150%" }}
          className="d-flex flex-column align-items-center"
        >
          <h2>Dados disponíveis</h2>
          <ul
            className="list-group list-group-flush"
            style={{ color: "black" }}
          >
            <li className="list-group-item">
              Data de Óbito: <strong>{formatDate(state.dateOfDeath)}</strong>
            </li>
            <li className="list-group-item">
              Data de Nascimento:{" "}
              <strong>{formatDate(state.dateOfBirth)}</strong>
            </li>
            <li className="list-group-item">
              Certidão de Óbito: <strong>{state.deathCertificate}</strong>
            </li>
            <li className="list-group-item">
              Data de sepultamento:{" "}
              <strong>{formatDate(state.burialDate)}</strong>
            </li>
            <li className="list-group-item">
              Funerária: <strong>{state.funeralHome}</strong>
            </li>
            <li className="list-group-item">
              Situação: <strong>{state.situation}</strong>
            </li>
          </ul>
        </div>
      </div>

      {/* última div */}
      <div style={divStyle} className="col">
        <div
          style={centeredText}
          className="d-flex flex-column align-items-center"
        >
          <Link
            style={{ width: "100%" }}
            className="btn btn-secondary mt-5"
            to={`/cemetery/${cemetery}/grave/${grave}/buried/${id}/edit`}
          >
            Editar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BuriedDetail;
