import Colaborador from "../Colaborador/Colaborador";
import "./Equipo.css";

const Equipo = (props) => {
  //Destructuracion
  const { color1, color2, name } = props.valores;
  const { colaboradores, eliminar} = props;

  return (
    colaboradores.length > 0 && (
      <section className="equipo" style={{ backgroundColor: color2 }}>
        <h3 style={{ borderColor: color1 }}>{name}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, index) => {
            return (
              <Colaborador
                key={index}
                datos={colaborador}
                color1={props.valores.color1}
                equipo={props.valores.name}
                eliminar={eliminar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Equipo;
