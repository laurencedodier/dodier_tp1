var scroll = window.requestAnimationFrame;

var elementsToShow = document.querySelectorAll(".show-on-scroll");

/*
* Fonction qui permet d'afficher et d'enlever la classe active sur un élément
*
*/
function loop() {
	elementsToShow.forEach(element => {
		if (isElementInViewport(element)) {
			element.classList.add("is-visible");
		} else {
			element.classList.remove("is-visible");
		}
	});
	scroll(loop);
}

/*
* Fonction qui permet de détecter la hauteur du client afin de faire afficher les projets
*
*/
function isElementInViewport(el) {
	var rect = el.getBoundingClientRect();
	return (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >=
			(window.innerHeight || document.documentElement.clientHeight) &&
			rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
		(rect.top >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
	);
}

loop();
