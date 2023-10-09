import { memo } from 'react';
import { useEffect, useState, useMemo } from 'react'
import Modal from 'react-bootstrap/Modal';
import './App.css';


function App() {
  const [datos, setDatos] = useState([]);
  const [openConfirm, setOpenConfirm] = useState(false);
  var pokemonImage;
  var pokemonName;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = [];
        for (let i = 1; i <= 20; i++) {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
          if (!response.ok) {
            throw new Error('No se pudo obtener la información de la API');
          }
          const data = await response.json();
          pokemonData.push(data);
        }
        setDatos(pokemonData);
        console.log('Datos de los Pokémon:', pokemonData);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
  
    fetchData();
  }, []);

/*
  async function Show(id) {
    setOpenConfirm(true)
    const selectedPokemon = datos.find(pokemon => pokemon.id === id);
    if (selectedPokemon) {
       pokemonImage = selectedPokemon.sprites.back_default;
      pokemonName = selectedPokemon.name;
    return (pokemonName, pokemonImage);
    } else {
      console.log("No se encontró el Pokemon", id);
    }
  }*/

  console.log(pokemonImage)
  console.log({pokemonName})
  return (
    <div className='contenedor'>
      <h2 className='titulo'> Elige un pokemon para ver su imagen </h2>
      {datos.map(pokemon => (
        <button className="boton" key={pokemon.id} id={pokemon.id} value={pokemon.name} onClick={() => {Show(pokemon.id)}}> {pokemon.name}</button>
      ))}
      {openConfirm === true ? (
        <Modal 
          show={openConfirm} 
          onHide={() => setOpenConfirm(false)}>
          <Modal.Header closeButton>
            <Modal.Title> <h3>{pokemonName}</h3></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={pokemonImage} alt={pokemonName}></img> 
          </Modal.Body>
        </Modal>
     ) : null}
      
      
    </div>
  );

}

export default App;
