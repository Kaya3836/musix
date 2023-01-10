import { Home } from "./component/Home";
import { Navbar } from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Album } from "./component/routes/Album";
import { Login } from "./component/routes/Login";
import { Signup } from "./component/routes/SignUp";
import { News } from "./component/routes/News";
import { Playlists } from "./component/routes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/album" element={<Album />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/AddPlaylist" element= {<Playlists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
