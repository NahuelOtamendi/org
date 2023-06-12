import "./Opciones.css";

const Opciones = (props) => {
  const recibirDatos = (e) => {
    props.setValor(e.target.value);
  };

  return (
    <div className="opciones">
      <label>Opciones</label>
      <select
        defaultValue={props.equipos[0]}
        valor={props.valor}
        onChange={recibirDatos}
      >
        {props.equipos.map((equipo, index) => (
          <option hidden={index === 0} key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Opciones;
