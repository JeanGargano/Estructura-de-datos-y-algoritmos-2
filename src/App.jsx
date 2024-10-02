import React from 'react';
import Title from './components/Title';
import Calculator from './components/calculator';

function App() {
  return (
    <>
      <Title />
      <div id="contenedor">
        <Calculator />
      </div>
    </>
  );
}

export default App;
