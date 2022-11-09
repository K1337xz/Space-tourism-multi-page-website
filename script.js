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

//pick destination
async function loadData() {
	const response = await fetch("data.json");
	return response.json();
}

const destinationNav = document.querySelectorAll(".destinationBar li");

for (let i = 0; i < destinationNav.length; i++) {
	destinationNav[i].addEventListener("click", async () => {
		try {
			const destinatioName = document.querySelector(".nameofPlanet");
			const destinationDescribe =
				document.querySelector(".descriebPlanet");
			const distance = document.querySelector(".distanceInner");
			const timeLeft = document.querySelector(".timeInner");
			const destinationImage =
				document.querySelector(".activeDestination");

			const data = await loadData();
			const destination = data.destinations;
			if (destinationNav[i].firstChild.textContent === `Mars`) {
				const result = destination.filter((x) => x.name === "Moon");
				console.log(result.name);
			}
		} catch (e) {
			console.log("errror");
			console.log(e);
		}
	});
}
console.log(destinationNav);
