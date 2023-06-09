import "./Colaborador.css";
import {AiOutlineCloseCircle} from "react-icons/ai"

const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo } = props.datos;
  const { color1, eliminar } = props;
  return (
    <div className="colaborador">
      <AiOutlineCloseCircle className="eliminar"onClick={eliminar}/>
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
