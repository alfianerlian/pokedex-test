import { IPokemonDetails } from "../entity";
import pokemonRepo from "../repo/PokemonRepo";

async function getPokemonByName(name: string): Promise<IPokemonDetails> {
    return (await pokemonRepo.getPokemonByName(name)).data.pokemon
}

export default getPokemonByName