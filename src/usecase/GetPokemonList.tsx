import { IPokemonListItem } from "../entity"
import pokemonRepo from "../repo/PokemonRepo"

async function getPokemonList(count: number): Promise<IPokemonListItem[]> {
    return (await pokemonRepo.getPokemonList(count)).data.pokemons
}

export default getPokemonList