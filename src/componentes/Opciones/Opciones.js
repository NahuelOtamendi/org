import "./Opciones.css";

const Opciones = () => {
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
      <select className="select">
        {equipos.map((equipo, index) =>
          index === 0 ? (
            <option disabled selected hidden key={index}>
              {equipo}
            </option>
          ) : (
            <option className="seleccionado" key={index}>
              {equipo}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default Opciones;
