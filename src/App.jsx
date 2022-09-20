import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import Home from "./components/Home";
import Torneios from "./components/Torneios";
import { RecoilRoot } from "recoil";
import { torneiosState } from "./states/torneiosState";

function App() {
  const [listaTorneios, setListaTorneios] = useRecoilState(torneiosState);
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home />} />
        {listaTorneios.map((item) => {
          return (
            <Route
              key={item.id}
              path={`${item.code}`}
              element={<Torneios dados={item} />}
            />
          );
        })}
      </Routes>
    </RecoilRoot>
  );
}

export default App;
