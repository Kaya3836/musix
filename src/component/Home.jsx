import styles from "../styles/Home.module.css"
import logo from "../assets/logo.png"
import concert from "../assets/concert.jpg"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../config/Firebase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Home = (props) => {
    // const [user, setUser] = useState();

    // const navigate = useNavigate();

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             console.log(user)
    //             setUser(user);
    //         } else {
    //             console.log(user)
    //             navigate("/login");
    //             setUser(null)
    //         }
    //     })
    // },[])
    return (
        <>
{/* SECTION1 */}
        <div className={styles.section1}>
            <img className={styles.logo} src={logo}/>
        </div>
{/* SECTION2 */}
        <div className={styles.section2}>
            <img className={styles.concert} src={concert}/>
            <div className={styles.exp}>
                <p className={styles.pp}>Play millions of songs and podcasts, for free.</p>
                <button>Learn more</button>
            </div>
        </div>
        </>
    )
}
