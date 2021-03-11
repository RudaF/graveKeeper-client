import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

const graveOptions = [
  { value: "Subterrânea", text: "Subterrânea" },
  { value: "Superfície", text: "Superfície" },
];

function NewGrave(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        label="Identificador"
        type="text"
        id="graveFormLocation"
        name="identifier"
        value={props.state.identifier}
        onChange={props.onChange}
      />

      <SelectInput
        label="Tipo"
        id="graveFormType"
        name="type"
        value={props.state.type}
        onChange={props.onChange}
        options={graveOptions}
      />

      <TextInput
        label="Mensalidade"
        type="number"
        id="graveFormInstallment"
        name="installment"
        value={props.state.installment}
        onChange={props.onChange}
      />

      <TextInput
        label="Capacidade Máxima"
        type="number"
        id="graveFormCapacity"
        name="maxCapacity"
        value={props.state.maxCapacity}
        onChange={props.onChange}
      />

      <TextInput
        label="Descrição"
        type="text"
        id="graveFormDescription"
        name="description"
        value={props.state.description}
        onChange={props.onChange}
      />

      <button
        type="submit"
        className="btn btn-primary"
        style={{ backgroundColor: "#c8955b", border: "none" }}
      >
        Salvar
      </button>
    </form>
  );
}

export default NewGrave;
