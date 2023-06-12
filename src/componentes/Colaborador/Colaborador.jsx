import "./Colaborador.css";
import {AiFillCloseCircle} from "react-icons/ai"

const Colaborador = (props) => {
  const { nombre, puesto, foto, id} = props.datos;
  const { color1, eliminar } = props;
  
  return (
    <div className="colaborador">
      <AiFillCloseCircle className="eliminar"onClick={() => eliminar(id)}/>
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
