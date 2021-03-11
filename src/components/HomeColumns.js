import React from "react";

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

function HomeColumns() {
  return (
    <div style={divStyle} className="d-flex align-items-center">
      <div
        style={{ backgroundColor: "white", ...divStyle }}
        className="col d-flex flex-column align-items-center"
      >
        <div
          style={centeredText}
          className="d-flex flex-column align-items-center"
        >
          <i
            style={{ fontSize: "10em", color: "black" }}
            className="fas fa-praying-hands"
          ></i>
          <div
            className="text-wrap fs-4 container mt-5"
            style={{ color: "black" }}
          >
            <p>
              Conte com nossas soluções de consultoria tanto para o diagnóstico
              operacional do cemitério como para processos específicos
              envolvendo a operação.
            </p>
          </div>
        </div>
      </div>
      <div style={divStyle} className="col">
        <div
          style={centeredText}
          className="d-flex flex-column align-items-center"
        >
          <i
            className="fas fa-dove "
            style={{ fontSize: "10em", color: "#c8955b" }}
          ></i>
          <div
            className="text-wrap fs-4 container mt-5"
            style={{ color: "#c8955b" }}
          >
            <p>
              Maior eficiência operacional e suporte garantido por meio de
              atendimento com consultores especializados na gestão de jazigos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeColumns;
