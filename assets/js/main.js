document.querySelector(".siteBar-btn").addEventListener("click", function (event) {
	event.preventDefault();
	this.classList.toggle("active");
	document.querySelector(".mobile-menu").classList.toggle("siteBar");
	document.querySelector("body").classList.toggle("overflow-hidden");
});
