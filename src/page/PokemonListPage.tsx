import { useEffect, useState } from 'react';
import { IPokemonListItem } from "../entity";
import { getPokemonList, getPokemonTypes } from "../usecase";
import styles from "../styles/pokemonlist.module.css"
import { Filter, Header, LoadMoreButton, PokemonList } from '../component';
import { useSearchParams } from 'react-router-dom';

const ITEM_PER_PAGE = 15
const TOTAL_POKEMONS = 150 // hardcoded since the API didn't provide a total_count
const SCROLL_OFFSET = 200
const QUERY_FILTER = 'filter'

function PokemonListPage() {
  const [pokemonList, setPokemonList] = useState<IPokemonListItem[]>([])
  const [pokemonCount, setPokemonCount] = useState<number>(0)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [searchParams] = useSearchParams()
  const [selectedFilter] = useState<string|null>(searchParams.get(QUERY_FILTER))

  useEffect(() => {
    if (pokemonCount === 0) loadPokemons(ITEM_PER_PAGE, selectedFilter)
  })

  window.onscroll = () => handleScroll()
  
  const loadPokemons = async (count: number, types?: string | null) => {
    setLoading(true)
    const pokemons = await getPokemonList(count)
    setPokemonCount(pokemons.length)
    setLoading(false)

    const filter = types || selectedFilter
    if (!filter) {
      console.log('no filter')
      setPokemonList(pokemons)
      return
    }

    const filtered = pokemons.filter(pokemon => pokemon.types.map(item => item.toUpperCase()).includes(filter.toUpperCase()))
    if (filtered.length > 0) {
      setPokemonList(filtered)
    } else if (hasNext) {
      // auto load for next page
      loadPokemons(count + ITEM_PER_PAGE)
    }
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

  const pokemonTypes = getPokemonTypes()

  return <>
    <Header>
      <Filter data={pokemonTypes}/>
    </Header>
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
