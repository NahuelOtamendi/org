import Colaborador from "../Colaborador/Colaborador";
import "./Equipo.css";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  //Destructuracion
  const { color1, color2, name } = props.valores;
  const { colaboradores, eliminar, colorEquipo} = props;
  const colorFondo = { backgroundColor: hexToRgba( color1, 0.5) }
  const colorBorde = { borderColor: hexToRgba( color1, 0.5) }
  
  return (
    colaboradores.length > 0 && (
      
      <section className="equipo" style={colorFondo}>
        <input 
        type="color"
        className="color"
        defaultValue={ colorBorde }
        onChange={(e) => colorEquipo(e.target.value, name)}
        />
        <h3 style={colorBorde}>{name}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, index) => 
              <Colaborador
                datos={colaborador}
                key={index}
                color1={color1}
                eliminar={eliminar}
              />)
          }
        </div>
      </section>
    )
  );
};

export default Equipo;
