import "./Input.css";

const Input = (props) => {
  //Recibo datos mediante props con el valor: "e.target.value"
  const { type = "text", placeholder, valor, required, titulo} = props;
  const {setValor} = props
  
  const recibirDatos = (e) => {
    setValor(e.target.value);
  };
  

  return (
    <div className={`input input-${type}`}>
      <label>{titulo}</label>
      <input
        //Las props son valores o datos que se transmiten de un componente padre a un componente hijo o viceversa.
        type={type}
        placeholder={placeholder}
        required={required}
        valor={valor}
        //La propiedad onChange se utiliza en programación para detectar cambios en los elementos de formulario, como campos de texto o casillas de verificación.
        onChange={recibirDatos}
      />
    </div>
  );
};

export default Input;
