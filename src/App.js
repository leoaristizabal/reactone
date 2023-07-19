import React from "react";
import './App.css';
import imgrest from "./pruebareactimg.jpg";

function Header (props) {
  return (
    <header>
      <h1>La cocina de {props.name}</h1>
    </header>
  )
}

function Menu(props) {
  return (
    <section>
      <p>Esta es la seccion del menu de {props.adjective}</p>
      <img src={imgrest} height={200} alt="nicolish"/>
      <ul style={{textAlign: "left"}}>{props.platos.map((plato) => <li key={plato.id}>{plato.title}</li>)}</ul>
    </section>
  )
}

function Footer(props){
  return (
    <footer>
    <p>Eso es asi compai</p>
    <p>{props.firma} {props.year}</p>
    </footer>
  )
}

const platos = [
  "Arroz Chino",
  "Coco Top",
  "Pasta Carbonara"
]

const platoObjects = platos.map((plato, i)=> ({id: i, title: plato}));
console.log(platoObjects);

//Aqui renderizo todos los componenetes y activo los props que van en cada ccomponente
function App() {
  return (
    <div className="App">
      <Header name="Nico"/>
      <Menu adjective="lo que tu quieras bb pero esto es lo que frao:" platos = {platoObjects}/>
      <Footer firma= "LeoAristizabal" year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
