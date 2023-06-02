import "./Input.css";

const Input = (props) => {
  return (
    <div className="Input">
      <label>{props.titulo}</label>
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
};

export default Input;
