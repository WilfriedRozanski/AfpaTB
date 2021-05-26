// Déclaration des Regex
const filtre1carac = new RegExp("^[a-zA-ZÀ-ÿ ]+$");
const filtrecpost = new RegExp("^[0-9]{5}$");
const filtreemail = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");
const filtredate = new RegExp("^[0-9]{2}[\-/][0-9]{2}[\-/][0-9]{4}$");

// Déclaration des éléments à vérifier
let champsError = document.querySelectorAll("#formContact small"); // Les champs d'erreur en dessous des champs de saisies à tester
let saisieNom = document.getElementById("nom");
let saisiePrenom = document.getElementById("prenom");
let saisieSexe = document.getElementsByName("sexe");
let saisiedate = document.querySelector('#date');
let saisieCP = document.querySelector('#codepostal');
let saisieMail = document.querySelector('#email');
let saisieQuestion = document.querySelector('#question');
let formEnvoi = document.querySelector('#btSubFormEnvoyer');
let formReset = document.querySelector('#btSubFormEffacer');

function champValid(champ, fcterror, fctvider, e)
{
    let tabform = [];//copie des éléments renseignés requis restants dans un tableau car si elements est un nodelist, impossible a modifier.
    for (let i = 0; i < champ.length; i++) {
        if (champ[i].validity.valueMissing) {
            e.preventDefault();
            fcterror(champ[i]);
        } else {
            tabform.push(champ[i]);
            fctvider(champ[i]);
        }
    }
    return tabform;
}

function testformat(element, regex, listeElements, fonction, e) {
    for (const iterateur of listeElements) {
        if (element === iterateur) {
            if (regex.test(iterateur.value) == false) {
                e.preventDefault();
                fonction(iterateur);
            } 
        }
    }
}
/*
function testformat(champ,nbchampError,reg,type)
{
    
    if(type== "input")
    {
        if(reg.test(champ.value)==false)
        {// Affichage d'un message d'erreur et changement de couleur de la bordure
            champ.style.borderColor = "red";
            champsError[nbchampError].style.display="inline";
        }
        else
        {
            champ.style.borderColor = "blue";
            champsError[nbchampError].style.display="none";
        }
    }
    
}
*/
/*
champsVerif[0].addEventListener('keyup',()=>{ // Test dynamique du champ Nom
    testformat(champsVerif[0],0,filtre1carac,"input");
});

champsVerif[1].addEventListener('keyup',()=>{ // Test dynamique du champ Nom
    testformat(champsVerif[1],1,filtre1carac,"input");
});

saisieCP.addEventListener('change',()=>{
    testformat(saisieCP,4,filtrecpost,"input");
});

saisieMail.addEventListener('change',()=>{
    testformat(saisieMail,5,filtreemail,"input");
});*/
function nettoyer(element) {
    element = element.id + "-erreur";
    document.getElementById(element).textContent = "";
    document.getElementById(element).className = "";
}

function requis(element) {
    element = element.id + "-erreur";
    document.getElementById(element).textContent = "Champs obligatoire.";
    document.getElementById(element).className = "btn btn-primary bg-danger w-100 mt-1";
}

function mauvaisFormatDeNom(element) {
    element = element.id + "-erreur";
    document.getElementById(element).textContent = "Mauvais format. Exemples valides : 'Dupont', 'dupont, 'Jean Claude', 'jean claude', 'Jean-Claude', 'N'Bekele'.";
    document.getElementById(element).className = "btn btn-primary bg-warning w-100 mt-1";
}

function mauvaisFormatDeDate(element) {
    element = element.id + "-erreur";
    document.getElementById(element).textContent = "Mauvais format. Formats supporté : '00/00/0000' '0000/00/00' avec des slashs, espaces et tirets comme séparateurs.";
    document.getElementById(element).className = "btn btn-primary bg-warning w-100 mt-1";
}

function mauvaisFormatDeMail(element) {
    element = element.id + "-erreur";
    document.getElementById(element).textContent = "Mauvais format. Format supporté : 'moi@exemple.com'.";
    document.getElementById(element).className = "btn btn-primary bg-warning w-100 mt-1";
}

function mauvaisFormatDeCP(element) {
    element = element.id + "-erreur";
    document.getElementById(element).textContent = "Mauvais format : composé de 5 chiffres uniquement.";
    document.getElementById(element).className = "btn btn-primary bg-warning w-100 mt-1";
}
// Fonction qui test la validité des champs requis apres le clic du bouton envoyer
let valid = formEnvoi.addEventListener('click',function (e){ //déclaration d'une varaibale pour annuler l'envoi sur une nouvelle page
    //e.preventDefault();// Annule l'évènement par défaut du navigateur qui envoi les données du 'sumbmit' dans une nouvelle page
    let champsVerif = document.querySelectorAll("#formContact input, #formContact select, #formContact textarea");// Récupère tous nos champs du formulaire
    let champsok = champValid(champsVerif, requis, nettoyer, e);
    formatCorrect(document.getElementById("nom"), filtre1carac, champsok, mauvaisFormatDeNom, e);
    formatCorrect(document.getElementById("prenom"), filtre1carac, champsok, mauvaisFormatDeNom, e);
    formatCorrect(document.getElementById("naissance"), filtredate, champsok, mauvaisFormatDeDate, e);
    formatCorrect(document.getElementById("email"), filtreemail, champsok, mauvaisFormatDeMail, e);
    formatCorrect(document.getElementById("cp"), filtrecpost, champsok, mauvaisFormatDeCP, e);
});
// Fonction qui réinitialise les champs du formulaire
formReset.addEventListener('click', ()=> {
    alert('Vous avez réinitialisé le formulaire !');
    document.getElementById("formContact").reset();
});

