import "./App.css";
import { Users } from "./components/Users";
//siempre que import sea 'nombrado' van llaves
import Employees from "./components/Employees";
//si el import es no nombrado o por default va sin llaves

function App() {
  //el componente es una funcion que devuelve contenido ernderizable
  //el componente siempre arranca con mayuscula

  //npm install para instalar instalar dependencias
  //npm run dev para correr el programa

  return (
    <>
      <Users name="Thiago" />
      hola mundo
      <Employees />
    </>
  );
}

export default App;
