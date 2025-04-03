## On attend que la page se charge

``` javascript
// VARIABLES GLOBALES
let currentValue = 0
let currentOperator = null


// GESTION DES CHIFFRES
let numbers = document.querySelectorAll("button.number")
//console.log(numbers)

numbers.forEach((e) => e.addEventListener("click", () => {
    //console.log(e.innerHTML)
    updateDisplay(e.innerHTML)
}))
```
``` javascript
const keys = calculator.querySelector('.calculator__keys')

const num_buttons = document.querySelectorAll('.calculator__keys button:not([data-action])')
``` 

``` javascript
document.addEventListener('DOMContentLoaded', ()=> {
    Highcharts.chart('container', {
      // add config here
    });
});


// ou 

window.addEventListener('load', ()=> {
    Highcharts.chart('container', {
      // add config here
    });
});
```

Et dans le même esprit, on évite les événements sur les éléments directement

`<button onclick="f(7)">7</button>`


## Du bon nommage

``` javascript

let a=0;

let preoperation = true

``` 

## On factorise

``` javascript

    let plus = document.querySelector("[data-action='add']");
    plus.addEventListener("click", () => {
      calcul()
      operateur = "plus"
      console.log(resultat)
      debut = false
      document.getElementById("ecran").innerHTML = ""
    })

// et ce pour tous les opérateurs

document.getElementsByClassName("calculator__display")[0]
// accédé 5 fois dans le fichier


        } else if ((action === "multiply" || action === "add" || action === "subtract" || action === "divide") && !divByZero && number){
            if (calcul==="multiply"){
                resultat = resultat*parseFloat(displayedNum)
            } else if (calcul === "add"){
                resultat += parseFloat(displayedNum)
            } else if (calcul === "subtract"){
                resultat -= parseFloat(displayedNum)
            } else if (calcul === "divide"){
                if (displayedNum != '0'){
                    resultat = resultat/parseFloat(displayedNum)
                } else{
                    display.textContent = "Div by 0, press AC"
                    divByZero = true
                } 
            }else {
                resultat = parseFloat(displayedNum)
            }
            number = false
            calcul = action
            operator = true
        } else if (action === "calculate" && number){
            if (calcul==="multiply"){
                resultat = resultat*parseFloat(displayedNum)
            } else if (calcul === "add"){
                resultat += parseFloat(displayedNum)
            } else if (calcul === "subtract"){
                resultat -= parseFloat(displayedNum)
            } else if (calcul === "divide"){
                if (displayedNum != '0'){
                    resultat = resultat/parseFloat(displayedNum)
                } else{
                    display.textContent = "Div by 0, press AC"
                    divByZero = true
```

## To comment or not to comment

``` javascript
let operation_en_cours=0 // Permet de savoir si le clic précédent était une touche opération ou non
let stockage_nombre=0 // Permet de stocker un nombre pour les calculs
``` 

## Bonnes pratiques cognitives

14 commits vs 1 commit

`//ETAPES A FAIRE`

    let last_action =null;
    function affiche(event){
        let bouton_appuye = event.target;
        let valeur_affichee = document.querySelector(".calculator__display").textContent;

## Rien de spécifique à sa plateforme dans git

![](./Utilisez%20le%20gitignore.png)

## Et pour la fin

display.textContent = eval( display.textContent.replace("×", "*").replace("÷", "/"));
