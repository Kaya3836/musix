import styles from "../styles/Navbar.module.css"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import instagram from "../assets/ig.png";
import facebook from "../assets/fb.png";
import discord from "../assets/disc.png";


const routes = [
    { name: "Music", to: "music" },
    { name: "News", to: "news" },
    { name: "Playlist", to: "playlist" },
    { name: "Album", to: "album" },
    { name: "Book", to: "book" },
    { name: "Log in", to: "login" },
    { name: "Profile", to: "profile" }, 
  ];


export const Navbar = (props) => {
    return (
        <div
          className={styles.container}
        >
            <div className={styles.innercontainer}>
              <Link to="/">
                <img className={styles.logo} src={logo}/>
              </Link>
              <div className={styles.row}>
                {routes.map(({ name, to }) => (
                  <Link to={to}>
                    {name}
                  </Link>
                ))}
                <div className={styles.inner2container}>
                  <a href="http://instagram.com/kaya__z?igshid=YmMyMTA2M2Y=">
                    <img className={styles.ig} src={instagram}/>
                  </a>
                  <a href="http://instagram.com/kaya__z?igshid=YmMyMTA2M2Y=">
                    <img className={styles.fb} src={facebook}/>
                  </a>
                  <a href="http://instagram.com/kaya__z?igshid=YmMyMTA2M2Y=">
                    <img className={styles.disc} src={discord}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
      );
}