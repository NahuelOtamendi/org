import "./Form.css";
import Input from "../Input/Input";
import Opciones from "../Opciones/Opciones";
import Boton from "../Boton/Boton";
import { useState } from "react";

const Form = (props) => {
  const envioFormulario = (e) => {
    e.preventDefault();
    const datosRecividos = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    console.log(datosRecividos);
  };

  //Utilizo estados para enviar los valores ingresados mediante Props.
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  return (
    <section className="form">
      <form onSubmit={envioFormulario}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Input
          type="text"
          titulo="Nombre"
          placeholder="Ingresar Nombre"
          required
          nombre={nombre}
          setValor={setNombre}
        />
        <Input
          type="text"
          titulo="Puesto"
          placeholder="Ingresar Puesto"
          required
          puesto={puesto}
          setValor={setPuesto}
        />
        <Input
          type="text"
          titulo="Foto"
          placeholder="Ingresar enlace de Foto"
          required
          foto={foto}
          setValor={setFoto}
        />
        <Opciones equipos={props.equipos} valor={equipo} setValor={setEquipo} />
        <Boton texto="Crear" />
      </form>
    </section>
  );
};
export default Form;
