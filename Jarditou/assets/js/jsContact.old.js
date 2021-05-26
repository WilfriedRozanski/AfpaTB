// Déclaration des Regex
const filtre1carac = new RegExp("^[a-zA-ZÀ-ÿ ]+$");
const filtrecpost = new RegExp("^[0-9]{5}$");
const filtreemail = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");
const filtredate = new RegExp("^[0-9]{2}[\-/][0-9]{2}[\-/][0-9]{4}$");

// Déclaration des éléments à vérifier
let champsVerif = document.querySelectorAll("#formContact input, #formContact select, #formContact textarea");// Récupère tous nos champs du formulaire
let champsError = document.querySelectorAll("#formContact small"); // Les champs d'erreur en dessous des champs de saisies à tester
let saisieSexe = document.getElementsByName("sexe");
let saisiedate = document.querySelector('#date');
let saisieCP = document.querySelector('#codepostal');
let saisieMail = document.querySelector('#email');
let saisieQuestion = document.querySelector('#question');
let formEnvoi = document.querySelector('#btSubFormEnvoyer');
let formReset = document.querySelector('#btSubFormEffacer');
//let champsVerif = document.getElementsByTagName("input,select,textarea");// Récupère tous nos champs du formulaire
//let champsError = document.getElementsByTagName("small"); // Les champs d'erreur en dessous des champs de saisies à tester
/*for(i=0;i<champsVerif.length;i++)
{
    champsVerif[i].style.borderColor = "green";
    //champsVerif[i].style.display="none";
    champsError[i].style.display="inline";
    console.log("i:"+i);
}/*
champsError.forEach(element => {
    element.style.display="inline";
    console.log("element:"+element);
});*/
/*
// conversion avec Array.from()
Array.from(champsError).map(element => {
    element.style.display="inline";
    return element;
  });*/
//  Test de Fonction qui test la validité de Champs multiple
/*function testformat(champVerif,champError)
{
    let tabform = [];
    for (i=0; i<champVerif.length; i++) 
    {
        console.log("i:"+i+" champVerif["+i+"]:"+champVerif[i]+" champError["+i+"]:"+champError[i]);
        champVerif[i].addEventListener('keyup',()=>{
            if(filtre1carac.test(champVerif[i].value)==false)
            {// Affichage d'un message d'erreur
                champVerif[i].style.borderColor = "red";
                champError[i].style.display="inline";
            }
            else
            {
                champVerif[i].style.borderColor = "blue";
                champError[i].style.display="none";
                tabform.push(champVerif[i]);
            }
        });
    }
    return tabform;
  
}*/

function champValid(champ)
{
    let tabform = [];//copie des éléments renseignés requis restants dans un tableau car si elements est un nodelist, impossible a modifier.
    for (let i = 0; i < champ.length; i++) {
    
        if (elements[i].validity.valueMissing) {
            e.preventDefault();
            fonctionErreur(elements[i]);
        } else {
            tableau.push(elements[i]);
            fonctionNettoyer(elements[i]);
        }
    }
    return tabform;
}

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


champsVerif[0].addEventListener('keyup',()=>{ // Test dynamique du champ Nom
    testformat(champsVerif[0],0,filtre1carac,"input");
});

champsVerif[1].addEventListener('keyup',()=>{ // Test dynamique du champ Nom
    testformat(champsVerif[1],1,filtre1carac,"input");
});
/*
saisieSexe.addEventListener('change',()=>{
    testformat(saisieSexe,2,"","radio");
});

saisiedate.addEventListener('change',()=>{
    testformat(saisiedate,3,filtredate,"date");
});
*/
saisieCP.addEventListener('change',()=>{
    testformat(saisieCP,4,filtrecpost,"input");
});

saisieMail.addEventListener('change',()=>{
    testformat(saisieMail,5,filtreemail,"input");
});
// Fonction qui test la validité des champs requis apres le clic du bouton envoyer
let valid = formEnvoi.addEventListener('click',function (e){ //déclaration d'une varaibale pour annuler l'envoi sur une nouvelle page
    //e.preventDefault();// Annule l'évènement par défaut du navigateur qui envoi les données du 'sumbmit' dans une nouvelle page
    /*let champsVerif = document.querySelectorAll("#formContact input, #formContact select, #formContact textarea");// Récupère tous nos champs du formulaire
    let champsError = document.querySelectorAll("#formContact small"); // Les champs d'erreur en dessous des champs de saisies à tester
    champsError.forEach(element => {
        element.style.display="inline";
        console.log("element:"+element);
    });
    champsVerif.forEach(element => {
        element.style.display="inline";
        element.style.display = "green";
        console.log("element:"+element);
    });*/
});
// Fonction qui réinitialise les champs du formulaire
formReset.addEventListener('click', ()=> {
    alert('Vous avez réinitialisé le formulaire !');
    document.getElementById("formContact").reset();
});

