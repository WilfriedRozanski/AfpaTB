var modele = "Clio";

switch (modele)
{   
  case "508" :
     console.log("Modèle 508 : marque Peugeot");  
     break; 

  case "Clio" :   
  case "Laguna" :
     console.log("Modèle "+modele+" : marque Renault"); 
     break;  

  case "C5" :
     console.log("Modèle C5 : marque Citroën");
     break;

  default: 
     console.log("Modèle "+modele+": marque inconnue");
} 

//Exo1
var nombre= parseInt(prompt("Veuillez saisir un nombre"));
if(isNaN(nombre)){
    alert("Vous n'avez pas saisi un nombre !\nRafraichissez la page");
    
}  
else if(nombre%2 == 0){
    alert("Vous avez saisi un nombre pair !\n");

}
else
{
    alert("Vous avez saisi un nombre impair !\n");
   
}

//Exo2
var age=0;
var dateNaissance= parseInt(prompt("Veuillez saisir une date de naissance au format xxxx entre 1900 et2020"));
if(isNaN(dateNaissance) || dateNaissance<1900 || dateNaissance>2021){
    alert("Vous n'avez pas saisi une date de naissance correcte !\nRafraichissez la page");
    
}  
else
{
    age=2021-dateNaissance;
    if(age < 18)
    {
    alert("Vous avez "+age+"ans et vous etes mineur\n");
    }
    else
    {
        alert("Vous avez "+age+"ans et vous etes majeur\n");
    }
}

//Exo3
var ok=true;
var resulatat=0;
var nombre1= parseInt(prompt("Veuillez saisir un numérateur"));
if(isNaN(nombre1)){
    alert("Vous n'avez pas saisi un nombre !\nRafraichissez la page");
    ok=flase;
}
var nombre2= parseInt(prompt("Veuillez saisir un dénumérateur"));
if(isNaN(nombre2) && (ok==true)){
    alert("Vous n'avez pas saisi un nombre !\nRafraichissez la page");
    ok=false;
}  
if (ok==true)
{
    var operateur=(prompt("Veuillez saisir un operateur parmis + - * /"));
    switch(operateur)
    {
        case "/" :
            if(nombre2 == 0)
            {
                alert("Division par zéro impossible !\nRafraichissez la page");
            }
            else
            {
                resulat=nombre1/nombre2;
                alert("Le résultat est :"+resulat);
                break; 
            }
        case "*" :
            resulat=nombre1*nombre2;
            alert("Le résultat est :"+resulat);
            break; 
        case "+" :
            resulat=nombre1+nombre2;
            alert("Le résultat est :"+resulat);
            break; 
        case "-" :
            resulat=nombre1-nombre2;
            alert("Le résultat est :"+resulat);
            break; 
        default: 
            alert("Mauvais operateur selectionné !\nRafraichissez la page");
    }        
}
