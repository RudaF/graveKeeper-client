import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";

import api from "../../apis/api";

import "../../../node_modules/bricks-css/dist/bricks.min.css";

import "../../assets/styles/cemetaryDetail.css";
import "../../assets/styles/image.css";

function GraveDetail() {
  const authContext = useContext(AuthContext);
  const { grave } = useParams();
  const [graveData, setGrave] = useState({
    description: "",
    type: "Subterrânea",
    maxCapacity: 0,
    installment: 0,
    identifier: "",
  });

  useEffect(() => {
    async function fetchGrave() {
      try {
        console.log("oi");
        const response = await api.get(`/grave/${grave}`);
        console.log(response);
        setGrave({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchGrave();
  }, []);

  return (
    <div className="full-height d-flex dark-bg wall ">
      <div className="brick p-1-2 list-group m-5">
        <Link
          style={{ width: "120px" }}
          className="btn btn-secondary mt-5"
          to={`/${grave}/new-buried`}
        >
          Adicionar Sepultado
        </Link>
        {graveData.buried
          ? graveData.buried.map((buried) => (
              <Link
                id={buried._id}
                to={`/grave/${buried._id}`}
                class="list-group-item list-group-item-action "
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
                      <h5 className="mb-1">{buried.identifier}</h5>
                    </div>
                    <p className="mb-1">{buried.description}</p>
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
