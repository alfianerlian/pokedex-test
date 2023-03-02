import { useEffect, useState } from 'react';
import { IPokemonListItem } from "../entity";
import { getPokemonList } from "../usecase";
import styles from "../styles/pokemonlist.module.css"
import { Header, LoadMoreButton, PokemonList } from '../component';

const ITEM_PER_PAGE = 15
const TOTAL_POKEMONS = 150 // hardcoded since the API didn't provide a total_count
const SCROLL_OFFSET = 200

function PokemonListPage() {
  const [pokemonList, setPokemonList] = useState<IPokemonListItem[]>([])
  const [pokemonCount, setPokemonCount] = useState<number>(0)
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (pokemonCount === 0) loadPokemons(ITEM_PER_PAGE)
  })

  window.onscroll = () => handleScroll()
  
  const loadPokemons = async (count: number, types?: string | null) => {
    setLoading(true)
    const pokemons = await getPokemonList(count)
    setPokemonCount(pokemons.length)
    setLoading(false)

    setPokemonList(pokemons)
  }

  const loadNextPage = () => {
    loadPokemons(pokemonCount + ITEM_PER_PAGE)
  }

  const hasNext = pokemonCount < TOTAL_POKEMONS
  
  const isEndOfScreen = () => window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight - SCROLL_OFFSET

  const handleScroll = () => {
    if (isEndOfScreen() && hasNext && !isLoading) {
      loadNextPage()
    }
  }

  return <>
    <Header/>
    <div className={styles.mainContainer}>
        <ul className={styles.gridContainer}>
          <PokemonList pokemonList={pokemonList}/>
        </ul>
        <div className={styles.loadMoreContainer}>
          <LoadMoreButton isLoading={isLoading} hasNext={hasNext} onClick={loadNextPage}/>
        </div>
    </div>
    </>
}

export default PokemonListPage;
