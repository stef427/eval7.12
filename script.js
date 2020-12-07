// // Exercice 1 :
// // • Déclarer 3 variables, nom prénom et âge.
// // • Assignez leur chacun une valeur via une zone de saisie (Prompt
// // ou Input suivant si vous utiliser ou non une interface web)
// // • Afficher sous forme de phrase ces 3 variables. (Ex : Je
// // m’appelle Jean Dupont et j’ai 53 ans.)


// // let nom = prompt("entrez votre prenom");
// // let prenom = prompt("entrez votre nom");
// // let age = Number(prompt("quel est votre age"));
// // console.log("je m'appelle" + " " + prenom + " " + nom + " " + "j'ai" + " " + age + " " + "ans")
// //     //ou console.log(`je m'appelle ${prenom} ${nom} j'ai ${age} ans`)


// // let nom = document.querySelector("#name").value;
// // let prenom = document.querySelector("#surname").value;
// // let age = document.querySelector("#age").value;

// // addEventListener("valider", e => {
// //             (
// //                 function name(params) {

// //                 }
// //             )
// //         }

// // console.log(nom + prenom + age)



// // Exercice 2 :
// // Vous avez toujours eu envie d’être Medium ? Cet exercice est donc fait
// // pour vous !
// // • Ecrivez l’heure et les minutes que vous voulez.
// // • Ecrivez un algorithme qui écrira l’heure qu’il sera, une minute
// // plus tard (Ex : 21h53 affiche 21h54)
// // • Puis faites en un second en gérant les secondes et afficher
// // l’heure qu’il sera une seconde plus tard
// // Attention aux éventuels pièges .






// // Exercice 3 :
// // Ecrire un algorithme qui demande un nombre compris entre 10 et 20,
// // jusqu’à ce que la réponse convienne. En cas de réponse supérieure à
// // 20, on fera apparaître un message : « Plus petit ! », et inversement,
// // « Plus grand ! » si le nombre est inférieur à 10.
// // let chiffre = Number(prompt("entrez un chiffre entre 10 et 20 "));

// if (chiffre < 10) {
//     console.log("plus grand ")
// } else if (chiffre > 20) {
//     console.log("plus petit");
// }



// // Exercice 4 :
// // Ecrire un algorithme qui demande un nombre de départ, et qui calcule
// // sa factorielle.
// // NB : la factorielle de 8, notée 8 ! vaut
// // 1 x 2 x 3 x 4 x 5 x 6 x 7 x 8


// let x = Number(prompt("entrez une valeur "))
// let fact = 1
// for (let i = 1; i <= x; i++) {
//     fact = fact * i
//     console.log(fact)
// }



//Exercice 5:Toujours  à  partir  de  deux  tableaux  précédemment  saisis,  écrivez  un algorithme qui calcule
// le schtroumpf des deux tableaux. Pour calculer le schtroumpf, il faut multiplier chaque élément du tableau 1 par 
//chaque élément du tableau 2, et additionner le tout. Par exemple si l'on a:Tableau 1:[4,8,7,1,2]Tableau 
//2:[3,6] Le Schtroumpf sera:3 * 4 + 3 * 8 + 3 * 7 + 3 * 12 + 6 * 4 + 6 * 8 + 6 * 7 + 6 * 12 = 279

let tab1 = [4, 8, 7, 12]

let tab2 = [3, 6]
    // let schtroumpf = tab2[0] * tab1[0] + tab2[0] * tab1[1] + tab2[0] * tab1[2] + tab2[0] * tab1[3] + tab2[1] * tab1[0] + tab2[1] * tab1[1] + tab2[1] * tab1[2] + tab2[1] * tab1[3];
    // console.log(schtroumpf)

let sch;
for (let i = 0; i < tab1.length; i++) {
    for (let j = 0; j < tab2.length; j++) {
        let sch = tab1[i] * tab2[j];
        console.log(sch)
    }

}