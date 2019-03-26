/*
* Contrôler l'aspect actif/inactif du bouton burger
*
*/
(function () { //IIFE

    //Permet d'attribuer ou non la classe estActif aux éléments
    var menu = document.querySelectorAll(".boutonBurger");
    var nbBoutons = menu.length;

    for (var i = 0; i < nbBoutons; i++) {
        //Mettre un gestionnaire d'événement pour attribuer/enlever la classe estActif
        menu[i].addEventListener("click", function () {
            this.classList.toggle("estActif");
        }, false);

    }

    var leCheckBox = document.querySelector("input");
    var lesBoutons = document.querySelectorAll(".menu a");
    var nbBa = lesBoutons.length;
    for (var i = 0; i < nbBa; i++) {

        lesBoutons[i].addEventListener("click", function (evt) {

            leCheckBox.checked = false;
            fermerBurger();

        }, false);
    }

/*
*
*
*/
    function fermerBurger() {

        var menu = document.querySelectorAll(".boutonBurger");
        var nbBoutons = menu.length;

        for (var i = 0; i < nbBoutons; i++) {
            if (menu[i].classList.contains("estActif")) {
                menu[i].classList.remove("estActif");
            }
        }
    }

})(); //Fin IIFE
