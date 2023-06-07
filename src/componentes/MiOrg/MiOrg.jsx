import { useState } from "react";
import "./MiOrg.css";

//Estado - Hook
//Definicion de un estado = const [variable, funcionActualiza(valorFinal)] = useState(valorInicial)
//useState() = function

const MiOrg = (props) => {
  return (
    <section className="miorg">
      <h3 className="text">Mi Organizacion</h3>
      <img
        src="/img/boton.png"
        alt="Boton"
        onClick={props.mostrarOcultar}
      ></img>
    </section>
  );
};

export default MiOrg;
