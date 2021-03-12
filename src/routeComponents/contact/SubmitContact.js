import { useState } from "react";

import ConfirmationModal from "../../components/ConfirmationModal";
import ContactForm from "./ContactForm";
const form = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  width: "50%",
  fontFamily: "Playfair Display, serif",
};

function SubmitContact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
  });

  const [showModal, setShowModal] = useState(false);

  function handleChange(event) {
    const stateBkp = { ...state };
    stateBkp[event.target.name] = event.target.value;

    setState(stateBkp);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // try {
    //   const response = await api.post("/cemetery/new-cemetery", {
    //     ...state,
    //     picture: uploadImageUrl,
    //   });
    //   console.log(response);
    //   setShowModal(true);
    // } catch (err) {
    //   console.error(err);
    // }
  }

  return (
    <div className="m-5 d-flex flex-column justify-content-center" style={form}>
      <h2>Entre em Contato!</h2>
      <ContactForm
        state={state}
        onChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ConfirmationModal
        show={showModal}
        title={`Obrigado, ${state.name}!`}
        mainMessage="Confirme o envio do contato e entraremos em contato o mais rápido possível."
        closeModal="Cancelar"
        redirectPageButton="Confirmar"
        handleClose={() => setShowModal(false)}
        action={`/`}
      />
    </div>
  );
}

export default SubmitContact;
