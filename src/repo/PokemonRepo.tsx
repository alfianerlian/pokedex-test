import { IPokemonDetails, IPokemonListItem } from "../entity";
import PokemonClient from "../network/PokemonClient";
import { GET_POKEMON_DETAILS_BY_NAME, GET_POKEMON_LIST } from "../query";
import PokemonTypes from "../json/PokemonTypes.json"

interface GetPokemonListReponse {
    pokemons: IPokemonListItem[]
}

interface GetPokemonDetailsReponse {
    pokemon: IPokemonDetails
}

// assuming no error handling
class PokemonRepo {
    getPokemonList = (count: number) => PokemonClient.query<GetPokemonListReponse>({ query: GET_POKEMON_LIST, variables: { count }})
    getPokemonByName = (name: string) => PokemonClient.query<GetPokemonDetailsReponse>({ query: GET_POKEMON_DETAILS_BY_NAME, variables: { name }})
    getPokemonTypes = () => PokemonTypes
}

const pokemonRepo = new PokemonRepo()

export default pokemonRepo