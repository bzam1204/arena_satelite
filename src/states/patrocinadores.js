import { atom } from "recoil";

export const patrocinadoresState = atom({
  key: "patrocinadoresState",
  default: [
    { id: 1, nome: "Softgate", img: "Slogo.svg" },
    { id: 2, nome: "HB Eletrônica", img: "hbLogo.png" },
    { id: 3, nome: "Softgate", img: "Slogo.svg" },
  ],
});
