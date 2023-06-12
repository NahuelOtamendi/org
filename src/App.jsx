import { useState } from "react";
import { v4 as uuid } from "uuid"
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
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/noeliaseballos.png",
    nombre: "Noelia Seballos (Laucha)",
    puesto: "Programmer",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Data Science",
    foto: "https://github.com/NahuelOtamendi.png",
    nombre: "Nahuel Otamendi",
    puesto: "Programmer",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }
  ]);
 
 
  const [equipos, setEquipos] = useState([
    {
      name: "Seleccionar Equipo",
    },
  
    {
      id: uuid(),
      name: "Programación",
      color1: "#57C278",
    },
    {
      id: uuid(),
      name: "Front End",
      color1: "#82CFFA",
    },
    {
      id: uuid(),
      name: "Data Science",
      color1: "#A6D157",
    },
    {
      id: uuid(),
      name: "Dev Ops",
      color1: "#E06B69",
    },
    {
      id: uuid(),
      name: "UX y Diseño",
      color1: "#DB6EBF",
    },
    {
      id: uuid(),
      name: "Movil",
      color1: "#FFBA05",
    },
    {
      id: uuid(),
      name: "Innovación y Gestión",
      color1: "#FF8A29",
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
    setColaboradores([...colaboradores, {...colaborador, id: uuid()}]);
  };
 
  //eliminar colaborador 
  const eliminarColaborador = (id) => {
    
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id  !== id)
    setColaboradores(nuevosColaboradores)
    
  }

  //Cambiar color de equipos
  const colorEquipo = (color, id) => {
    console.log(color, id)
    const colorActualizado = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.color1 = color
      }
      return equipo
    })

    setEquipos(colorActualizado)
  
}

  //Crear nuevo equipo
  const crearEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    const likeColaboradores = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    setColaboradores(likeColaboradores)
   
  }

  return (
    <div>
      <Header />;
      {!form && (
        <Form
          equipos={equipos.map((equipo) => equipo.name)}
          registroColaborador={registroColaborador}
          crearEquipo={crearEquipo}
          
        />
      )}
      <MiOrg mostrarOcultar={mostrarOcultar} />;
      {equipos.slice(1).map((equipo, index) => (
        <Equipo
          datos={equipo}
          key={index}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.name
          )}
          eliminar={eliminarColaborador} 
          colorEquipo={colorEquipo}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
