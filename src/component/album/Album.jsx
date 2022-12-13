import React from "react";
import { Container } from "react-bootstrap";
import SlideBar from "./Slidebar";
import Body from "./Body";
import { Footer } from "./Footer";
import styles from "../../styles/album/Album.module.css"

export function Album() {
    return( 
        <>
            <div className={styles.SpotifyBody}>
                <SlideBar/>
                {/* <div className={styles.body}>
                    <Body/>
                </div> */}
            </div>
            {/* <div className={styles.footer}>
                <Footer/>
            </div> */}
            </>
    )
}