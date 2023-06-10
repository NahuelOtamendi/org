import { useState } from "react";
import "./App.css";
import Header from "./componentes/Header/Header";
import Form from "./componentes/Form/Form";
import MiOrg from "./componentes/MiOrg/MiOrg";
import Equipo from "./componentes/Equipo/Equipo";
import Footer from "./componentes/Footer/Footer";


function App() {
  const [form, mostrarOcultarForm] = useState(false);

  const [colaboradores, setColaboradores] = useState([
  {
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }
  ]);
 
  const [equipos, setEquipos] = useState([
    {
      name: "Seleccionar Equipo",
    },
  
    {
      name: "Programación",
      color1: "#57C278 ",
      color2: "#D9F7E9",
    },
    {
      name: "Front End",
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
      name: "Innovación y Gestión",
      color1: "#FF8A29",
      color2: "#FFEEDF",
    },
  ]);

   //Ternario = condicion ? seMuestra : noMuestra
   //Condicion && seMuestra
  const mostrarOcultar = () => {
    mostrarOcultarForm(!form);
  };
  
  //Registrar un nuevo colaborador
  const registroColaborador = (colaborador) => {
    //spred operator: copia los valores para poder utilizarlos
    setColaboradores([...colaboradores, colaborador]);
  };

  //eliminar colaborador 
  const eliminarColaborador = () => {
    console.log('eliminar colaborador')
  }

  //Cambiar color de equipos
  const colorEquipo = (color, name) => {
    console.log(color, name)
    const colorActualizado = equipos.map((equipo) => {
      if(equipo.name === name) {
        equipo.color1 = color
      }
      return equipo
    })

    setEquipos(colorActualizado)
  
}


  return (
    <div>
      <Header />;
      {!form && (
        <Form
          equipos={equipos.map((equipo) => equipo.name)}
          registroColaborador={registroColaborador}
        />
      )}
      <MiOrg mostrarOcultar={mostrarOcultar} />;
      {equipos.slice(1).map((equipo) => (
        <Equipo
          valores={equipo}
          key={equipo.name}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.name
          )}
          eliminar={eliminarColaborador} 
          colorEquipo={colorEquipo}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
