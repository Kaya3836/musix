import { useEffect, useState } from "react";
import styles from "../../styles/Album.module.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import searchIcon from "../../assets/search.png"

export const Album = (props) => {
  const CLIENT_ID = "0bf06af3e00842d39ba8c17f6c945b1a";
  const CLIENT_SECRET = "d7514d90abc7451eb84b8afc0121da62";
  const baseUrl = "https://accounts.spotify.com/api/token";
  const [accessToken, setAccessToken] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };

    fetch(baseUrl, authParameters)
      .then((result) => result.json())
      .then((data) => {
        setAccessToken(data.access_token);
        console.log(data.access_token);
      });
  }, []);
  //SEARCH

  async function search() {
    console.log("search for " + searchInput);
    var artistParameters = {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      artistParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });
    console.log("Artists ID is " + artistID);

    var returnedAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album&market=US&limit=24",
      artistParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbums(data.items);
      });
  }
  console.log(albums);

  return (
    <>
      <div className={styles.container}>
        <Container>
          <InputGroup className={styles.input}>
            <FormControl
              placeholder="Search For Artist"
              type="input"
              id="inputID"
              onKeyPress={(event) => {
                if (event.key == "Enter") {
                  console.log("Pressed enter");
                }
              }}
              onChange={(event) => setSearchInput(event.target.value)}
            />
            <Button className={styles.button} onClick={search}>
              <img className={styles.search} src={searchIcon} />
            </Button>
          </InputGroup>
        </Container>
        <Container>
          <Row
            className={` mt-5 row-cols-5 ${styles.card}`}
          >
            {albums.map((album, i) => {
              console.log(album);
              return (
                <Card className={`gx-5 ${styles.album}`}>
                  <Card.Img src={album.images[0].url} />
                  <Card.Body>
                    <Card.Title style={{color: "white"}}>{album.name}</Card.Title>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};
