function SelectInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <select
        multiple={props.multiple}
        className="form-control"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        <option disabled>Select a species</option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
