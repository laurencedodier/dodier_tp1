(function(){
    var projet = document.querySelectorAll(".projet");

    projet[0].addEventListener("click", function(){afficheProjet("1gauche")});
    projet[1].addEventListener("click", function(){afficheProjet("2gauche")});
    projet[2].addEventListener("click", function(){afficheProjet("3gauche")});

    projet[3].addEventListener("click", function(){afficheProjet("1droite")});
    projet[4].addEventListener("click", function(){afficheProjet("2droite")});
    projet[5].addEventListener("click", function(){afficheProjet("3droite")});

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
        case "1gauche":
            titre.innerHTML = "Le fol Espoir";
            sousTitre.innerHTML = "Production Web";
            parag1.innerHTML = "parag1";
            parag2.innerHTML = "parag2";
            parag3.innerHTML = "parag3";
            
           // oImg.src = oImgLondres;
            break;
            
        case "2gauche":
            titre.innerHTML = "Bilboquet Laurier";
            sousTitre.innerHTML = "Design d'interface";
            parag1.innerHTML = "parag1";
            parag2.innerHTML = "parag2";
            parag3.innerHTML = "parag3";
            break;
        
        case "3gauche":
            titre.innerHTML = "Bilboquet Laurier";
            sousTitre.innerHTML = "Propriétaire";
            parag1.innerHTML = "parag1";
            parag2.innerHTML = "parag2"; 
            parag3.innerHTML = "parag3";
            
           // oImg.src = oImgLondres;
            break;
            
        case "1droite":
            titre.innerHTML = "Sphaera ⋄ Site Web";
            sousTitre.innerHTML = "Developpement de jeu";
            parag1.innerHTML = "parag1";
            parag2.innerHTML = "parag2";
            parag3.innerHTML = "parag3";
            break;

        case "2droite":
            titre.innerHTML = "Sphaera ⋄ Jeu";
            sousTitre.innerHTML = "Developpement de jeu";
            parag1.innerHTML = "parag1";
            parag2.innerHTML = "parag2";
            parag3.innerHTML = "parag3";
            
           // oImg.src = oImgLondres;
            break;
            
        case "3droite":
            titre.innerHTML = "ChickenRun";
            sousTitre.innerHTML = "Assemblage de jeu";
            parag1.innerHTML = "parag1";
            parag2.innerHTML = "parag2";
            parag3.innerHTML = "parag3";
            break;
    }

}

function fermerProjet(){
    document.querySelector("#presentation").style.display="none";
}