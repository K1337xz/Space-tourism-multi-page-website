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
			//add active class to active destination
			for (let x = 0; x < destinationNav.length; x++) {
				if (destinationNav[x].classList.contains("active")) {
					destinationNav[x].classList.remove("active");
				}
			}
			destinationNav[i].classList.add("active");
			const data = await loadData();
			const destination = data.destinations;
			let nameofClick = destinationNav[i].firstChild.textContent;

			//change content after click
			for (let i = 0; i < destination.length; i++) {
				if (nameofClick === destination[i].name) {
					destinatioName.textContent = destination[i].name;
					distance.textContent = destination[i].distance;
					timeLeft.textContent = destination[i].travel;
					destinationDescribe.textContent =
						destination[i].description;
					destinationImage.src = destination[i].images.webp;
				}
			}
		} catch (e) {
			console.log("errror");
			console.log(e);
		}
	});
}
//crew meber pick
