import styles from "../styles/Home.module.css"
import logo from "../assets/logo.png"
import concert from "../assets/concert.jpg"
import { Section3 } from "./Section3"


export const Home = (props) => {
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
{/* SECTION3 */}
        <Section3/>
        </>
    )
}
