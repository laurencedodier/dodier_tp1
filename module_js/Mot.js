(function() {//IIFE
	//----------On utilise un mode de programmation strict
	"use strict";
    console.log('Function iife');
	/**
	  * Classe permettant de créer et d'afficher des mots
	  * @param {Number}      posX            - position du mot sur l'axe des X
	  * @param {Number}      posY            - position du mot sur l'axe des Y
	  * @param {String}      classeCSS       - chaîne indiquant la classe CSS à attribuer
	  * @param {HTMLElement} conteneurParent - balise HTML pour afficher les mots animés
	  * @param {Array}       lesMots         - Tableau des différents mots à afficher au hasard
	  */ 
	function Mot(posX, posY, lesMots, classeCSS, conteneurParent ) {
		//Récupérer les valeurs passées en paramètres et les affecter à des propriétés directes de l'instance
        this.posX = posX;
        this.posY = posY;
        this.classeCSS = classeCSS;
        this.conteneurParent = conteneurParent;
        this.lesMots = lesMots;
		//Appeler la méthode d'instance pour créer et afficher le mot
        this.creerMot();
        console.log(this.posX , this.posY);
	 }

	 //Créer la méthode creerMot pour un objet de type Mot

	Mot.prototype.creerMot = function() {
        console.log('Mot.prototype.CreerMot');
        //Le mot est un élément HTML  <p>
		var leMot = document.createElement("p");
        
        leMot.style.left = this.posX + "px";
        console.log("left " + this.posX);
        leMot.style.top = this.posY + "px";
        console.log("top " + this.posY);
        leMot.innerHTML = this.lesMots;
        leMot.classList.add(this.classeCSS);
        
        //Afficher l'élément  <div>, dans son conteneur parent
		this.conteneurParent.appendChild(leMot);	
    }
	//Comme la fonction IIFE est anonyme,  ses variables, fonctions ou autres ne seront pas accessibles de l'extérieur
	//Nous devons donc passer la "classe" Mot à l'objet HTML window comme propriété globale de notre application Web...
    console.log("window.Mot :", window.Mot);
	
	window.Mot = Mot;

})();//Fin IIFE