import Canivete from "./Canivete";

export default function navbarClickAndScroll() {
  scrollToTorneiosAbertos(getButton("navbar_torneio"), "torneios_abertos");
  scrollToTorneiosAbertos(getButton("navbar_campeoes"), "campeoes");
  scrollToTorneiosAbertos(getButton("navbar_patrocinadores"), "patrocinadores");
  scrollToTorneiosAbertos(getButton("navbar_faca_parte"), "faca_parte");
  scrollToTorneiosAbertos(getButton("navbar_quem_somos"), "quem_somos");
}

function getButton(dataType) {
  const btn = document.querySelector(`[data-${dataType}]`);
  return btn;
}

function scrollToTorneiosAbertos(btn, dataDestino) {
  btn.addEventListener("click", (e) => {
    const [navbar, divDestino] = Canivete.getElementByDataAttribute([
      "navbar",
      `${dataDestino}`,
    ]);
    let navbarHeight = Canivete.elementHeight(navbar);
    let y = Canivete.elementY(divDestino) - navbarHeight;
    window.scroll({
      top: y,
      behavior: "smooth",
    });
  });
}
