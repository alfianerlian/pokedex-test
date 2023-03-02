import styles from "../styles/pokemonlist.module.css"

interface Props {
    hasNext: boolean
    isLoading: boolean
    onClick: (types?: string) => void
}

function LoadMoreButton({ hasNext, isLoading, onClick }:Props) {
    return hasNext ? <button className={styles.button} onClick={() => onClick()}>{isLoading ? "Loading..." : "Load more Pokemons"}</button> : <p>Gotta catch 'em all!</p>
}

export default LoadMoreButton