import { useEffect, useState, useRef } from "react";
import styles from "../../styles/AddPlaylist.module.css";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/Firebase";
import { Navigate, useNavigate } from "react-router-dom";

export const Playlists = () => {

  const [data, setData] = useState(null);
  const [userid, setUseriD] = useState(null);
  const name = useRef(null);
  const [play, setPlay ] = useState(null);
  const [id, setId]=useState(null)
  const navigate = useNavigate();
  const [image, setImage ] = useState(null);

  //User uid
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUseriD(user.uid);
      } else {
        console.log("user is logged out");
        navigate("/login")
      }
    });
  }, []);
  // Playlist get
  useEffect((props) => {
    axios
      .get("https://musixback.onrender.com/playlists")
      .then((response) => {
        const songs = response.data;
        setData(songs);
        setId(songs._id)
      })
      .catch((err) => console.log(err));
  }, [play]);

// CREATE PLAYLIST

  const createPlaylist = () => {
    if (!userid) return;
    axios
      .post("https://musixback.onrender.com/playlists", {
        name: name.current.value,
        creator: userid,
      })
      .then(function (response) {
        setPlay(play+1)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

// DELETE PLAYLIST

  const deletePlaylist = (id) => {
    console.log(id)
    axios
      .delete(`https://musixback.onrender.com/playlist/${id}`)
    .then(function () {
      console.log('deleted')
      setPlay(play-1)
    })
    
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className={styles.container}>
      <div>
        <input id="name" ref={name} />
        <button onClick={createPlaylist}></button>
      </div>
      <div style={{ border: "red" }}>
        {data &&
          data.map((item) => {
            return <> 
            <div className={styles.playlist}>
              <img src="https://cdn.myportfolio.com/1fabf4ed77f805d754b14c5b7b6b7fb1/7238d42acc58c1c5f58e6ca6768bfb2352a0aa7a21016eb7d6f0dc293190f898f05ee0a79aeb4322_rw_1200.jpg?h=d73e87a9258dd65515c8148ff3930b6c"></img>
              <p>{item.name}</p>
              <button onClick={()=>{deletePlaylist(item._id)}}>delete</button>
              </div>
            </>;
          })}
      </div> 
    </div>
  );
};
