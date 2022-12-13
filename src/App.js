import { Home } from "./component/Home"
import { Navbar } from "./component/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Album } from "./component/album/Album";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path="/album" element={<Album />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;