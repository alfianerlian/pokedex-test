import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css"

interface Props {
    children?: ReactNode
}

function Header({ children }: Props) {
    return <>
        <div className={styles.header} >
            <Link className={styles.title} to={"/"}>Pokédex</Link>
            <div className={styles.extraAction}>{children}</div>
        </div>
    </>
}

export default Header