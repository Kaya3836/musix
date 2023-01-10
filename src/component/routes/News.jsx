import NewsList from "./News/NewsList"
import styles from "../../styles/News.module.css"
export const News = () => {
    return(
        <div className={styles.body}>
            <NewsList />
        </div>
    )
}
