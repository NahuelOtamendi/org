import { useState } from "react";
import "./App.css";
import Header from "./componentes/Header/Header";
import Form from "./componentes/Form/Form";
import MiOrg from "./componentes/MiOrg/MiOrg";
import Equipo from "./componentes/Equipo/Equipo";

function App() {
  const [form, mostrarOcultarForm] = useState(false);
  //Ternario = condicion ? seMuestra : noMuestra

  const [datosRecividos, setDatosRecibidos] = useState(null); // Estado para almacenar los datos recibidos

  const recibirDatos = (datos) => {
    setDatosRecibidos(datos); // Actualiza el estado con los datos recibidos
  };

  console.log(recibirDatos);

  const mostrarOcultar = () => {
    mostrarOcultarForm(!form);
  };

  const equipos = [
    {
      name: "Seleccionar Equipo",
    },

    {
      name: "Programacion",
      color1: "#57C278 ",
      color2: "#D9F7E9",
    },
    {
      name: "Frot End",
      color1: "#82CFFA",
      color2: "#E8F8FF",
    },
    {
      name: "Data Science",
      color1: "#A6D157",
      color2: "#F0F8E2",
    },
    {
      name: "Dev Ops",
      color1: "#E06B69",
      color2: "#FDE7E8",
    },
    {
      name: "UX y Diseño",
      color1: "#DB6EBF",
      color2: "#FAE9F5",
    },
    {
      name: "Movil",
      color1: "#FFBA05",
      color2: "#FFF5D9",
    },
    {
      name: "Innovacion y Gestion",
      color1: "#FF8A29",
      color2: "#FFEEDF",
    },
  ];

  return (
    <div>
      <Header />;
      {!form && <Form equipos={equipos.map((equipo) => equipo.name)} />}
      <MiOrg mostrarOcultar={mostrarOcultar} />;
      {equipos.slice(1).map((equipo) => (
        <Equipo nombre={"nahuel"} valores={equipo} key={equipo.name} />
      ))}
    </div>
  );
}

export default App;
