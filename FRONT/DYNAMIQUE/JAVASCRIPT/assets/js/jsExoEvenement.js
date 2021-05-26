//Exo Controle saisie
function controler()
{
    let controle=document.getElementById("textBoxSaisie").value;
    let btcontrole=document.getElementById("buttoncontrole");
    btcontrole.addEventListener("click", function()
        {alert("Vous avez saisi: "+controle);} 
    );
    console.log("test controle :"+controle);
}

//Exo Nombre magique
function getRandomIntInclusive(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function testnbmagique(nbverif)
{
    nbmagique=getRandomIntInclusive(0,5);
    console.log("test2 nbmagique :"+nbmagique+" nbverif :"+nbverif);
    if(nbverif==nbmagique)
    {
        alert("Félicitation c'est le bon nombre");
    }
    else if(nbverif>nbmagique)
    {
        alert("Votre nombre est trop grand");
    }
    else
    {
        alert("Votre nombre est trop petit");
    }
}

function verif()
{
    let nbverif=document.getElementById("textBox1").value;
    let btverif=document.getElementById("button1");
    btverif.addEventListener("click", testnbmagique(nbverif));
    document.getElementById("resultat").innerHTML = "Résultat nbmagique : "+nbmagique+" nbverif : "+nbverif;
}