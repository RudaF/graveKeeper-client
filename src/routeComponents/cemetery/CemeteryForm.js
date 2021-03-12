import TextInput from "../../components/TextInput";

function CemeteryForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        label="Name"
        type="text"
        id="cemeteryFormName"
        name="name"
        value={props.state.name}
        onChange={props.onChange}
      />

      <TextInput
        label="Address"
        type="text"
        id="cemeteryFormAddress"
        name="address"
        value={props.state.address}
        onChange={props.onChange}
      />

      <TextInput
        label="Capacity"
        type="number"
        id="cemeteryFormCapacity"
        name="maxCapacity"
        value={props.state.maxCapacity}
        onChange={props.onChange}
      />

      <TextInput
        label="Number of Employees"
        type="number"
        id="cemeteryFormEmployees"
        name="employees"
        value={props.state.employees}
        onChange={props.onChange}
      />

      <TextInput
        label="Profile Picture"
        type="file"
        id="petFormPicture"
        name="picture"
        className="formControl"
        onChange={props.onChange}
      />

      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

export default CemeteryForm;
