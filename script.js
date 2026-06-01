console.log("=== JOUR 1 : Variables ===");

// EXERCICE 1 : Crée 5 variables

let prenom = "Lilian";  // TON prénom
let age = 21;  // TON âge
let ville = "Paris";  // TA ville
let estDeveloppeur = true;
let taille = 1.80;

console.log(prenom);
console.log(age);
console.log(ville);
console.log(estDeveloppeur);
console.log(taille);

// EXERCICE 2 : Modifie les variables

age = age + 1;
console.log("Nouvel âge :", age);

prenom = "Alice";
console.log("Nouveau prénom :", prenom);

taille = taille + 0.05;
console.log("Nouvelle taille :", taille);

// EXERCICE 3 : Calculs simples

let a = 10;
let b = 3;

console.log("a =", a);
console.log("b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

// EXERCICE 4 : Strings

let nom = "Lilian";
let ageEx4 = 21;

console.log("Je m'appelle " + nom);
console.log("J'ai " + ageEx4 + " ans");
console.log(`Je m'appelle ${nom}`);
console.log(`J'ai ${ageEx4} ans`);
console.log(`Je m'appelle ${nom} et j'ai ${ageEx4} ans`);

// EXERCICE 5 : Types

let text = "Bonjour";
console.log(typeof text);

let nombre = 42;
console.log(typeof nombre);

let estVrai = true;
console.log(typeof estVrai);

let indefini;
console.log(typeof indefini);

// EXERCICE 6 : Conversion

let texteNombre = "25";
let nombreConverti = Number(texteNombre);
console.log(nombreConverti);
console.log(typeof nombreConverti);

let nb = 42;
let texteConverti = String(nb);
console.log(texteConverti);
console.log(typeof texteConverti);

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("hello"));