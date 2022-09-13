export default class Canivete {
  static getElementByDataAttribute(arrayOfdataAttibute) {
    let elements = [];
    arrayOfdataAttibute.forEach((dataAttibute) => {
      elements.push(document.querySelector(`[data-${dataAttibute}]`));
      console.log(document.querySelector(`[data-${dataAttibute}]`));
    });
    return elements;
  }

  static yNow() {
    return window.scrollY;
  }

  static elementY('') {

  }
}
export default function fixNavbar() {
  const navbar = document.querySelector("[data-navbar]");
  const campeoes = document.querySelector("[data-campeoes]");
  const titleCampeoes = document.querySelector("[data-campeoes_title]");

  document.addEventListener("scroll", () => {
    let heightNavbar = navbar.getBoundingClientRect().height;
    let topNavbar = navbar.getBoundingClientRect().top + window.scrollY;
    let topCampeoes = campeoes.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY > topNavbar) {
      if (navbar.style.position !== "fixed") {
        navbar.style.position = "fixed";
        navbar.style.background = "none";
        navbar.style.backdropFilter = "blur(10px)";
        navbar.style.boxShadow = "2.7vw 2.7vw 5.5vw rgba(0, 0, 0, 0.16)";
      }
    } else if (window.scrollY <= topCampeoes - heightNavbar) {
      if (navbar.style.position !== "inicial") {
        navbar.style.position = "initial";
        navbar.style.background = "#fff";
        navbar.style.boxShadow = "none";
      }
    }
  });
  //   animationCampeoesUp(campeoes, navbar.getBoundingClientRect().height);
  //   animationCampeoesDown(
  //     campeoes,
  //     navbar.getBoundingClientRect().height,
  //     titleCampeoes
  //   );
}

// function animationCampeoesUp(campeoes, navbarHeight) {
//   document.addEventListener("scroll", () => {
//     if (window.scrollY > campeoes.getBoundingClientRect.top + navbarHeight) {
//       let paddingTop = 0;
//       while (paddingTop < navbarHeight) {
//         paddingTop++;
//         campeoes.style.paddingTop = `${paddingTop}px`;
//         console.log(paddingTop);
//       }
//     }
//   });
// }

// function animationCampeoesDown(campeoes, navbarHeight, titleCampeoes) {
//   document.addEventListener("scroll", () => {
//     if (window.scrollY < titleCampeoes.getBoundingClientRect().top) {
//       console.log("você está vendo em cima dos 'campeões'");
//       if (campeoes.style.paddingTop == `${navbarHeight}px`) {
//         let paddingTop = navbarHeight.parseInt();

//         while (paddingTop > 0) {
//           paddingTop--;
//           campeoes.style.paddingTop = `${paddingTop}px`;
//           console.log(paddingTop);
//         }
//       }
//     }
//   });
// }
