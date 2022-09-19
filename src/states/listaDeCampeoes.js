import { atom } from "recoil";

export const listaDeCampeoeState = atom({
  key: "listaDeCampeoes",
  default: [
    {
      id: 1,
      foto: "arenaSportCampeoes.jpeg",
      torneioNome: "Torneio Arena Sport",
      categoria: "Duplas Mistas",
      posicao: 2,
    },
    {
      id: 2,
      foto: "campeoesEx.png",
      torneioNome: "III Torneio Arena Satélite",
      categoria: "Duplas Mistas",
      posicao: 1,
    },
    {
      id: 3,
      foto: "campeoesEx.png",
      torneioNome: "III Torneio Arena Satélite",
      categoria: "Duplas Mistas",
      posicao: 3,
    },
    {
      id: 4,
      foto: "campeoesEx.png",
      torneioNome: "III Torneio Arena Satélite",
      categoria: "Duplas Mistas",
      posicao: 4,
    },
  ],
});
