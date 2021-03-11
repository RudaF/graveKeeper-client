import TextInput from "../../components/TextInput";

function ContactForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        label="Nome"
        type="text"
        id="contactFormName"
        name="name"
        value={props.state.name}
        onChange={props.onChange}
      />

      <TextInput
        label="E-mail"
        type="text"
        id="contactFormEmail"
        name="email"
        value={props.state.email}
        onChange={props.onChange}
      />

      <TextInput
        label="Telefone"
        type="text"
        id="contactFormPhoneNumber"
        name="phoneNumber"
        value={props.state.phoneNumber}
        onChange={props.onChange}
      />

      <TextInput
        label="Assunto"
        type="text"
        id="contactFormSubject"
        name="subject"
        value={props.state.subject}
        onChange={props.onChange}
      />

      <button
        type="submit"
        className="btn"
        style={{ backgroundColor: "#c8955b" }}
      >
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
