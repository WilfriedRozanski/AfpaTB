//Exo1
var numero=1;
do
{
    var prenom = prompt("Invite de script:\n\nSaisissez le prnénom N°"+numero+"\nou Clic sur Annuler pour arrêter la saisie");
    numero++;
}while(prenom!=" ");

//Exo2
var nombre= parseInt(prompt("Veuillez saisir un nombre compris entrez 1 et 30"));
if(isNaN(nombre) || nombre>30 || nombre==0)
{
    alert("Vous n'avez pas saisi un petit nombre !\nRafraichissez la page");
}  
else
{
    do
    {
        alert("N°\n"+nombre);
        nombre--;
    }while(nombre!=0);
}

//Exo3
var somme=0;
var moyenne=0;
var temp=0;
do
{
    var entier= parseInt(prompt("Veuillez saisir un entier et tapper 0 pour le résultat"));
    if(isNaN(entier))
    {
        alert("Vous n'avez pas saisi un entier superieur à 0 !\nRafraichissez la page");
        break;
    }  
    else
    {   
        if(entier!=0)
        {
             
            temp++;
        }
        else
        {
            break;
        }
    }
}while(entier!=0);
moyenne=somme/temp;
alert("La somme est :"+somme+" et la moyenne est :"+moyenne);

//Exo4
var total=0;
var nMultiple= parseInt(prompt("Veuillez saisir un nombre de multiple compris entrez 1 et 10"));
var entierX= parseInt(prompt("Veuillez saisir un entier"));
if(isNaN(entierX))
{
    alert("Vous n'avez pas saisi un entier !\nRafraichissez la page");
}  
else if(nMultiple==0 ||nMultiple>10)
{
    alert("Vous n'avez pas saisi un multiple correct !\nRafraichissez la page");
}
else
{
    for(i=1;i<=nMultiple;i++)
    {
        total=i*entierX;
        console.log(i+" x "+entierX+" = "+total);
    }
    alert("Le resultat est affiché dans la console du navigateur");
}

//Exo5
//var p=0;
var nbVoyelle=0;
var voyelles = "aeiouy";
var mot=prompt("Exo 5 Nb Voyelle:\n\nSaisissez un mot");

for(i=0; i<mot.length; i++)
{
    console.log("test"+i);
    var lettre = mot.substring(i, i+1);
    if (voyelles.indexOf(lettre) != -1) 
    {
        nbVoyelle++;
    }
    console.log("mot "+mot+" i "+i+" lettre '"+lettre+"' nbvoyelles "+nbVoyelle);
}
alert("Le nombre de voyelle dans "+mot+" est de "+nbVoyelle);

