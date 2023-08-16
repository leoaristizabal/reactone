import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import {Home, About, Events, Contact, Epa404, Services, CompanyHistory, Location} from "./pages";

//Aqui renderizo todos los componenetes y activo los props que van en cada ccomponente


function App() {

  return(
    <div>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element = {<About />}>
          <Route path="services" element = {<Services/>} />
          <Route path="history" element = {<CompanyHistory/>} />
          <Route path="location" element = {<Location/>} />
        </Route>
        <Route path="/events" element = {<Events/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/*" element = {<Epa404/>} />
      </Routes>
    </div>);   
      
}
 

export default App;
