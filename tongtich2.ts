// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let N: Number = Number(question("Nhap mot so nguyen: "));
let sum:number = 1 ;
// Ouput
for (let i = 1; i <= N; i++) {
    sum*=i;
}
console.log(sum);

