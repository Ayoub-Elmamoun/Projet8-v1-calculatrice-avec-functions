// declaration des variables

let x,y,result,operation
let xStr , yStr

// traitement

function ClickNum(number)
{
   if (x == undefined) {
        x=number
   }
   else {
       if (y == undefined) {
           y=number
       }
   }

   affichage()
}

function affichage(number)
{
    let affichage=document.getElementById("affichage")
    affichage.value = ""
    if (x != undefined && y != undefined && operation != undefined) {
        affichage.value = number
    }