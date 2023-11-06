
let heading = document.createElement('h1');
heading.setAttribute('id', 'heading');


let greeting = document.createElement('h1');
greeting.setAttribute('id', 'greeting');

setTimeout(function(){
    console.log('10');
    heading.innerText='10'
}, 1000);  
setTimeout(function(){
    console.log('9');
    heading.innerText='9'
}, 2000);
setTimeout(function(){
    console.log('8');
    heading.innerText='8'
}, 3000);
setTimeout(function(){
    console.log('7');
    heading.innerText='7'
}, 4000);
setTimeout(function(){
    console.log('6');
    heading.innerText='6'
}, 5000);
setTimeout(function(){
    console.log('5');
    heading.innerText='5'
}, 6000);
setTimeout(function(){
    console.log('4');
    heading.innerText='4'
}, 7000);
setTimeout(function(){
    console.log('3');
    heading.innerText='3'
}, 8000);
setTimeout(function(){
    console.log('2');
    heading.innerText='2'
}, 9000);
setTimeout(function(){
    console.log('1');
    heading.innerText='1';
}, 10000);
setTimeout(function(){
    console.log('1');
    heading.innerText='';
    greeting.innerText= 'Happy Independence Day'
}, 11000);

document.body.append(heading);
document.body.append(greeting);
