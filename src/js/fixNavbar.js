import Canivete from "./Canivete";

export default function fixNavbar() {
  const [campeoes, navbar, campeoesTitle] = Canivete.getElementByDataAttribute([
    "campeoes",
    "navbar",
    "campeoes_title",
  ]);
}
