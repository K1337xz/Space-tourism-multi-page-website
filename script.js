//openMobileMenu & colesMobile
const openMobile = document.querySelector(".openMobile");
const closeMobile = document.querySelector(".closeMobile");
const navItem = document.querySelector(".navItems");

openMobile.addEventListener("click", () => {
	navItem.style.width = `69%`;
	openMobile.style.display = `none`;
});

closeMobile.addEventListener("click", () => {
	navItem.style.width = ``;
	openMobile.style.display = `block`;
});
