import SubmitContact from "../routeComponents/contact/SubmitContact";
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

function Footer() {
  return (
    <div style={divStyle} className="d-flex align-items-center">
      {/* div primária */}
      <div
        style={divStyle}
        className="col d-flex flex-column align-items-center"
      >
        <div
          style={centeredText}
          className="d-flex flex-column align-items-center"
        >
          <i
            className="mb-3 fas fa-place-of-worship"
            style={{ fontSize: "10em" }}
          ></i>
          <h1 style={{ fontSize: "5em" }}>GraveKeeper</h1>
        </div>
      </div>

      {/* div central */}
      <div
        style={divStyle}
        className="col d-flex flex-column align-items-center"
      >
        <SubmitContact />
      </div>

      {/* última div */}
      <div style={divStyle} className="col">
        <div
          style={centeredText}
          className="d-flex flex-column align-items-center"
        >
          <h3>Conheça o desenvolvedor:</h3>
          <div
            className="text-wrap fs-4 container mt-5"
            style={{ color: "#c8955b" }}
          >
            <p style={{ fontSize: "20px" }}>
              <a
                style={{ color: "#c8955b" }}
                href="https://www.linkedin.com/in/rudafloresta/"
              >
                <i className="mx-2 fab fa-linkedin"></i> Rudá Floresta
              </a>
            </p>
            <p style={{ fontSize: "20px" }}>
              <a style={{ color: "#c8955b" }} href="https://github.com/RudaF">
                <i className="mx-2 fab fa-github"></i>Rudá Floresta
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
