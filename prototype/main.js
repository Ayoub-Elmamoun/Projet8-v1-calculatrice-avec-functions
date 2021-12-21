
// declaration des variables

let PremierNombre, SecondNomber , operation , resultat ;
let PremierNombreStr , SecondNumberStr ;

//affichage 
function calculer(firstNumber, secondNumber, operation) {
    let _solution = undefined

    switch (operation) {
        case '+':
            _solution = firstNumber + secondNumber;
            break;
        case '-':
            _solution = firstNumber - secondNumber;
            break;
    }
    return _solution
}

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


function affichage(nombre)
{
    let affichage = document.getElementById("affichage")
    affichage.value=""

}