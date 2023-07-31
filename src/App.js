import React, { useEffect, useState} from "react";
import './App.css';

//Aqui renderizo todos los componenetes y activo los props que van en cada ccomponente
function App({login}) {

const [datos, setDatos] = useState(null);
const [cargando, setCargando] = useState(false);
const [error, setError] = useState(null);

useEffect(()=> {
  if(!login) return;
  setCargando(true);
  fetch(`https://api.github.com/users/${login}`)
  .then((response)=> response.json()
  .then(setDatos)
  .then(()=> setCargando(false))
  .catch(setError));
}, [login]);

if(cargando) return <h1>Cargando...</h1>;
if(error) return <pre>(JASON.stringify(error, null, 2))</pre>;
if(!datos) return null;

  return(
  <div>
  <h1>{datos.name}</h1>
  <p>{datos.location}</p>
  <img alt = {datos.login} src={datos.avatar_url}/>
  </div>

  )
   
    
}
 

export default App;
