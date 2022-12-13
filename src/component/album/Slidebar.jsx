import React from "react";
import styles from "../../styles/album/Slidebar.module.css"
import { MdHomeFilled, MdSearch} from "react-icons/md";
import { IoLibrary } from "react-icons/io5"
import Playlist from "./Playlist"


export default function SlideBar() {

    return (
        <>
            <div className={styles.top}>
                <ul>
                    <li>
                        <MdHomeFilled />
                        <span>Home</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <MdSearch/>
                        <span>Search</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <IoLibrary/>
                        <span>Library</span>
                    </li>
                </ul>
            </div>
            <Playlist/>
        </>
    );
}
