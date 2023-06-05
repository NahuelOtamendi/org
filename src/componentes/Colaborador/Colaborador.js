import "./Colaborador.css";

const Colaborador = (props) => {
  return (
    <div className="colaborador">
      <div className="encabezado" style={{ backgroundColor: props.color1 }}>
        <img src="https://github.com/NahuelOtamendi.png" alt="imagen"></img>
      </div>
      <div className="info">
        <h4>{props.nombre}</h4>
        <h5>Puesto</h5>
      </div>
    </div>
  );
};

export default Colaborador;
