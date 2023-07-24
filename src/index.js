import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const checklist = ["botas",  "franelas", "pantalones"]
console.log(checklist);

root.render (
  <React.StrictMode>
  <>
    <App autorizado = {true} />
  </>
  </React.StrictMode>,
  
)
