import Canivete from "./Canivete";

export default function fixNavbar() {
  const [campeoes, navbar, campeoesTitle] = Canivete.getElementByDataAttribute([
    "campeoes",
    "navbar",
    "campeoes_title",
  ]);

  yMaiorQueNavbar(navbar, campeoes);
  menorQueCampeoesTitle(navbar, campeoes);
}

const yMaiorQueNavbar = (navbar, campeoes) => {
  document.addEventListener("scroll", () => {
    if (Canivete.yNow() >= Canivete.elementY(navbar)) {
      if (navbar.style.position !== "fixed") {
        campeoesMarginUp(campeoes, Canivete.elementHeight(navbar));
        navbar.style.position = "fixed";
        navbar.style.background = "none";
        navbar.style.backdropFilter = "blur(10px)";
        navbar.style.boxShadow = "2.7vw 2.7vw 5.5vw rgba(0, 0, 0, 0.16)";
      }
    }
  });
};

const menorQueCampeoesTitle = (navbar, campeoes) => {
  document.addEventListener("scroll", () => {
    if (Canivete.yNow() <= Canivete.elementY(campeoes)) {
      if (navbar.style.position !== "inicial") {
        campeoesMarginDown(campeoes, Canivete.elementHeight(navbar));
        navbar.style.position = "initial";
        navbar.style.background = "#fff";
        navbar.style.boxShadow = "none";
      }
    }
  });
};

const campeoesMarginUp = (campeoes, navbarHeight) => {
  let paddingTop = 0;
  while (paddingTop < navbarHeight) {
    paddingTop++;
    campeoes.style.paddingTop = `${paddingTop}px`;
  }
};
const campeoesMarginDown = (campeoes, navbarHeight) => {
  let paddingTop = navbarHeight;

  while (paddingTop > 0) {
    paddingTop--;
    campeoes.style.paddingTop = `${paddingTop}px`;
  }
};
