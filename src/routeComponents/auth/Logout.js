import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import api from "../../apis/api";

import { AuthContext } from "../../contexts/authContext";

function Logout() {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    async function logout() {
      try {
        // const response = await api.get("/logout");

        console.log("oi estou no auth ", authContext);
      } catch (err) {
        console.error(err);
      }
    }
    logout();
  });
  return <div>Logging Out.</div>;
}

export default Logout;
