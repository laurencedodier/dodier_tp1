(function(){
    var projet = document.querySelectorAll(".projet");

    projet[0].addEventListener("click", function(){afficheProjet("devJeu")});
    projet[1].addEventListener("click", function(){afficheProjet("progWeb")});

    var fermer = document.querySelector(".fermer");
    fermer.addEventListener("click", function(){fermerProjet()});


})()

function afficheProjet(x){
    var titre = document.querySelector(".titre");
    var sousTitre = document.querySelector(".sousTitre");
    var parag1 = document.querySelector(".parag1");
    var parag2 = document.querySelector(".parag2");
    var parag3 = document.querySelector(".parag3");
    var oImg = document.querySelector("#img1");

    document.querySelector("#presentation").style.display="block";
    switch(x){
        case "devJeu":
            titre.innerHTML = "devJeu";
            sousTitre.innerHTML = "sousTitre";
            parag1.innerHTML = "parag1";
            parag2.innerHTML = "parag2";
            parag3.innerHTML = "parag3";
            
           // oImg.src = oImgLondres;
            break;
            
        case "progWeb":
            titre.innerHTML = "progWeb";
            sousTitre.innerHTML = "sousTitre";
            parag1.innerHTML = "parag1";
            parag2.innerHTML = "parag2";
            parag3.innerHTML = "parag3";
            break;
    }

}

function fermerProjet(){
    document.querySelector("#presentation").style.display="none";
}