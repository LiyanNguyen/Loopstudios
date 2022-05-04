let MobileMenu = document.querySelector("#MobileMenu");
let mobileMenuToggle = document.querySelector("#mobileMenuToggle");
let closeMobileMenu = document.querySelector("#closeMobileMenu");

mobileMenuToggle.onclick = () => {
	MobileMenu.classList.add("translateLeft");
};

closeMobileMenu.onclick = () => {
  MobileMenu.classList.remove("translateLeft");
};