// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let m:number = 10;
let n:number = 20;
// Ouput
for (let i = n; i >= m; i--) {
    if (i % 6 == 0){
        console.log(i)
        break;
    }
}
