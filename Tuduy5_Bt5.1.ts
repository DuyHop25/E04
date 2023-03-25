// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let a:number = 10;
let b:number = 20;
let Chan:string = "Chan: ";
let Le:string = "Le: ";
// Ouput
for (let i = a; i <= b; i++) {
    if(a % 2 == 0)
        Chan += a + " ";
    else
        Le += a + " ";
}
console.log(Chan);
console.log(Le);
