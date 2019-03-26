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
    var oImg = document.querySelectorAll("#img1");

    document.querySelector("#presentation").style.display="block";
    switch(x){
        case "1gauche":
            titre.innerHTML = "Le fol Espoir";
            sousTitre.innerHTML = "Production Web";
            parag1.innerHTML = "Dans ce projet d'équipe nous devions faire la refonte du site internet du département Arts et Lettres du Collège de Maissoneuve.";
            parag2.innerHTML = "Je m'occupais du design et du côté front-end du site web.";
            parag3.innerHTML = "Lors de scrum, je m'assurais du bon fonctionnement du projet, du progrès de mes collègues, des problèmes ainsi que ce qui restais à réaliser. Nous utilisions la méthode agile sous forme de scrum";
            parag4.innerHTML = "Technologie utilisée : HTML5, CSS3, JavaScript, PHP, phpMyAdmin, PhotoShop, Illustrator ";

            oImg[0].src = "../img/folEspoire/web/accueil.jpg";
            oImg[1].src = "../img/folEspoire/web/menu.png";
            oImg[2].src = "../img/folEspoire/web/roue.png";
            oImg[3].src = "";
            oImg[4].src = "";
           

            oImg[5].src = "../img/folEspoire/mobile/accueil.png";
            oImg[6].src = "../img/folEspoire/mobile/menu.png";            
            oImg[7].src = "../img/folEspoire/mobile/roue.png";
            oImg[8].src = "";

            break;
            
        case "2gauche":
            titre.innerHTML = "Bilboquet Laurier";
            sousTitre.innerHTML = "Design d'interface";
            parag1.innerHTML = "Lors de mon cours de Desgin d'interface à ma 3e session au cégep, nous devions refaire le design d'un site internet qui manquait d'amour.";
            parag2.innerHTML = "Durant l'été j'avais eu l'opportunité de faire un site web pour une compagnie de crème glacée. Malheureusment je ne connaissais pas toute les techniques afin que celui-ci soit de top qualité. J'ai donc décidé de lui refaire une refonte total lors de mon cours.";
            parag3.innerHTML = "Je travaillais seul durant la refont de ce projet. J'ai réaliser plusieurs tests utilisateurs afin de m'assurer du bon fonctionnement de mon design. Lors de la réalisation j'ai du adapter mon design à la programmation et j'ai décidé d'y ajouter du parallax.";
            parag4.innerHTML = "Technologie utilisée : HTML5, CSS3, JavaScript, PhotoShop, Illustrator ";

            oImg[0].src = "../img/bilbo/design/accueil.png";
            oImg[1].src = "";
            oImg[2].src = "";
            oImg[3].src = "";
            oImg[4].src = "";

            oImg[5].src = "../img/bilbo/design/accueilMobile.png";
            oImg[6].src = "../img/bilbo/design/menu.png";
            oImg[7].src = "../img/bilbo/design/contenue.png";
            oImg[8].src = "";
            
            break;
        
        case "3gauche":
            titre.innerHTML = "Bilboquet Laurier";
            sousTitre.innerHTML = "Propriétaire";
            parag1.innerHTML = "À la fin de ma première année de cégep j'ai eu la chance de faire affaire avec le propriétaire du Bilboquet sur l'avenue Laurier.";
            parag2.innerHTML = "Au courant de l'été, lors de plusieurs rencontre, j'ai fait le design, la réalisation du site web, des ajustements demandé, choisir un hébergeur et le bon fonctionnement de l'instalation de la page web sur l'internet."; 
            parag3.innerHTML = "Malheureusement le site internet n'est pas responsive, mon client ne voulait pas que son site inernet soit responsive.";
            parag4.innerHTML = "Technologie utilisée : HTML5, CSS3, JavaScript, PhotoShop";

            oImg[0].src = "../img/bilbo/Web/accueil.png";
            oImg[1].src = "../img/bilbo/Web/produit.png";
            oImg[2].src = "../img/bilbo/Web/qui.png";
            oImg[3].src = "../img/bilbo/Web/ou.png";

            oImg[4].src = "";
            oImg[5].src = "";
            oImg[6].src = "";
            oImg[7].src = "";
            oImg[8].src = "";
           
            break;
            
        case "1droite":
            titre.innerHTML = "Sphaera ⋄ Site Web";
            sousTitre.innerHTML = "Developpement de jeu";
            parag1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis nunc laoreet, tincidunt dolor vel, tristique lorem. Quisque at sem vitae massa consequat vestibulum sed quis massa. Aliquam convallis mi et lorem fringilla posuere. Proin volutpat, eros id finibus mollis, diam leo porta metus, in sagittis turpis tellus a dui. ";
            parag2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis nunc laoreet, tincidunt dolor vel, tristique lorem. Quisque at sem vitae massa consequat vestibulum sed quis massa. Aliquam convallis mi et lorem fringilla posuere. Proin volutpat, eros id finibus mollis, diam leo porta metus, in sagittis turpis tellus a dui. ";
            parag3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis nunc laoreet, tincidunt dolor vel, tristique lorem. Quisque at sem vitae massa consequat vestibulum sed quis massa. Aliquam convallis mi et lorem fringilla posuere. Proin volutpat, eros id finibus mollis, diam leo porta metus, in sagittis turpis tellus a dui. ";
            parag4.innerHTML = "Technologie utilisée : HTML5, CSS3, JavaScript, PhotoShop";

            oImg[0].src = "../img/WebSphaera/accueilWeb.png";
            oImg[1].src = "../img/WebSphaera/histoire.png";
            oImg[2].src = "../img/WebSphaera/jouabilite.png";
            oImg[3].src = "";
            oImg[4].src = "";

            oImg[5].src = "../img/WebSphaera/accueilMobile.png";
            oImg[6].src = "../img/WebSphaera/menu.png";
            oImg[7].src = "../img/WebSphaera/credit.png";
            oImg[8].src = "";

            break;

        case "2droite":
            titre.innerHTML = "Sphaera ⋄ Jeu";
            sousTitre.innerHTML = "Developpement de jeu";
            parag1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis nunc laoreet, tincidunt dolor vel, tristique lorem. Quisque at sem vitae massa consequat vestibulum sed quis massa. Aliquam convallis mi et lorem fringilla posuere. Proin volutpat, eros id finibus mollis, diam leo porta metus, in sagittis turpis tellus a dui. ";
            parag2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis nunc laoreet, tincidunt dolor vel, tristique lorem. Quisque at sem vitae massa consequat vestibulum sed quis massa. Aliquam convallis mi et lorem fringilla posuere. Proin volutpat, eros id finibus mollis, diam leo porta metus, in sagittis turpis tellus a dui. ";
            parag3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis nunc laoreet, tincidunt dolor vel, tristique lorem. Quisque at sem vitae massa consequat vestibulum sed quis massa. Aliquam convallis mi et lorem fringilla posuere. Proin volutpat, eros id finibus mollis, diam leo porta metus, in sagittis turpis tellus a dui. ";
            parag4.innerHTML = "Technologie utilisée : Unity 3D, C#";
            
            oImg[0].src = "../img/JeuSphaera/debut.png";
            oImg[1].src = "../img/JeuSphaera/instructions.png";
            oImg[2].src = "../img/JeuSphaera/jeuete.png";
            oImg[3].src = "../img/JeuSphaera/jeuhiver1.png";
            oImg[4].src = "../img/JeuSphaera/presentation.png";

            oImg[5].src = "";
            oImg[6].src = "";
            oImg[7].src = "";
            oImg[8].src = "";

            break;
            
        case "3droite":
            titre.innerHTML = "ChickenRun";
            sousTitre.innerHTML = "Assemblage de jeu";
            parag1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis nunc laoreet, tincidunt dolor vel, tristique lorem. Quisque at sem vitae massa consequat vestibulum sed quis massa. Aliquam convallis mi et lorem fringilla posuere. Proin volutpat, eros id finibus mollis, diam leo porta metus, in sagittis turpis tellus a dui. ";
            parag2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis nunc laoreet, tincidunt dolor vel, tristique lorem. Quisque at sem vitae massa consequat vestibulum sed quis massa. Aliquam convallis mi et lorem fringilla posuere. Proin volutpat, eros id finibus mollis, diam leo porta metus, in sagittis turpis tellus a dui. ";
            parag3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis nunc laoreet, tincidunt dolor vel, tristique lorem. Quisque at sem vitae massa consequat vestibulum sed quis massa. Aliquam convallis mi et lorem fringilla posuere. Proin volutpat, eros id finibus mollis, diam leo porta metus, in sagittis turpis tellus a dui. ";
            parag4.innerHTML = "Technologie utilisée : Unity 3D, C#";

            oImg[0].src = "../img/chickenRunScreenshot/accueil.png";
            oImg[1].src = "../img/chickenRunScreenshot/jeu1.png";
            oImg[2].src = "../img/chickenRunScreenshot/jeu2.png";
            oImg[3].src = "../img/chickenRunScreenshot/jeu3.png";
            oImg[4].src = "../img/chickenRunScreenshot/jeu4.png";

            oImg[5].src = "";
            oImg[6].src = "";
            oImg[7].src = "";
            oImg[8].src = "";

            break;
    }

}
   
function fermerProjet(){
    document.querySelector("#presentation").style.display="none";
}