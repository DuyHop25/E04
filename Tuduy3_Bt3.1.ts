// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let N: Number = Number(question("Nhap mot so nguyen: "));
let d: string = "";
// Ouput
for (let i = 1; i <= N; i++) {
    if(i % 2 == 0)
        d += "$ ";
    else    
        d += "* "; 
    if (i == N) 
        console.log(d);
}