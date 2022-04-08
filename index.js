const stringLength= (argument) => {
    const len=argument.length;
    if (len<1 || len > 10){
        throw new Error('Please enter valid String, it must be between 1 and 10');
    }
    
    return argument.length;
}
const reverseString= (argument) => {
    let array=argument.split('');
    let reverse=array.reverse().join('');
    return reverse;
}

const capitalize= (inputValue) =>{
    let array=inputValue.split('');
    array[0]=array[0].toUpperCase();
    let str=array.join('');
    return str;
}
class Calculator {
    add = (x, y) => {
         if (Number.isInteger(x) === false || Number.isInteger(y) === false) {
            throw new Error('Operators are not integers');
        }
        if (x > 100 || y > 100) {
            throw new Error('Values has to be less than 101');
        }
        return x + y;
    }
    subtract = (x, y) => {
        if (Number.isInteger(x) === false || Number.isInteger(y) === false) {
            throw new Error('Operators are not integers');
        }
        if (x > 100 || y > 100) {
            throw new Error('Values has to be less than 101');
        }
        return x - y;
    }
    divide = (x, y) => {
        
        if (Number.isInteger(x) === false || Number.isInteger(y) === false) {
            throw new Error('Operators are not integers');
        }
        if (y === 0) {
            throw new Error('Operation not allowed');
        }
        return x / y;
    }
    multiply = (x, y) => {
        
        if (Number.isInteger(x) === false || Number.isInteger(y) === false) {
            throw new Error('Operators are not integers');
        }
        if (x > 100 || y > 100) {
            throw new Error('Values has to be less than 101');
        }
        return x * y;
    }
}
module.exports = { stringLength, reverseString, capitalize, Calculator };