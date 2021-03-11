import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";

import api from "../../apis/api";

import "../../../node_modules/bricks-css/dist/bricks.min.css";

import "../../assets/styles/cemetaryDetail.css";
import "../../assets/styles/image.css";

function CemeteryDetail() {
  const authContext = useContext(AuthContext);
  const { cemetery } = useParams();
  const [cemeteryData, setCemetery] = useState({
    name: "",
    address: "",
    graves: [],
    maxCapacity: 0,
  });

  useEffect(() => {
    async function fetchCemetery() {
      try {
        const response = await api.get(`/cemetery/${cemetery}`);
        console.log(response);
        setCemetery({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchCemetery();
  }, [cemetery]);

  return (
    <div className="full-height d-flex dark-bg wall ">
      <div className="brick p-1-2 dark-bg m-5 d-flex flex-column">
        <h1>{cemeteryData.name}</h1>
        <p className="m-3">{cemeteryData.address}</p>

        <Link
          style={{ backgroundColor: "#c8955b", border: "none", width: "10%" }}
          className="btn btn-secondary mt-5"
          to={`/cemetery/${cemetery}/new-grave`}
        >
          Adicionar Jazigo
        </Link>
      </div>
      <div className="brick p-1-2 list-group m-5">
        {cemeteryData.graves.map((grave) => (
          <Link
            key={grave._id}
            id={grave._id}
            to={`/cemetery/${cemetery}/grave/${grave._id}`}
            className="list-group-item list-group-item-action "
            aria-current="true"
          >
            <div className="d-flex align-items-center">
              <i
                style={{ fontSize: "3em", color: "#c8955B" }}
                className="fas fa-cross"
              ></i>
              <div className="mx-5 mt-4">
                <div
                  style={{ fontSize: "3em" }}
                  className="d-flex w-100 justify-content-between align-items-center"
                >
                  <h5 className="mb-1">{grave.identifier}</h5>
                </div>
                <p className="mb-1">{grave.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CemeteryDetail;
