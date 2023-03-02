import styles from "../styles/filter.module.css"

interface Props {
    data: string[]
}

function Filter({ data }: Props) {
    return <>
        <div className={styles.filterContainer}>
            <p className={styles.filterButton}>Filter</p>
            <div className={styles.filterList}>
                {data.map(item => <a className={styles.filterItem} key={`filter-${item}`} href={`/?filter=${item}`}>{item}</a>)}
            </div>
        </div>
    </>
}

export default Filter