import "./Opciones.css";

const Opciones = (props) => {
  const recibirDatos = (e) => {
    props.setValor(e.target.value);
  };

  const equipos = [
    "Seleccionar Equipo",
    "Programacion",
    "Frot End",
    "Data Science",
    "Dev Ops",
    "UX y Diseño",
    "Movil",
    "Innovacion y Gestion",
  ];
  return (
    <div className="opciones">
      <label>Opciones</label>
      <select
        defaultValue={equipos[0]}
        valor={props.valor}
        onChange={recibirDatos}
      >
        {equipos.map((equipo, index) => (
          <option hidden={index === 0} key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Opciones;
