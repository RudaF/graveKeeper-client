import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import api from "../../apis/api";

import "../../../node_modules/bricks-css/dist/bricks.min.css";

import "../../assets/styles/cemetaryDetail.css";
import "../../assets/styles/image.css";

function CemeteryDetail() {
  const { cemetery } = useParams();
  const [cemeteryData, setCemetery] = useState({
    name: "",
    address: "",
    graves: [],
    maxCapacity: 0,
  });
  const history = useHistory();

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
      <div className="brick p-1-2 dark-bg m-5 d-flex flex-column">
        <h1>{cemeteryData.name}</h1>
        <p className="m-3">{cemeteryData.address}</p>

        <Link
          style={{ backgroundColor: "#c8955b", border: "none", width: "20%" }}
          className="btn btn-secondary mt-5"
          to={`/cemetery/${cemetery}/new-grave`}
        >
          Novo Jazigo
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
              <div>
                <p>
                  Ocupação:
                  {Array.from({ length: grave.maxCapacity }).map((_, i) => (
                    <i
                      key={i}
                      className="fas fa-user ml-1"
                      style={{
                        color: i < grave.buried.length ? "red" : "green",
                      }}
                    ></i>
                  ))}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CemeteryDetail;
