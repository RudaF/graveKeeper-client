import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

const buriedOptions = [
  { value: "Pendente", text: "Pendente" },
  { value: "Sepultado", text: "Sepultado" },
  { value: "Exumado", text: "Exumado" },
  { value: "Aberto", text: "Aberto" },
  { value: "Transferido", text: "Transferido" },
];

function NewBuried() {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        label="Name"
        type="text"
        id="buriedFormName"
        name="name"
        value={props.state.name}
        onChange={props.onChange}
      />

      <TextInput
        label="dateOfBirth"
        type="date"
        id="buriedFormDateOfBirth"
        name="dateOfBirth"
        value={props.state.dateOfBirth}
        onChange={props.onChange}
      />
      <TextInput
        label="dateOfDeath"
        type="date"
        id="buriedFormDateOfDeath"
        name="dateOfDeath"
        value={props.state.dateOfDeath}
        onChange={props.onChange}
      />
      <TextInput
        label="Death Certificate"
        type="text"
        id="buriedFormCertificate"
        name="deathCertificate"
        value={props.state.deathCertificate}
        onChange={props.onChange}
      />

      <TextInput
        label="Picture"
        type="file"
        id="buriedFormPicture"
        name="picture"
        value={props.state.picture}
        onChange={props.onChange}
      />
      <TextInput
        label="Burial Date"
        type="date"
        id="buriedFormBurialDate"
        name="burialDate"
        value={props.state.burialDate}
        onChange={props.onChange}
      />
      <TextInput
        label="Burial Time"
        type="text"
        id="buriedFormBurialTime"
        name="burialTime"
        value={props.state.burialTime}
        onChange={props.onChange}
      />
      <TextInput
        label="Funeral Home"
        type="text"
        id="buriedFormFuneralHome"
        name="funeralHome"
        value={props.state.funeralHome}
        onChange={props.onChange}
      />
      <TextInput
        label="Funeral Agent"
        type="text"
        id="buriedFormFuneralAgent"
        name="funeralAgent"
        value={props.state.funeralAgent}
        onChange={props.onChange}
      />
      <TextInput
        label="Authorization"
        type="text"
        id="buriedFormAuthorization"
        name="authorization"
        value={props.state.authorization}
        onChange={props.onChange}
      />
      <SelectInput
        label="Type"
        id="buriedFormType"
        name="type"
        value={props.state.type}
        onChange={props.onChange}
        options={buriedOptions}
      />
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

export default NewBuried;
