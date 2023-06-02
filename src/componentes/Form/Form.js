import "./Form.css";
import Input from "../Input/Input";

const Form = () => {
  return (
    <section className="Form">
      <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Input titulo="Nombre" placeholder="Ingresar Nombre" />
        <Input titulo="Puesto" placeholder="Ingresar Puesto" />
        <Input titulo="Foto" placeholder="Ingresar enlace de Foto" />
      </form>
    </section>
  );
};
export default Form;
