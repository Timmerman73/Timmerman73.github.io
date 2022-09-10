//Wacht tot de website geladen is
window.onload = function() {
// Wanneer er geschrolld wordt activeer de functie
window.onscroll = function() {myFunction()};

// Waar is de navbar
var navbar = document.getElementById("navbar");
var dropcontent = document.getElementsByClassName("dropdown-content")


var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) { // Moet de navbar plakken?
	  // code waardoor de navbar blijft plakken als je ver genoeg scrolld
    navbar.classList.add("sticky");
	// code wardoor de menuknoppen niet kapot gaan
	var i;
	for (i = 0; i < dropcontent.length; i++) {
    dropcontent[i].style.position = "fixed"
	}

	
  } else { // Moet de navbar niet meer plakken
	//code waardoor de navbar niet meer plakt
    navbar.classList.remove("sticky");
	// Fix voor menuknoppen
	var i;
	for (i = 0; i < dropcontent.length; i++) {
    dropcontent[i].style.position = "absolute"
	}
	
  }
}
}