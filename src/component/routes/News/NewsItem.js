import React from "react";
import styles from "../../../styles/NewsItem.module.css"

const NewsItem = ({ title, description, url, urlToImage}) => {
    return (
        <div className={styles.container}>
            <img className={styles.images} src={urlToImage} alt="New Image" />
            
            <div className={styles.texts}>
                <a className={styles.links} href={url}>{title}</a>
            <p className={styles.title}>{description}</p>
            </div>
        </div>
    )
}
export default NewsItem;