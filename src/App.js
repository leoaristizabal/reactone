import React, { useEffect, useState} from "react";
import './App.css';

//Aqui renderizo todos los componenetes y activo los props que van en cada ccomponente
function App({login}) {

const [datos, setDatos] = useState(null);

useEffect(()=> {
  fetch(`https://api.github.com/users/${login}`)
  .then((response)=> response.json()
  .then(setDatos));
}, []);

if(datos) {
  return <div>{JSON.stringify(datos)}</div>
}
  //54git
  return (
    <div>
    No hay ningun usuario disponible
    </div>
  );
}

export default App;
