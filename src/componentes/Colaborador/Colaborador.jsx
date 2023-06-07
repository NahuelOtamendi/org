import "./Colaborador.css";

const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo } = props.datos;
  const { color1 } = props;
  return (
    <div className="colaborador">
      <div className="encabezado" style={{ backgroundColor: color1 }}>
        <img src={foto} alt="imagen"></img>
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
