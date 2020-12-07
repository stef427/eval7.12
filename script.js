// Exercice 1 :
// • Déclarer 3 variables, nom prénom et âge.
// • Assignez leur chacun une valeur via une zone de saisie (Prompt
// ou Input suivant si vous utiliser ou non une interface web)
// • Afficher sous forme de phrase ces 3 variables. (Ex : Je
// m’appelle Jean Dupont et j’ai 53 ans.)


// let nom = prompt("entrez votre prenom");
// let prenom = prompt("entrez votre nom");
// let age = Number(prompt("quel est votre age"));
// console.log("je m'appelle" + " " + prenom + " " + nom + " " + "j'ai" + " " + age + " " + "ans")
//     //ou console.log(`je m'appelle ${prenom} ${nom} j'ai ${age} ans`)


// let nom = document.querySelector("#name").value;
// let prenom = document.querySelector("#surname").value;
// let age = document.querySelector("#age").value;

// addEventListener("valider", e => {
//             (
//                 function name(params) {

//                 }
//             )
//         }

// console.log(nom + prenom + age)



// Exercice 2 :
// Vous avez toujours eu envie d’être Medium ? Cet exercice est donc fait
// pour vous !
// • Ecrivez l’heure et les minutes que vous voulez.
// • Ecrivez un algorithme qui écrira l’heure qu’il sera, une minute
// plus tard (Ex : 21h53 affiche 21h54)
// • Puis faites en un second en gérant les secondes et afficher
// l’heure qu’il sera une seconde plus tard
// Attention aux éventuels pièges .






// Exercice 3 :
// Ecrire un algorithme qui demande un nombre compris entre 10 et 20,
// jusqu’à ce que la réponse convienne. En cas de réponse supérieure à
// 20, on fera apparaître un message : « Plus petit ! », et inversement,
// « Plus grand ! » si le nombre est inférieur à 10.
// let chiffre = Number(prompt("entrez un chiffre entre 10 et 20 "));

// if (chiffre < 10) {
//     console.log("plus grand ")
// } else if (chiffre > 20) {
//     console.log("plus petit");
// }



// Exercice 4 :
// Ecrire un algorithme qui demande un nombre de départ, et qui calcule
// sa factorielle.
// NB : la factorielle de 8, notée 8 ! vaut
// 1 x 2 x 3 x 4 x 5 x 6 x 7 x 8


let x = 10;
for (let i = 0; i < x; i++) {
    console.log(x * i * x);

}