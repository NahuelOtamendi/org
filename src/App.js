import { useState } from "react";
import "./App.css";
import Header from "./componentes/Header/Header";
import Form from "./componentes/Form/Form";
import MiOrg from "./componentes/MiOrg/MiOrg";

function App() {
  const [form, mostrarOcultarForm] = useState(true);
  //Ternario = condicion ? seMuestra : noMuestra
  const mostrarOcultar = () => {
    mostrarOcultarForm(!form);
  };
  return (
    <div>
      <Header />;{form === true ? <Form /> : <div></div>};
      <MiOrg mostrarOcultar={mostrarOcultar} />;
    </div>
  );
}

export default App;
