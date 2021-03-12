import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import api from "../../apis/api";

import "../../../node_modules/bricks-css/dist/bricks.min.css";

import "../../assets/styles/cemetaryDetail.css";
import "../../assets/styles/image.css";

function GraveDetail() {
  const { cemetery, grave } = useParams();
  const [graveData, setGrave] = useState({
    description: "",
    type: "Subterrânea",
    maxCapacity: 0,
    installment: 0,
    identifier: "",
    buried: [],
  });

  const history = useHistory();

  useEffect(() => {
    async function fetchGrave() {
      try {
        const response = await api.get(`/grave/${grave}`);
        console.log(response);
        setGrave({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchGrave();
  }, [grave]);

  return (
    <div className="full-height d-flex dark-bg wall ">
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
      <div className="brick p-1-2 list-group m-5">
        <ul className="list-group list-group-flush" style={{ color: "black" }}>
          <li className="list-group-item">
            Identificador: <strong>{graveData.identifier}</strong>
          </li>
          <li className="list-group-item">
            Tipo: <strong>{graveData.type}</strong>
          </li>
          <li className="list-group-item">
            Capacidade Máxima:{" "}
            <strong>{graveData.maxCapacity} sepultados</strong>
          </li>
          <li className="list-group-item">
            Valor mensal: <strong>R$ {graveData.installment}</strong>
          </li>
          <li className="list-group-item">
            Descrição: <strong>{graveData.description}</strong>
          </li>

          <li className="list-group-item">
            Ocupação:{" "}
            {Array.from({ length: graveData.maxCapacity }).map((_, i) => (
              <i
                key={i}
                className="fas fa-user"
                style={{
                  color: i < graveData.buried.length ? "red" : "green",
                }}
              ></i>
            ))}
          </li>
        </ul>
        <Link
          style={{ width: "20%" }}
          className="btn btn-secondary mt-5"
          to={`/cemetery/${cemetery}/grave/${grave}/new-buried`}
        >
          Novo Sepultado
        </Link>
        <Link
          style={{ width: "20%" }}
          className="btn btn-secondary mt-5 ml-5"
          to={`/cemetery/${cemetery}/grave/${grave}/edit`}
        >
          Editar{" "}
        </Link>
      </div>
      <div className="brick p-1-2 list-group m-5">
        {graveData.buried
          ? graveData.buried.map((buried) => (
              <Link
                key={buried._id}
                id={buried._id}
                to={`/cemetery/${cemetery}/grave/${grave}/buried/${buried._id}`}
                className="list-group-item list-group-item-action "
                aria-current="true"
              >
                <div className="d-flex align-items-center">
                  <i
                    style={{ fontSize: "3em", color: "#c8955B" }}
                    className="fas fa-dove "
                  ></i>
                  <div className="mx-5 mt-4">
                    <div
                      style={{ fontSize: "3em" }}
                      className="d-flex w-100 justify-content-between align-items-center"
                    >
                      <h5 className="mb-1">{buried.name}</h5>
                    </div>
                    <p className="mb-1">
                      Data de falecimento: {buried.dateOfDeath.slice(8, 10)}/
                      {buried.dateOfDeath.slice(5, 7)}/
                      {buried.dateOfDeath.slice(0, 4)}
                    </p>
                    <p className="mb-1">
                      Certidão de Óbito: {buried.deathCertificate}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          : ""}
      </div>
    </div>
  );
}

export default GraveDetail;
