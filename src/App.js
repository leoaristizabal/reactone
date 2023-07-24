import React from "react";
import './App.css';

function SecretComponent () {
  return (
    <h1> Informacion oculta para practica</h1>
  )
}

function RegularComponent() {
  return ( <h1>Componentes Regualres visibles</h1>)
}

//Aqui renderizo todos los componenetes y activo los props que van en cada ccomponente
function App(props) {
  return (
    <>
      {props.autorizado ? <SecretComponent/> : <RegularComponent/>}
    </>
  )
}

export default App;
