
// declaration des variables

let PremierNombre, SecondNomber , operation , resultat ;
let PremierNombreStr , SecondNumberStr ;

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


function calculer(PremierNombre, secondNomber, operation) {
    let resultat = undefined

    switch (operation) {
        case '+':
            resultat = PremierNombre + secondNomber;
            break;
        case '-':
            resultat = PremierNombre - secondNomber;
            break;
    }
    return resultat
}
function affichage(nombre)
{
    let affichage = document.getElementById("affichage")
    affichage.value=""

}