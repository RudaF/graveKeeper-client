import React from "react";

import saintPaul from "../assets/images/saintPaul.jpg";
import "../assets/styles/image.css";

import HomeColumns from "../components/HomeColumns";
import Footer from "../components/Footer";

const divStyle = {
  width: "100%",
  height: "1200px",
  backgroundImage: `url(${saintPaul})`,
  backgroundSize: "cover",
};
const logo = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#c8955b",

  fontFamily: "Playfair Display, serif",
};

function Home() {
  return (
    <div>
      <div className="d-flex" style={divStyle}>
        <div style={logo} className="d-flex flex-column align-items-center">
          <i
            className="mb-3 fas fa-place-of-worship"
            style={{ fontSize: "10em" }}
          ></i>
          <h1 style={{ fontSize: "5em" }}>GraveKeeper</h1>
          <div className="text-wrap fs-4" style={{ width: "50%" }}>
            <p>
              Uma gestão de jazigos e sepultamentos ágil, eficaz, confiável e
              moderna. Para atender estes requisitos, nossa solução de gestão
              integrada oferece a segurança da tecnologia em nuvem ou local,
              garantindo alta performance operacional, maior rentabilidade e
              informações precisas para uma melhor gestão do seu negócio.{" "}
            </p>
          </div>
        </div>
      </div>
      <HomeColumns />
      <Footer />
    </div>
  );
}

export default Home;
