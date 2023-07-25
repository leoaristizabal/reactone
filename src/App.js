import React, { useState, useEffect } from "react";
import './App.css';

//Aqui renderizo todos los componenetes y activo los props que van en cada ccomponente
function App() {
  const [emocion, setEmocion] = useState("estresao");
  const [secondary, setSecondary] = useState("Cansao");
  
  useEffect (() => {
    console.log(`!Es ${emocion} por aqui`);
  });

  useEffect (() => {
    console.log(`!Es ${secondary} por aqui`);
  });
  
  return (
    <> 
    <h1>Hoy me siento como {emocion} y {secondary}</h1>
    <button onClick={ () => setEmocion("Frustrao")}>Frustracion</button>
    <button onClick={ () => setSecondary("Bellaco")}>Bellaco</button>
    <button onClick={ () => setEmocion("Ladillao")}>Ladillao</button>
    <button onClick={ () => setEmocion("Mejor")}>Mejor</button>
    </>
  );
}

export default App;
