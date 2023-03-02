import { useEffect, useState } from 'react';
import { IPokemonListItem } from "../entity";
import { getPokemonList } from "../usecase";
import styles from "../styles/pokemonlist.module.css"
import { Header, PokemonList } from '../component';

const ITEM_PER_PAGE = 15

function PokemonListPage() {
  const [pokemonList, setPokemonList] = useState<IPokemonListItem[]>([])
  const [pokemonCount, setPokemonCount] = useState<number>(0)

  useEffect(() => {
    if (pokemonCount === 0) loadPokemons(ITEM_PER_PAGE)
  })

  const loadPokemons = async (count: number) => {
    const pokemons = await getPokemonList(count)
    setPokemonCount(pokemons.length)
    setPokemonList(pokemons)
  }

  return <>
    <Header/>
    <div className={styles.mainContainer}>
        <ul className={styles.gridContainer}>
          <PokemonList pokemonList={pokemonList}/>
        </ul>
    </div>
    </>
}

export default PokemonListPage;
