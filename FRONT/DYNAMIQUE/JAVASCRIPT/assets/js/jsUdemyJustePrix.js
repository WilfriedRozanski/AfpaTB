// Etape 1 - Sélectionner nos éléments
let saisie = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');
// Etape 2 - Cacher l'erreur
error.style.display = "none";
// Etape 3 - Générer un nombre aléatoire Math random génère un décimal compris entre 0 et 0.99999
//Math floor prend seulement l'entier
let nbAleatoire = Math.floor(Math.random()*1001);
let coups=0;
let nombreChoisi;
// Etape 6 - Créer la fonction vérifier
function verifier(nombre)
{
    let instruction = document.createElement('div');
    if(nombre < nbAleatoire)
    {
        //Ajout d'un contenu à notre élément
        instruction.textContent = "#"+coups+" ( "+nombre+" ) C'est plus !";
        //Ajout des classes instructions et plus du fichier CSS
        instruction.className = "instruction plus";
    }
    else if(nombre > nbAleatoire)
    {
        instruction.textContent = "#"+coups+" ( "+nombre+" ) C'est moins !";
        instruction.className = "instruction moins";
    }
    else
    {
        instruction.textContent = "#"+coups+" ( "+nombre+" ) Félicitation vous avez trouvé le juste prix !";
        instruction.className = "instruction fini";
        saisie.disabled = true; //Désactive le champ une fois le nombre trouvé
    }
    //Ajout de l'élément devant les autres avec prepand pour ajouter en premier
    document.querySelector('#instructions').prepend(instruction);
}
// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
// keyup pour controler la saisie caractere par caractere
// ()=>{} Fonction anonyme qu'une fois et donc plus par la suite
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
formulaire.addEventListener('submit',(e)=>{ //déclaration d'une varaibale pour annuler l'envoi sur une nouvelle page
    e.preventDefault();// Annule l'évènement par défaut du navigateur qui envoi les données du 'sumbmit' dans une nouvelle page
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

