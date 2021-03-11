import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import "../../assets/styles/image.css";

import api from "../../apis/api";

function CemeteryList() {
  const authContext = useContext(AuthContext);
  const [userCemeteries, setCemeteries] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchCemeteries() {
      try {
        const response = await api.get("/cemetery");
        console.log(response);
        setCemeteries([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCemeteries();
  }, []);

  return (
    <div class="list-group m-5 d-flex flex-row">
      <div>
        <button
          onClick={() => {
            history.push("/");
          }}
          style={{ backgroundColor: "#191926", border: "none" }}
        >
          <i
            className="mr-5 mt-4 fas fa-angle-left"
            style={{ fontSize: "5em", color: "#c8955b" }}
          ></i>
        </button>
      </div>
      <div>
        {userCemeteries.map((cemetery) => (
          <Link
            id={cemetery._id}
            to={`/cemetery/${cemetery._id}`}
            className="list-group-item list-group-item-action "
            aria-current="true"
          >
            <div className="d-flex">
              <img
                className="img-size"
                style={{ width: "100px", height: "100px" }}
                src={cemetery.picture}
              />
              <div className="mx-5 mt-4">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{cemetery.name}</h5>
                </div>
                <p className="mb-1">{cemetery.address}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CemeteryList;
