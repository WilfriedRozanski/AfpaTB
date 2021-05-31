// Fonction qui permett d'attendre que les éléments du DOM soit chargé avant d'éxécuté le jS
$(document).ready(function(){
    // Déclaration des Regex
    const filtre1carac = new RegExp("^[a-zA-ZÀ-ÿ ]+$");
    const filtrecpost = new RegExp("^[0-9]{5}$");
    const filtreemail = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");
    const filtredate = new RegExp("^[0-9]{4}[\-/][0-9]{2}[\-/][0-9]{2}$|[0-9]{2}[\-/][0-9]{2}[\-/][0-9]{4}$");
    /* Récupère tous nos éléments de saisie de notre formulaire #formContact
        dans une liste de noeud avec l'appel de querySelectorAll*/
    let champsVerif = document.querySelectorAll("#formContact input, #formContact select, #formContact textarea");
    /* Récupère tous nos champs de message d'erreur de notre formulaire
        dans une liste de noeud avec l'appel de querySelectorAll*/
    let champsError = document.querySelectorAll("#formContact small");
    //Déclaration d'un objet récupérant les  éléments de nos bouton type 'radio' ayant pour nom 'sexe'
    let radios = document.getElementsByName('sexe');
    //Déclaration des éléments concernant les deux boutons d'envoi et de reset du contenu de notre formulaire
    let formEnvoi = document.querySelector('#btFormEnvoyer');
    let formReset = document.querySelector('#btFormEffacer');

    /**
        * Fonction d'affichage des styles et champs d'erreur de notre formulaire.
        * Mais aussi de tests dans la console.
    */ 
    function champsinit() {
        champsVerif.forEach(element => { // Parcours et initialisation de tous les élements d'intéraction de notre formulaire
            element.style.border = "1px solid blue";
            console.log("element:"+element.name+" elementvalue : "+element.value+" butoncheck : "+element.checked);
        })
        champsError.forEach(element => { // Parcours et initialisation de tous les messages d'erreurs de notre formulaire
            element.style.display = "inline";
            console.log("element:"+element.id);
        });
    }

    /**
        * Fonction qui change l'apparence d'un champ de saisie ou de son message d'erreur
        * @param {Element} champ  l'élément à tester correspondant au noeud récupéré avec un querySelectorAll.
        * @param {Number} nbchampError l'index correspondant a celui d'un noeud récupéré avec un querySelectorAll.
        * @param {Boolean} formatok  un booléen pour savoir quel type de format il devra afficher.
    */
    function changerChamp(champ,nbchampError,formatok) {
        if (formatok) { // Cache le message d'erreur et la couleur de la bordure passe au vert
            champ.style.border = "1px solid #93e026"; 
            champsError[nbchampError].style.display = "none";
        } else { // Affiche le message d'erreur et la couleur de la bordure passe au rouge
            champ.style.border = "1px solid red";
            champsError[nbchampError].style.display = "inline";
        }  
    }

    /**
        * Fonction qui test dynamiquement la validité d'un élément :
        * Pour les boutons radios un test sera effectué pour changer directement leur apparence.
        * Pour les autres éléments un test de format ou de sélection affectera un booléen. 
        * Puis l'appel de la fonction changerChamp() prendra en paramètre ce booléen pour changer l'apparence des champs de notre élément.
        * @param {Element} element  l'élément à tester correspondant au noeud récupéré avec un querySelectorAll sur tous nos éléments d'intéractions.
        * @param {Number} nbchampError l'index correspondant a celui d'un noeud récupéré avec un querySelectorAll sur tous nos champs d'erreur.
        * @param {Regex} reg  une RegExp correspondant à l'élément à tester.
        * @param {Text} type  le type html de l'élement à tester.
    */
    function testformat(element,nbchampError,reg,type) {
        let formatok = false;
        if (type == "input") { // Test sur les champs de saisie  
            if (reg.test(element.value)) {
                formatok = true;
            }
        } else if (type == "select") { // Test sur la liste select de sujets
            if (element.selectedIndex) {
                formatok = true;
            }
        } else if (type == "checkbox") { // Test sur la checkbox de condition du formulaire
            if (element.checked) {
                formatok = true;
            }
        }
        changerChamp(element,nbchampError,formatok);
        if (type== "radio") { // Test sur les bouton radios 
            for (var i=0;i<radios.length;i++) {
                if (radios[i].checked) { // Cache le message d'erreur 
                    champsError[nbchampError].style.display="none";
                    radios.forEach(r => { // Les bordures de tous les boutons sont cachés 
                        r.style.border = "none";
                    }); // La couleur de la bordure et du contenu checké passe au vert
                    radios[i].style.border = "1px solid #93e026";    
                }
            }
        }
    }

    /**
        * Fonction qui vérifie et stock la valeure des éléments de notre formulaire :
        * Selon que l'élément soit valide ou pas un tableau stockera la valeur de l'élement.
        * Sinon un booléen pour indiquer que le formulaire est pas complet prendra la valeur false.
    */
    function testvalid()
    {
        let formok = true;
        let elementradio = false;
        // Déclaration d'un tableau pour stocker la regex(si il y en à une) sinon le type de tous nos éléments à tester
        let tabElements = [filtre1carac,filtre1carac,"radio","radio","radio",filtredate,filtrecpost,filtreemail,"","","select",filtre1carac,"checkbox"];
        tabform = []; // Déclaration d'un tableau pour stocker la valeur de ce qu'à choisi ou rempli l'utilisateur
        for (i=0; i<tabElements.length; i++) { 
            if (typeof(tabElements[i]) === "object") { // Test si notre élement contient une regExp 
                if (tabElements[i].test(champsVerif[i].value)) { // Test sur les champs de saisie affecté par leur regExp 
                    tabform.push(champsVerif[i].value); // Le tableau prend la valeur de notre élément dans une nouvelle case 
                } else {
                    formok = false; // Sinon notre booléen indique que le formulaire à un champ invalide 
                }
            } else {
                if (tabElements[i] == "radio") { // Test sur nos élements de type radio
                    if (champsVerif[i].checked) {
                        tabform.push(champsVerif[i].value);
                        elementradio = true;
                    }
                } else if (tabElements[i] == "select") { // Test sur notre élement de type select
                    if (champsVerif[i].selectedIndex) {
                        tabform.push(champsVerif[i].options[champsVerif[i].selectedIndex].text);
                    }else {
                        formok = false;
                    }
                } else if (tabElements[i] == "checkbox") { // Test sur notre élement de type checkbox
                    if (champsVerif[i].checked) {
                        tabform.push(champsVerif[i].value);
                    }else {
                        formok = false;
                    }
                } else { // Affectation direct sur les champs de saisie qui n'ont pas de format à respecter
                    tabform.push(champsVerif[i].value);
                }         
            }
        }
        if (elementradio == false) {
            formok = false;
        }
        // Test dans la console des différentes valeurs de nos éléments et de notre tableau 
        for (i=0; i<tabform.length; i++) {  
            console.log("i:"+i+" Elemt: "+champsVerif[i].name+" value: "+champsVerif[i].value
            +" butoncheck: "+champsVerif[i].checked+" tabform["+i+"] : "+tabform[i]);
        }  
        return formok;
    }

    champsVerif[0].addEventListener('keyup',()=>{ // Test dynamique du champ Nom 
        testformat(champsVerif[0],0,filtre1carac,"input");
    }); 
    champsVerif[1].addEventListener('keyup',()=>{ // Test dynamique du champ Prenom 
        testformat(champsVerif[1],1,filtre1carac,"input");
    }); 
    champsVerif[2].addEventListener('change',()=>{ // Test dynamique du bounton Féminin  
        testformat(champsVerif[2],2,"","radio");
    });
    champsVerif[3].addEventListener('change',()=>{ // Test dynamique du bounton Masculin 
        testformat(champsVerif[3],2,"","radio");
    }); 
    champsVerif[4].addEventListener('change',()=>{ // Test dynamique du bounton Neutre 
        testformat(champsVerif[4],2,"","radio");
    });
    champsVerif[5].addEventListener('change',()=>{ // Test dynamique de la date de naissance 
        testformat(champsVerif[5],3,filtredate,"input");
    });
    champsVerif[6].addEventListener('keyup',()=>{ // Test dynamique du champ code postal 
        testformat(champsVerif[6],4,filtrecpost,"input");
    });
    champsVerif[7].addEventListener('keyup',()=>{ // Test dynamique du champ email
        testformat(champsVerif[7],5,filtreemail,"input");
    }); 
    champsVerif[10].addEventListener('change',()=>{ // Test dynamique de la liste de selection du sujet 
        testformat(champsVerif[10],6,"","select");
    });
    champsVerif[11].addEventListener('keyup',()=>{ // Test dynamique du champ question 
        testformat(champsVerif[11],7,filtre1carac,"input");
    });
    champsVerif[12].addEventListener('change',()=>{ // Test dynamique de la checkbox de confirmation
        testformat(champsVerif[12],8,"","checkbox");
    });

    /**   
     * Fonction qui test la validité des champs requis apres le clic du bouton Envoyer
     * Avec en paramètre l'évènement 'e' correspondant à l'action lié au clic du bonton Envoyer
     * Test et change si nécessaire la valeur de notre booléen avec l'appel de la fonction testvalid()
     * Affiche l'ensemble de tous nos éléments récupéré dans une boite de dialogue si notre formulaire est complet
    */
    let valider = formEnvoi.addEventListener("click", function (e) {
        let tabAffich ="";
        let tabNomIndex = ["Nom","Prénom","Sexe","Date de naissance","Code postal","Email","Adresse"
        ,"Ville","Sujet","Question","Confirmation"];
        valider = testvalid();
        if (valider) {  
            for (var i in tabNomIndex) {
                tabAffich +="Champ["+i+"]: "+tabNomIndex[i]+" = "+tabform[i]+"\n";
            }
            alert("Félicitation votre formulaire est complet!\nVoici vos résultats : \n"+tabAffich);
        } else {  
            e.preventDefault(); // Annule l'évènement par défaut du navigateur qui envoi les données du 'sumbmit' dans une nouvelle page
            alert("Attention au moins un élément du formulaire n'est pas valide");
            return false;
        }
    });

    // Fonction qui réinitialise les champs du formulaire
    formReset.addEventListener('click', ()=> {   
        document.getElementById("formContact").reset(); // Fonction de reset de tous les éléments de notre formulaire 
        console.clear();
        champsinit(); // Ré-initialisation des styles et d'affichage d'erreur pour les test dynamiques
        alert('Vous avez réinitialisé le formulaire !');
    });

    champsinit(); // Initialisation de la page pour voir les styles et affichage des messages d'erreur de saisie
});