/* =========================
   NVN SCHOOL - JAVASCRIPT
   ========================= */


/* YEAR */

document.getElementById("year").textContent = new Date().getFullYear();


/* HEADER ON SCROLL */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {
    header.style.position = "fixed";
    header.style.background = "rgba(17,17,15,.92)";
    header.style.backdropFilter = "blur(15px)";
  } else {
    header.style.position = "absolute";
    header.style.background = "transparent";
    header.style.backdropFilter = "none";
  }

});


/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");

let menuOpen = false;

menuBtn.addEventListener("click", () => {

  menuOpen = !menuOpen;

  if (menuOpen) {

    document.body.style.overflow = "hidden";

    const menu = document.createElement("div");

    menu.id = "mobileMenu";

    menu.innerHTML = `
      <div class="mobile-menu-inner">

        <button id="closeMenu">×</button>

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#academics">Academics</a>
        <a href="#life">School Life</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>

      </div>
    `;

    document.body.appendChild(menu);

    const style = document.createElement("style");

    style.innerHTML = `

      #mobileMenu {
        position: fixed;
        inset: 0;
        z-index: 100;
        background: #11110f;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: menuIn .3s ease;
      }

      .mobile-menu-inner {
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 22px;
      }

      .mobile-menu-inner a {
        font-family: "Playfair Display", serif;
        font-size: 42px;
      }

      #closeMenu {
        position: absolute;
        top: 25px;
        right: 30px;
        background: none;
        border: 0;
        color: white;
        font-size: 42px;
        cursor: pointer;
      }

      @keyframes menuIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

    `;

    document.head.appendChild(style);

    document.getElementById("closeMenu").onclick = closeMobileMenu;

    document.querySelectorAll("#mobileMenu a").forEach(link => {
      link.addEventListener("click", closeMobileMenu);
    });

  }

});


function closeMobileMenu() {

  const menu = document.getElementById("mobileMenu");

  if (menu) {
    menu.remove();
  }

  document.body.style.overflow = "";
  menuOpen = false;

}


/* SIMPLE REVEAL ANIMATION */

const revealElements = document.querySelectorAll(
  ".intro-grid, .feature-card, .life-content, .gallery-item, .contact-left, .contact-right"
);

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  },
  {
    threshold: .12
  }
);


revealElements.forEach(element => {

  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition = "opacity .8s ease, transform .8s ease";

  observer.observe(element);

});


/* SMOOTH NAVIGATION */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});
