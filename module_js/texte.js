var rotationTexte = function(el, rotation, temps) {
  this.rotation = rotation;
  this.el = el;
  this.numBoucle = 0;
  this.temps = parseInt(temps, 10) || 5000;
  this.txt = '';
  this.tick();
  this.effacer = false;
};

/*
* fonction qui permet de faire une rotation du texte 
* ajoute le texte et la class et "efface" le texte 
*/
rotationTexte.prototype.tick = function() {
  var i = this.numBoucle % this.rotation.length;
  var fullTxt = this.rotation[i];

  if (this.effacer) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.effacer) { delta /= 2; }

  if (!this.effacer && this.txt === fullTxt) {
    delta = this.temps;
    this.effacer = true;
  } else if (this.effacer && this.txt === '') {
    this.effacer = false;
    this.numBoucle++;
    delta = 200;
  }

/*
* Fonction qui permet de savoir si le temps est écoulé ou pas
*
*/
  setTimeout(function() {
    that.tick();
  }, delta);
};

/*
* fonction qui s'exécute au moment de l'ouverture de la page
* permet de faire une rotation du texte selon le temps
*/
window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var rotation = elements[i].getAttribute('data-rotate');
    var temps = elements[i].getAttribute('data-temps');
    if (rotation) {
      new rotationTexte(elements[i], JSON.parse(rotation), temps);
    }
  }
  // ajoute le CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
