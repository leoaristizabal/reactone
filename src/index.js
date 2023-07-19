import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

function AppTwo(){
  return <h1>Esta es la App 2 solo para pruebas</h1>
}

root.render (
  <React.StrictMode>
  <>
    <App />
    <AppTwo/>
  </>
  </React.StrictMode>,
  
)
