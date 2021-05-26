//Exo3
document.write("<h4>Exo 3 :Le Tri à Bulle :</h4>");
tabBulle=[5,18,14,4,26];
var cpt=0;// compteur de passage
trifini=false;
document.write("Tableau initial "+tabBulle);
do
{
    var temp=0;
    for(i=0;i<4;i++)
    {
        if(tabBulle[i+1]<tabBulle[i])
        {
            temp=tabBulle[i];
            tabBulle[i]=tabBulle[i+1];
            tabBulle[i+1]=temp;
        }
        console.log("tab"+i+" "+tabBulle[i]+" tab"+i+"+1 "+tabBulle[i+1]+" temp "+temp+" tabulle  "+tabBulle);
    }
    if(temp==0)
    {
        trifini=true;
    }
    cpt++;
    console.log(" temp "+temp+" tabulle  "+tabBulle+"trifini "+trifini);
    document.write("<br>Passage n°"+cpt+"  "+tabBulle);
    
}while(trifini==false);
//Exo1
document.write("<h4>Exo 1 :Le Petit Tab :</h4>");
do{
    var tailleTab= parseInt(prompt("Veuillez saisir la taille du tableau entre 1 et 10"));
    if((isNaN(tailleTab)) || (tailleTab>10) || (tailleTab==0))
    {
        alert("Vous n'avez pas saisi une taille correcte !\nRafraichissez la page");
    }  
    else
    {
        var tabEntier= Array(tailleTab);
        for(var entier=0; entier<tailleTab; entier++)
        {
            tabEntier[entier]=parseInt(prompt("Veuillez saisir un entier"));
            if(isNaN(tabEntier[entier]))
            {
                tabEntier[entier]=[0];
            }
            console.log("\n test :\nTab["+entier+"] = "+tabEntier[entier]);
            document.write("Tab["+entier+"] = "+tabEntier[entier]+"\n");
        }
    }
}while((isNaN(tailleTab)) || (tailleTab>10) || (tailleTab==0));

//Exo2
alert("Exo2\n");

function GetInteger()
{
    do
    {
        var tailleTab= parseInt(prompt("Veuillez saisir un nombre "));
        if(isNaN(tailleTab))
        {
            alert("Vous n'avez pas saisi un nombre \nRafraichissez la page");
        }  
        else
        {
            return tailleTab;
        }
    }while(isNaN(tailleTab));
}

function IniTab()
{
    do
    {
        var nbPostes= parseInt(prompt("Veuillez saisir un nombre de postes entre 3 et 10"));
        if((isNaN(nbPostes)) || (nbPostes<2) || (nbPostes>10))
        {
            alert("Vous n'avez pas saisi un nombre de postes entre 3 et 10\nRafraichissez la page");
        }  
        else
        {
            tabPostes= Array(nbPostes);
            return tabPostes;
        }
    }while((isNaN(nbPostes)) || (nbPostes<2) || (nbPostes>10));
}

function SaisieTab(tabPostes)
{
    for(i=0;i<tabPostes.length;i++)
    {   
        tabPostes[i]=GetInteger();
        if(isNaN(tabPostes[i]))
        {
            tabPostes[i]=[0];
        }
        //console.log("\n test1 SaisieTab :\nTab["+i+"] = "+tabPostes[i]);
    }
}

function AfficheTab(tabPostes)
{
    for(i=0;i<tabPostes.length;i++)
    {
        document.write("<p>Tab["+i+"] = "+tabPostes[i]+"</p>");
    }
}

function RechercheTab(tabPostes)
{
    var tailleTab=tabPostes.length - 1;
    do
    {
        var indexPoste= parseInt(prompt("Veuillez saisir l'index du poste entre 0 et "+tailleTab));
        if((isNaN(indexPoste)) || (indexPoste<0) || (indexPoste > tailleTab))
        {
            alert("Vous n'avez pas saisi un index entre 0 et "+tailleTab+"\nRafraichissez la page");
        }  
        else
        {
            document.write("Tab["+indexPoste+"] = "+tabPostes[indexPoste]+"\n");
        }
    }while((isNaN(indexPoste)) || (indexPoste<0) || (indexPoste > tailleTab));
}

function InfoTab(tabPostes)
{
    var max=0;
    var moy=0;
    for(i=0;i<tabPostes.length-1;i++)
    {
        if(tabPostes[i]>max)
        {
            max=tabPostes[i];
        }
        console.log("\n testmax SaisieTab :\nTab["+i+"] = "+tabPostes[i]+" max: "+max);
    }
    var sommeTab=0;
    for(i=0;i<tabPostes.length;i++)
    {
        sommeTab+=tabPostes[i];
    }
    moy=sommeTab/tabPostes.length;
    document.write("<p>Le max est : "+max+" et la moyenne est : "+moy+"</p>");
}
        //Initialistaion du tableau

tabPostes=new Array();
tabPostes=IniTab();
SaisieTab(tabPostes);
for(i=0;i<tabPostes.length;i++)
{
    console.log("\n test SaisieTab :\nTab["+i+"] = "+tabPostes[i]);
}

        //Affichage et choix du Menu
document.write("<h4>Exo 2 :Le Menu :</h4>")
var Menu=[" 1 : Afficher contenu des Postes"," 2: Affichage d'un contenue avec saisie du poste"," 3: Affichage du maximum et de la moyenne des postes","4: Sortir du menu"];
document.write("<p>Choisissez votre option : </p>");
for(i=0;i<4;i++)
{
    document.write(""+Menu[i]+"<br>");
}
var sortirMenu=false;
do
{
    choix= parseInt(prompt("Indiquez le chiffre de votre option 1/2/3/4"));
    if((isNaN(choix)) || (choix>4) || (choix==0))
    {
        alert("Vous n'avez pas saisi un choix correct");
    }
    else if (choix<4)
    {
        document.write("<br>Choix N°"+choix+"<br>");
        if(choix==1)
        {   
            document.write("<p>Vous avez choisi l'option : Afficher contenu des Postes  : </p>");
            AfficheTab(tabPostes);
        }
        else if (choix==2)
        {   
            document.write("<p>Vous avez choisi l'option : Affichage d'un contenue avec saisie du poste  : </p>");
            RechercheTab(tabPostes); 
        }else
        {
            document.write("<p>Vous avez choisi l'option :  Affichage du maximum et de la moyenne des postes : </p>");
            InfoTab(tabPostes);
        }
    }
    else
    {
        document.write("<br>Bye!");
        sortirMenu=true;
    }
}while(sortirMenu==false);