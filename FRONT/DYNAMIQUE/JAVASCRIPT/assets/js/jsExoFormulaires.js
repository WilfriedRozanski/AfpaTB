//Déclaration des Regex dans des constantes 
const filtre1carac = new RegExp("^[a-zA-ZÀ-ÿ ]+$");
const filtrecpost = new RegExp("^[0-9]{5}$");
const filtreemail = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");
const filtretel = new RegExp("^[0][1-9]([-. ]?[0-9]{2}){4}$");
//Cacher l'erreur
error.style.display = "none";

let champsVerif = document.querySelectorAll("#formContact input, #formContact select, #formContact textarea");
let formEnvoi = document.querySelector('#btSubFormEnvoyer');
let saisieSoc = document.querySelector('#societe');
let saisiePContact = document.querySelector('#pcontact');
let saisieCPost = document.querySelector('#cpost');
let saisieVille = document.querySelector('#ville');
let saisieEmail = document.querySelector('#email');
let saisieTel = document.querySelector('#tel');
var listeTech = document.getElementById('tech');
let btEnvoi = document.querySelector('#btSubFormEnvoyer');
let btEffacer = document.querySelector('#btSubFormEffacer');

//fontction de test dynamique caractère par caractère
// ()=> fonction anonyme à usage unique
saisieSoc.addEventListener('keyup',()=>{
    if(filtre1carac.test(saisieSoc.value)==false)
    {// Affichage d'un message d'erreur
        saisieSoc.style.borderColor = "red";
        error.style.display="inline";
    }
    else
    {
        error.style.display="inline";
        saisieSoc.style.borderColor = "blue";
    }
});
saisiePContact.addEventListener('keyup',()=>{
    if(filtre1carac.test(saisiePContact.value)==false)
    {
        saisiePContact.style.borderColor = "red";
    }
    else{
        saisiePContact.style.borderColor = "blue";
    }
});
saisieVille.addEventListener('keyup',()=>{
    if(filtre1carac.test(saisieVille.value)==false)
    {
        saisieVille.style.borderColor = "red";
    }
    else{
        saisieVille.style.borderColor = "blue";
    }
});
saisieCPost.addEventListener('keyup',()=>{
    if(filtrecpost.test(saisieCPost.value)==false)
    {
        saisieCPost.style.borderColor = "red";
    }
    else{
        saisieCPost.style.borderColor = "blue";
    }
});
saisieEmail.addEventListener('keyup',()=>{
    if(filtreemail.test(saisieEmail.value)==false)
    {
        saisieEmail.style.borderColor = "red";
    }
    else{
        saisieEmail.style.borderColor = "blue";
    }
});
saisieTel.addEventListener('keyup',()=>{
    if(filtretel.test(saisieTel.value)==false)
    {
        saisieTel.style.borderColor = "red";
    }
    else{
        saisieTel.style.borderColor = "blue";
    }
});

/* fonction de test pour les types radio
function check() {
var inputs = document.querySelectorAll('input[type=radio]:checked'),
inputsLength = inputs.length;
for (var i = 0; i < inputsLength; i++) {
alert('La case cochée est la n°' + inputs[i].value);
}*/

list.addEventListener('change',()=> {
    // On affiche le contenu de l'élément <option> ciblé par la
    // propriété selectedIndex
    alert(list.options[list.selectedIndex].innerHTML);
});

saisieSoc.addEventListener('keyup',()=>{
    if(filtre1carac.test(saisieSoc.value)==false)
    {// Affichage d'un message d'erreur
        saisieSoc.style.borderColor = "red";
        error.style.display="inline";
    }
    else
    {
        error.style.display="inline";
        saisieSoc.style.borderColor = "blue";
    }
});
saisie.addEventListener('keyup',()=>{
    if(isNaN(saisie.value))
    {// Affichage d'un message d'erreur
        error.style.display="inline";
    }
    else
    {//Cacher le message d'erreur
        error.style.display="none";
    }
});
// Etape 5 - Agir à l'envoi du formulaire
formEnvoi.addEventListener('submit',(e)=>{ //déclaration d'une varaibale pour annuler l'envoi sur une nouvelle page
    //e.preventDefault();// Annule l'évènement par défaut du navigateur qui envoi les données du 'sumbmit' dans une nouvelle page
    if((isNaN(saisie.value)) || (saisie.value==""))
    {//Mettre bordure du formulaire en rouge 
        saisie.style.borderColor = "red"
    }
    else{//Mettre bordure du formulaire en gris
        coups++;
        saisie.style.borderColor = "silver";
        nombreChoisi = saisie.value;
        saisie.value = '';// réinitialiser le champ de saisie une fois le nombre choisi stocker
        verifier(nombreChoisi);
    }
});

myForm.addEventListener('reset', function(e) {
alert('Vous avez réinitialisé le formulaire !');
});