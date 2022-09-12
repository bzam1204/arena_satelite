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
    const navbar = document.querySelector("[data-navbar]");
    const divDestino = document.querySelector(`[data-${dataDestino}]`);
    let navbarHeight = navbar.getBoundingClientRect().height;
    let y = divDestino.getBoundingClientRect().top - navbarHeight;
    window.scroll({
      top: y,
      behavior: "smooth",
    });
  });
}
