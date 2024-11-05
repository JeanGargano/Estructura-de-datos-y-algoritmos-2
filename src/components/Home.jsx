import React from 'react';
import "../Stylesheet/Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido a Nuestra Aplicación</h1>
      <p className="home-description">
        Esta es la página de inicio de nuestra aplicación. Aquí puedes encontrar información y recursos.
      </p>
      <button className="home-button">Comenzar</button>
    </div>
  );
};

export default Home;
