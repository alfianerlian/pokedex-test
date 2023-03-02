import ThumbnailView from "./ThumbnailView"

interface PokemonListItemProps {
    imgUrl: string,
    name: string
}

function PokemonListItem({ imgUrl, name }: PokemonListItemProps) {
    return <>
        <ThumbnailView title={name} url={imgUrl} size="normal"/>
    </>
}

export default PokemonListItem