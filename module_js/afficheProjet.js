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
    var parag4 = document.querySelector(".parag4");
    var oImg = document.querySelector("#img1");

    document.querySelector("#presentation").style.display="block";
    switch(x){
        case "1gauche":
            titre.innerHTML = "Le fol Espoir";
            sousTitre.innerHTML = "Production Web";
            parag1.innerHTML = "Dans ce projet d'équipe nous devions faire la refonte du site internet du département Arts et Lettres du Collège de Maissoneuve.";
            parag2.innerHTML = "Je m'occupais du design et du côté front-end du site web.";
            parag3.innerHTML = "Lors de scrum, je m'assurais du bon fonctionnement du projet, du progrès de mes collègues, des problèmes ainsi que ce qui restais à réaliser. Nous utilisions la méthode agile sous forme de scrum";
            parag4.innerHTML = "Technologie utilisée : HTML5, CSS3, JavaScript, PHP, phpMyAdmin, PhotoShop, Illustrator ";

           // oImg.src = oImgLondres;
            break;
            
        case "2gauche":
            titre.innerHTML = "Bilboquet Laurier";
            sousTitre.innerHTML = "Design d'interface";
            parag1.innerHTML = "Lors de mon cours de Desgin d'interface à ma 3e session au cégep, nous devions refaire le design d'un site internet qui manquait d'amour.";
            parag2.innerHTML = "Durant l'été j'avais eu l'opportunité de faire un site web pour une compagnie de crème glacée. Malheureusment je ne connaissais pas toute les techniques afin que celui-ci soit de top qualité. J'ai donc décidé de lui refaire une refonte total lors de mon cours.";
            parag3.innerHTML = "Je travaillais seul durant la refont de ce projet. J'ai réaliser plusieurs tests utilisateurs afin de m'assurer du bon fonctionnement de mon design. Lors de la réalisation j'ai du adapter mon design à la programmation et j'ai décidé d'y ajouter du parallax.";
            parag4.innerHTML = "Technologie utilisée : HTML5, CSS3, JavaScript, PhotoShop, Illustrator ";
            
            break;
        
        case "3gauche":
            titre.innerHTML = "Bilboquet Laurier";
            sousTitre.innerHTML = "Propriétaire";
            parag1.innerHTML = "À la fin de ma première année de cégep j'ai eu la chance de faire affaire avec le propriétaire du Bilboquet sur l'avenue Laurier.";
            parag2.innerHTML = "Au courant de l'été, lors de plusieurs rencontre, j'ai fait le design, la réalisation du site web, des ajustements demandé, choisir un hébergeur et le bon fonctionnement de l'instalation de la page web sur l'internet."; 
            parag3.innerHTML = "Malheureusement le site internet n'est pas responsive, mon client ne voulait pas que son site inernet soit responsive.";
            parag4.innerHTML = "Technologie utilisée : HTML5, CSS3, JavaScript, PhotoShop";

           // oImg.src = oImgLondres;
            break;
            
        case "1droite":
            titre.innerHTML = "Sphaera ⋄ Site Web";
            sousTitre.innerHTML = "Developpement de jeu";
            parag1.innerHTML = "parag1";
            parag2.innerHTML = "parag2";
            parag3.innerHTML = "parag3";
            parag4.innerHTML = "Technologie utilisée : HTML5, CSS3, JavaScript, PhotoShop";
            break;

        case "2droite":
            titre.innerHTML = "Sphaera ⋄ Jeu";
            sousTitre.innerHTML = "Developpement de jeu";
            parag1.innerHTML = "parag1";
            parag2.innerHTML = "parag2";
            parag3.innerHTML = "parag3";
            parag4.innerHTML = "Technologie utilisée : Unity 3D, C#";
            
           // oImg.src = oImgLondres;
            break;
            
        case "3droite":
            titre.innerHTML = "ChickenRun";
            sousTitre.innerHTML = "Assemblage de jeu";
            parag1.innerHTML = "parag1";
            parag2.innerHTML = "parag2";
            parag3.innerHTML = "parag3";
            parag4.innerHTML = "Technologie utilisée : Unity 3D, C#";
            break;
    }

}
   
function fermerProjet(){
    document.querySelector("#presentation").style.display="none";
}