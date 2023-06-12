import Colaborador from "../Colaborador/Colaborador";
import "./Equipo.css";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  //Destructuracion
  const { color1, name, id } = props.datos;
  const { colaboradores, eliminar, colorEquipo, like} = props;
  const colorFondo = { backgroundColor: hexToRgba( color1, 0.6) }
  const colorBorde = { borderColor: color1 }
 
  return (
    colaboradores.length > 0 && (
      
      <section  className="equipo" style={colorFondo}>
        <input 
        type="color"
        className="color"
        value={color1}
        onChange={(e) => colorEquipo(e.target.value, id)}
        />
        <h3  style={colorBorde}>{name}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, index) => 
              <Colaborador
                datos={colaborador}
                key={index}
                color1={color1}
                eliminar={eliminar}
                like={like}
              />)
          }
        </div>
      </section>
    )
  );
};

export default Equipo;
