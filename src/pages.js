import React from "react";
import {Link, Outlet, useLocation} from "react-router-dom";

export function Home () {
    return (
        <div>
            <h1>Sitio Web</h1>
            <nav>
                <Link to= "about">About</Link>
                <Link to= "events">Events</Link>
                <Link to= "contact">Contact</Link>
            </nav>
        </div>
    );
}
export function About () {
    return (
        <div>
            <h1>[Acerca de]</h1>
            <Outlet/>
            <nav>
                <Link to= "services">Services</Link>
                <Link to= "history">Company history</Link>
                <Link to= "location">Location</Link>
            </nav>
        </div>
    );
}

export function Services () {
    return (
        <div>
            <h2>Nuestros Servicios</h2>
        </div>
    );
}

export function CompanyHistory () {
    return (
        <div>
            <h2>Nuestros Historia</h2>
        </div>
    );
}

export function Location () {
    return (
        <div>
            <h2>Nuestros Ubicacion</h2>
        </div>
    );
}


export function Events () {
    return (
        <div>
            <h1>Eventos</h1>
        </div>
    );
}
export function Contact () {
    return (
        <div>
            <h1>Contacto</h1>
        </div>
    );
}

export function Epa404() {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Recurso no encontrado en {location.pathname}</h1>
        </div>
    );
}