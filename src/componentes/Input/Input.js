import "./Input.css";

const Input = (props) => {
  //Recibo datos mediante props con el valor: "e.target.value"
  const recibirDatos = (e) => {
    props.setValor(e.target.value);
  };

  return (
    <div className="input">
      <label>{props.titulo}</label>
      <input
        //Las props son valores o datos que se transmiten de un componente padre a un componente hijo.
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        valor={props.valor}
        //La propiedad onChange se utiliza en programación para detectar cambios en los elementos de formulario, como campos de texto o casillas de verificación.
        onChange={recibirDatos}
      />
    </div>
  );
};

export default Input;
