import { useState } from 'react';

const MiComponente = () => {
  const [receta, setReceta] = useState([]);

  const agregarIngrediente = (ingrediente) => {
    const nuevaReceta = [receta, ingrediente];
    setReceta(nuevaReceta);
  };

  return (
    <div>
      <h1>Mi Receta</h1>
      <ul>
        {receta.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
      <button onClick={() => agregarIngrediente("Nuevo Ingrediente")}>
        Agregar Ingrediente
      </button>
    </div>
  );
};

export default MiComponente;
