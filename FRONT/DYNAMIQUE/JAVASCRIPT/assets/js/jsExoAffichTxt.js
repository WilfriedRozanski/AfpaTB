var nom = window.prompt("Saisissez votre nom");

var prenom = window.prompt("Saisissez votre prénom");

var reponse = window.confirm("Etes-vous un Homme");
    if (reponse == true) {
        window.alert("Bonjour Monsieur "+nom+" "+prenom+"\n Bienvenue sur notre site");
    } 
    else {
        window.alert("Bonjour Madame "+nom+" "+prenom+"\n Bienvenue sur notre site");
    
    }
