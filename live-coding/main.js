
// declaration des variables

let PremierNombre, SecondNombre , operation , resultat ;
let PremierNombreStr , SecondNumbreStr ;

//affichage


function clickNombre(nombre)
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
    let result = undefined

    switch (operation) {
        case '+':
            result = PremierNombre + SecondNombre;
            break;
        case '-':
            result = PremierNombre - SecondNombre;
            break;
    }
    return result
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
    result = calculer(PremierNombre,SecondNombre,operation)
    affichage(result)

}