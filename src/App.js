import './button.css'
import PokemonAPIService from './api/service/pokemonAPIService.ts'
import {useState} from 'react'
function App() {
const [APIData, setAPIData] = useState()

const displayData = () => {
  if (APIData) {
    return <div >
    <h1>{APIData.name}</h1>
    <h3>Weight: {APIData.weight}</h3>
    <h3>Height: {APIData.height}</h3>
    <h3>ID: {APIData.id}</h3>
    <h3>Type: {APIData.types[0].type.name}</h3>
    <img className="img" src= {APIData.sprites.front_default}></img>
    </div>
  }
}

  const getRandomPokemonFromAPI = () => {
  PokemonAPIService.randomPokemon(Math.floor(Math.random() * (150 - 1 + 1)) + 1)
  .then((response) => setAPIData(response.data))
  .catch((error) => console.log(error))
}
  return (
    <div className="container">
    {displayData()}
    <button onClick={() => getRandomPokemonFromAPI()} class="cybr-btn">
    Random Pokemon<span aria-hidden>_</span>
    <span aria-hidden class="cybr-btn__glitch">Random Pokemon</span>
    <span aria-hidden class="cybr-btn__tag">000</span>
    </button>
    </div>
  );
}

export default App;
