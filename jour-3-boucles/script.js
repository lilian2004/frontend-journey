console.log("=== JOUR 3 : Boucles ===");

// EXERCICE 1 : For basique (1 à 10)
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// EXERCICE 2 : Nombres pairs (1 à 20)
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// EXERCICE 3 : Continue (saute multiples de 3)
for (let i = 1; i <= 10; i++) {
    if (i % 3 == 0) {
        continue;
    }
    console.log(i);
}

// EXERCICE 4 : Break (arrête à 7)
for (let i = 1; i <= 20; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);
}

// EXERCICE 5 : Boucles imbriquées (table multiplication)
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}