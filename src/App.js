// import "./App.css";
import { Route, Routes } from "react-router";
import Character from "./components/Characters/Character";
import CharacterList from "./components/Characters/CharacterList";
import NavBar from "./components/NavBar/NavBar";
import Locations from "./components/Locations/Locations";
import Episodes from "./components/Episodes/Episodes";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="characters" element={<CharacterList />} />
        <Route path="locations" element={<Locations />} />
        <Route path="episodes" element={<Episodes />} />
      </Routes>
    </>
  );
}

export default App;
