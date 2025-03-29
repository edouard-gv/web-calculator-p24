// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display =  document.querySelector('.calculator__display')
let previousKeyType = calculator.dataset.previousKeyType || 'number';


const calculate = (n1, operator, n2)=>{
    let N1= parseFloat(n1)
    let N2= parseFloat(n2)
    let result=''
    if (operator==="add"){
        result= N1+N2
    }else if (operator==="substract"){
        result=N1-N2
    } else if (operator==="multiply"){
        result=N1*N2
    } else if (operator==="divide"){
        result=N1/N2
    }
    return result
}
let pressedKeys = []

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action= key.dataset.action
    const keyContent= key.textContent
    const displayedNum= display.textContent

    if (!action){
        if(displayedNum==='0' || previousKeyType === 'operator'){
            display.textContent=keyContent
        } else {
            display.textContent=displayedNum+keyContent
        }
        previousKeyType='number'
        pressedKeys.push('number')

    } else if (action==='decimal' && previousKeyType!=='operator'){
        if (!displayedNum.includes(".")) {  // ne pas mettre 2 points décimaux
            display.textContent=displayedNum+keyContent
        } else if (previousKeyType==='operator'){
            display.textContent='0.'
        }
        previousKeyType='decimal'
        pressedKeys.push('decimal')

    } else if (action==='clear') {    // OK
        display.textContent="0"
        previousKeyType='clear'
        if (previousKeyType==='clear'){
            firstValue='0'
        }
        pressedKeys.push('clear')

    } else if (action==='add'
            || action==='substract'
            || action==='multiply'
            || action==='divide' && previousKeyType!=='operator'){

        if (pressedKeys.includes('operator') && previousKeyType!=='calculate'){
            const lastSeq=pressedKeys.slice(pressedKeys.indexOf('operator'))
            if (!['operator','clear'].includes(lastSeq)){
                const firstValue=calculator.dataset.firstValue
                const operator=calculator.dataset.operator
                const secondValue= displayedNum
                calculator.dataset.firstValue=calculate(firstValue, operator, secondValue)  // stocke le calcul intermédiaire
                calculator.dataset.operator=action
            }

        } else {

        calculator.dataset.firstValue=displayedNum
        calculator.dataset.operator=action
        pressedKeys.push('operator')
        }
        previousKeyType='operator'

    } else if (action==='calculate' && !['calculate', 'operator'].includes(previousKeyType)){
        const firstValue=calculator.dataset.firstValue
        const operator=calculator.dataset.operator
        const secondValue= displayedNum
        display.textContent=calculate(firstValue, operator, secondValue)
        calculator.dataset.firstValue=calculate(firstValue, operator, secondValue)
        previousKeyType='calculate'
        pressedKeys=[]
    } 
  }
})
