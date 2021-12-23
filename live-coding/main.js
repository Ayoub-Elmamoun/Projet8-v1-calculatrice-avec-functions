
// declaration des variables

let PremierNombre, SecondNombre , operation , resultat ;
let PremierNombreStr , SecondNumbreStr ;

//affichage


function ClickNombre(nombre)
{
    if (PremierNombre == undefined){       
        PremierNombre = nombre
    }
    else
    {
        if (SecondNomber == undefined){
            SecondNomber = nombre
        }
    }
    
    affichage()
}


function calculer(PremierNombre, SecondNombre, operation)
{
    let resultat = undefined

    switch (operation) {
        case '+':
            resultat = PremierNombre + SecondNombre;
            break;
        case '-':
            resultat = PremierNombre - SecondNombre;
            break;
    }
    return resultat
}


function affichage(nombre)
{
    let affichage = document.getElementById("affichage")
    affichage.value=""

    if ( PremierNombre != undefined && SecondNombre != undefined && operation != undefined ) {
        display.value=nombre
    }
    else{

        if( PremierNombreStr != undefined ) {
           affichage.value += PremierNombre 
        }

        if ( SecondNombreStr != undefined ) {
            affichage.value += operation
        }

        if (operation != undefined) {
           affichage.value += operation
        }
    }
}

function resultat()
{
    
    PremierNombre = parseFloat(PremierNombreStr)
    SecondNombre = parseFloat(SecondNumbreStr)
    resultat = calculer(PremierNombre,SecondNombre,operation)
    affichage(resultat)

}