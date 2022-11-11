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

//load data fromjson file
async function loadData() {
	const response = await fetch("data.json");
	return response.json();
}
//pick destination

const destinationNav = document.querySelectorAll(".destinationBar li");

for (let i = 0; i < destinationNav.length; i++) {
	destinationNav[i].addEventListener("click", async () => {
		try {
			const data = await loadData();
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
const crewNav = document.querySelectorAll(".dotsNav li");

for (let z = 0; z < crewNav.length; z++) {
	crewNav[z].addEventListener("click", async () => {
		try {
			const data = await loadData();
			const role = document.querySelector(".role p");
			const crewName = document.querySelector(".crewBio h1");
			const crewDescription = document.querySelector(".crewBio p");
			const crewImage = document.querySelector(".activeMember");
			const crewData = data.crew;
			let clickMember = crewNav[z].firstChild.textContent;
			console.log(clickMember);
			for (let i = 0; i < crewData.length; i++) {
				if (clickMember === crewData[i].name) {
					crewName.textContent = crewData[i].name;
					role.textContent = crewData[i].role;
					crewDescription.textContent = crewData[i].bio;
					crewImage.src = crewData[i].images.webp;
				}
			}
			for (let x = 0; x < crewNav.length; x++) {
				if (crewNav[x].classList.contains("active")) {
					crewNav[x].classList.remove("active");
				}
				crewNav[z].classList.add("active");
			}
		} catch (e) {
			console.log("error");
			console.log(e);
		}
	});
}

//pick technology

const numberNav = document.querySelectorAll(".numberNav li");

for (let y = 0; y < numberNav.length; y++) {
	numberNav[y].addEventListener("click", async (e) => {
		try {
			e.preventDefault();
			const data = await loadData();
			const technologyData = data.technology;
			const terminology = document.querySelector(".techMainContent h1");
			const techDescription = document.querySelector(".techDescription");
			console.log(numberNav[y].dataset.type);
			for (let i = 0; i < technologyData.length; i++) {
				if (1 === 1) {
				}
			}
		} catch (e) {
			console.log("error");
			console.log(e);
		}
	});
}
