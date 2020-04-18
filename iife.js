//Execute this file contents on the console of your browser or CodePen or JSFiddle.

const BasicCalculatorLibrary = ((firstNumber, secondNumber)=>{
    return {
        add: ()=>{
           return(firstNumber + secondNumber) 
        },
        subtract: ()=>{
            return(firstNumber - secondNumber) 
        },
        multiply: ()=>{
            return(firstNumber * secondNumber) 
        },
        divide: ()=>{
            return(firstNumber / secondNumber) 
        }
    }
})(10, 10);

console.log(BasicCalculatorLibrary.add())