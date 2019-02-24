(function() {//IIFE
	//----------On utilise un mode de programmation strict
	"use strict";
	console.log('Function application');
	var laSection;//Balise HTML dans laquelle on va mettre des carrés

	//On affecte le "mousedown" sur la section dès que la page HTML est chargée
	window.addEventListener("load", function() {
		//Identifier la section
		laSection = document.querySelector("section");
		console.log(laSection);
		
		//Lors d'un "mousedown" dans la section, on va instancier des mots...
		laSection.addEventListener("mousedown", mettreDesMots, false);


	}, false);
	
	function mettreDesMots(evt) {
		console.log(evt);
		//Identifier où le mousedown a eu lieu dans la section
		var posX = evt.clientX - 110;
		var posY = evt.clientY - 180;
		
		var lesMots = ["Perseverance", "Déterminé", "Curieuse", "Ouverte d'esprit", "Empathique", "Ambitieuse", "Autonome", "Humaine", "Leader", "Minutieuse", "Positive", "Souriante"];
        
        var motHasard = lesMots[Math.floor(Math.random() * lesMots.length)];
			
		//Mettre un mot à cet endroit.....
		//function Mot(posX, posY, classeCSS, conteneurParent, lesMots) {

		var unMot = new Mot(posX, posY, motHasard, "motAnim", laSection);
	}

})();//Fin IIFE