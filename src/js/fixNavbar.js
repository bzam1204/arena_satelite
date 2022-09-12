export default function fixNavbar() {
  const navbar = document.querySelector("[data-navbar]");
  const campeoes = document.querySelector("[data-campeoes]");
  document.addEventListener("scroll", () => {
    let heightNavbar = navbar.getBoundingClientRect().top + window.scrollY;
    let heightCampeoes = campeoes.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY > heightNavbar) {
      if (navbar.style.position !== "fixed") {
        navbar.style.position = "fixed";
        navbar.style.background = "none"
        navbar.style.backdropFilter = 'blur(10px)'
        navbar.style.boxShadow = "2.7vw 2.7vw 5.5vw rgba(0, 0, 0, 0.16)";
        
      }
    } else if (window.scrollY <= heightCampeoes) {
      if (navbar.style.position !== "inicial") {
        navbar.style.position = "initial";
        navbar.style.background = "#fff";
        navbar.style.boxShadow = "none";
      }
    }
  });
}
