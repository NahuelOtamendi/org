import "./Form.css";
import Input from "../Input/Input";
import Opciones from "../Opciones/Opciones";
import Boton from "../Boton/Boton";
import { useState } from "react";



const Form = (props) => {
   //Utilizo estados para enviar los valores ingresados mediante Props.
   const [nombre, setNombre] = useState("");
   const [puesto, setPuesto] = useState("");
   const [foto, setFoto] = useState("");
   const [equipo, setEquipo] = useState("");
   const [name, setTitulo] = useState("");
   const [color, setColor] = useState("");
 
  const { registroColaborador, crearEquipo} = props

  const envioFormulario = (e) => {
    e.preventDefault();
    const datosRecividos = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registroColaborador(datosRecividos);
  };

  const envioEquipo = (e) => {
    e.preventDefault()
    crearEquipo({name, color1: color})
  }

 
  return (
    <section className="form">
      <form onSubmit={envioFormulario}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Input
          type="text"
          titulo="Nombre"
          placeholder="Ingresar Nombre"
          required
          valor={nombre}
          setValor={setNombre}
        />
        <Input
          type="text"
          titulo="Puesto"
          placeholder="Ingresar Puesto"
          required
          valor={puesto}
          setValor={setPuesto}
        />
        <Input
          type="text"
          titulo="Foto"
          placeholder="Ingresar enlace de Foto"
          required
          valor={foto}
          setValor={setFoto}
        />
        <Opciones equipos={props.equipos} valor={equipo} setValor={setEquipo} />
        <Boton texto="Crear" />
      </form>
      <form onSubmit={envioEquipo}>
        <h2>Rellena el formulario para crear el Equipo.</h2>
        <Input
          type="text"
          titulo="Titulo"
          placeholder="Ingrese Titulo del Equipo"
          required
          valor={name}
          setValor={setTitulo}
        />
        <Input
          type="color"
          titulo="Color"
          placeholder="Ingresar Color del Equipo en Hex"
          required
          valor={color}
          setValor={setColor}
        />
        <Boton texto="Crear" />
        </form>
        
    </section>
  );
};

export default Form;
