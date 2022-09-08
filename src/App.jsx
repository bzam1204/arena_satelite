import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Torneios from "./components/Torneios";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/torneio" element={<Torneios/>} />
    </Routes>
  );
}

export default App;
