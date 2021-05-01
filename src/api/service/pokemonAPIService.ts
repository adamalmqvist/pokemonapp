import http from '../pokemonAPI'

const randomPokemon = (randomNumber : any) => {
    return http.get(`${randomNumber}`)
} 
export default {
    randomPokemon
}