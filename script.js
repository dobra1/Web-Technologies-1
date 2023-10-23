
function validateForm() {
    var nevInput = document.getElementById("nev");
    var szuletesiIdoInput = document.getElementById("szuletesi_ido");
    var telefonszamInput = document.getElementById("Telefonszám");

    var hibauzenet = "Kérlek töltsd ki a következő mezőket megfelelően:\n";

    if (!nevInput.checkValidity()) {
        nevInput.style.border = "2px solid red";
        hibauzenet += "- Név\n";
    }

    if (!szuletesiIdoInput.checkValidity()) {
        szuletesiIdoInput.style.border = "2px solid red";
        hibauzenet += "- Születési idő\n";
    }

    if (!telefonszamInput.checkValidity()) {
        telefonszamInput.style.border = "2px solid red";
        hibauzenet += "- Telefonszám\n";
    }

    if (hibauzenet !== "Kérlek töltsd ki a következő mezőket megfelelően:\n") {
        alert(hibauzenet);
    } else {
        // Minden mező megfelelően van kitöltve, az elküldés folytatható
        alert("Az űrlap adatai megfelelőek. Elküldés megtörtént.");
    }
}

/*animacio*/
// JavaScript kód itt

// Példa: ha dinamikusan szeretnénk irányítani az animációt
const heartIcon = document.getElementById('heart');

// Az animáció elindítása
function startPulsation() {
    heartIcon.style.animation = 'pulse 1s infinite';
}

// Az animáció leállítása
function stopPulsation() {
    heartIcon.style.animation = 'none';

}
var eredetiSzoveg = "Itt írd le a sürgősségi ellátás leírását vagy további információkat";

function enableEdit(element) {
    var leiras = element;
    var mezo = document.getElementById("surgossagiMezo");

    if (mezo.style.display === "none") {
        leiras.style.display = "none";
        mezo.style.display = "block";
        mezo.value = eredetiSzoveg;
        mezo.focus();
    }
}

function updateText(input) {
    eredetiSzoveg = input.value;
}

/*history*/
var eredetiSzoveg; // Deklaráljuk az eredetiSzoveg változót

function updateText(input) {
    eredetiSzoveg = input.value; // Az értékadás most megfelelően működik
}

$(document).ready(function () {
    $(".mutat-button").click(function () {
        const sectionToShow = $(this).data("section");
        $(".szoveges-resz .section").hide();
        $(".szoveges-resz .section." + sectionToShow).show();
        $(".szoveges-resz").show();
    });
});



/*Animacio*/
function startPulsation() {
    heartIcon.classList.add('pulzalo');
}

function stopPulsation() {
    heartIcon.classList.remove('pulzalo');
}
/*Tortenetek gomb*/
// Először létrehozod a stílus elemet
var style = document.createElement('style');
style.type = 'text/css';


// Hozzáadod a CSS szabályokat a stílus elemhez
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

// Hozzáadod a stílus elemet a dokumentum fejlécéhez
document.head.appendChild(style);

/* SErvice osztaly alert */

function elkuld(gomb) {
    var parent = gomb.parentElement; // Az aktuális sor szülő elemének kiválasztása
    var leirasMezo = parent.querySelector(".searcher"); // Keresse meg a leírás mezőt a sorban
    var id = leirasMezo.getAttribute("id").replace("Mezo", ""); // Az id érték kivágása

    if (leirasMezo.value === "") {
        alert("Kérjük, írja le a " + id + " leírását!");
    } else {
        // Elküldés megtörténik, jelenítse meg az értesítést
        alert("Üzenet elküldve");
        // Törölje ki a leírás mező tartalmát
        leirasMezo.value = "";
    }
}





