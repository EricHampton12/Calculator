let oldNum = 0;
let newNum = 0;
var result = '=';


function calculator(oldNum, newNum, op) {
    switch (op){
        case '/':
            return oldNum / newNum;
            break;

        case '*':
            return oldNum * newNum;
            break;

        case '-':
            return oldNum - newNum;
            break;

        case '+':
            return oldNum + newNum;
            break;

        default:


    }

    
    
    
}
console.log(calculator(5,5, '+'));
