import React, { useReducer} from "react";
import './App.css';

//Aqui renderizo todos los componenetes y activo los props que van en cada ccomponente
function App() {
  
const [checked, toggle] = useReducer(
  checked => !checked,
  false
  );
  
  return (
    <>
    <input type="checkbox" value= {checked} onChange={toggle} />
    <p> {checked ? "Marcado" : "Sin Marcar"}</p>
    </>
  );
}

export default App;
