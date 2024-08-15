var a = 10;
var b = 20;

function sum(){
    return a + b;
}
console.log('The sum of ' + a + ' and ' + b + ' is: ' + sum);
sum(10,20)


function diff(){
    return a - b;
}
console.log('The difference of ' + a + ' and ' + b + ' is: ' + diff);
diff(10,20)


function product(){
    return a * b;
}
console.log('The sum of ' + a + ' and ' + b + ' is: ' + product);
product(10,20)



function div(){
    return a / b;
}
console.log('The sum of ' + a + ' and ' + b + ' is: ' + div);
div(10,20)


//with arrow function below

(a + b) => {
    return a + b;
}
console.log('The sum of ' + a + ' and ' + b + ' is: ' + sum);
sum(10,20)


(a - b) => {
    return a - b;
}
console.log('The difference of ' + a + ' and ' + b + ' is: ' + diff);
diff(10,20)


(a * b) => {
    return a * b;
}
console.log('The sum of ' + a + ' and ' + b + ' is: ' + product);
product(10,20)


(a / b) => {
    return a / b;
}
console.log('The sum of ' + a + ' and ' + b + ' is: ' + div);
div(10,20)
