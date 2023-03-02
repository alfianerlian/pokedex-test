import { Link } from "react-router-dom";
import styles from "../styles/header.module.css"

function Header() {
    return <>
        <div className={styles.header} >
            <Link className={styles.title} to={"/"}>Pokédex</Link>
        </div>
    </>
}

export default Header