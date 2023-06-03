import "./Input.css";

const Input = (props) => {
  return (
    <div className="input">
      <label>{props.titulo}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
};

export default Input;
