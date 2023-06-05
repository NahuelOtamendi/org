import Colaborador from "../Colaborador/Colaborador";
import "./Equipo.css";

const Equipo = (props) => {
  //Destructuracion
  const { color1, color2, name } = props.valores;

  return (
    <section className="equipo" style={{ backgroundColor: color2 }}>
      <h3 style={{ borderColor: color1 }}>{name}</h3>
      <div className="colaboradores">
        <Colaborador
          nombre={props.nombre}
          color1={props.valores.color1}
          equipo={props.valores.name}
        />
      </div>
    </section>
  );
};

export default Equipo;
